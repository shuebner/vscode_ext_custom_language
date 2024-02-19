import { CharStream, CommonTokenStream, ErrorListener, Lexer, ParseTreeWalker, Parser, ParserRuleContext, RecognitionException, Recognizer, Token, TokenStream } from 'antlr4';
import {
	Diagnostic, Range,
} from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { BlockContext, BlockHeaderContext, ByteAmountContext, TypeContext, VariableDefinitionContext } from './S7BlockSequence/S7BlockSequenceParser';
import S7BlockSequenceListener from './S7BlockSequence/S7BlockSequenceListener';

export class AntlrValidator<TParser extends Parser> {
	public constructor(
		private lexerFactory: (cs: CharStream) => Lexer,
		private parserFactory: (ts: TokenStream) => TParser,
		private parseTree: (parser: TParser) => ParserRuleContext) {
	}

	public Validate(document: TextDocument): Diagnostic[] {
		const text = document.getText();
		const chars = new CharStream(text); // replace this with a FileStream as required
		const lexer = this.lexerFactory(chars);
		const tokens = new CommonTokenStream(lexer);
		const parser = this.parserFactory(tokens);
		const diagnosticsListener = new DiagnosticsListener();
		parser.addErrorListener(diagnosticsListener);

		const tree = this.parseTree(parser);
		const syntaxDiagnostics = diagnosticsListener.diagnostics;

		const sumListener = new ByteAmountListener();
		ParseTreeWalker.DEFAULT.walk(sumListener, tree);
		const semanticDiagnostics = sumListener.diagnostics;

		return syntaxDiagnostics.concat(semanticDiagnostics);
	}
}

class DiagnosticsListener extends ErrorListener<Token> {
	public diagnostics: Diagnostic[] = [];

	syntaxError(_recognizer: Recognizer<Token>, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException | undefined): void {
		const diagnostic = {
			message: msg,
			range: {
				start: { line: line - 1, character: column },
				end: { line: line - 1, character: column + offendingSymbol.stop - offendingSymbol.start + 1 }
			},
			source: 's7db'
		};
		this.diagnostics.push(diagnostic);
	}
}

class ByteAmountListener extends S7BlockSequenceListener {
	override exitBlock = this.exitBlockImpl;

	public diagnostics: Diagnostic[] = [];

	private exitBlockImpl(ctx: BlockContext) {		
		const byteAmountContext = ctx.blockHeader().byteAmount();
		const byteAmount = Number.parseInt(byteAmountContext.getText());

		const definitions = ctx.variableDefinitions().variableDefinition_list()
			.map(d => ({ definition: d, offset: getByteAmount(d)}))
			.sort((a, b) => a.offset - b.offset);
		
		const highestOffsetDefinition = definitions[definitions.length - 1];
		const highestOffset = highestOffsetDefinition.offset;
		const numberOfBytesOfHighestOffset = getNumberOfBytes(highestOffsetDefinition.definition.type_());
		const varNameForHighestOffset = highestOffsetDefinition.definition.varName().getText();
		const minimumTotalBytes = highestOffset + numberOfBytesOfHighestOffset;

		if (minimumTotalBytes > byteAmount) {
			const byteAmountToken = byteAmountContext.POS_INT().symbol;
			const diagnostic = {
				range: getRange(byteAmountToken),
				message: `byte amount must be at least ${minimumTotalBytes}.\n${numberOfBytesOfHighestOffset} bytes are read from highest offset ${highestOffset} into variable ${varNameForHighestOffset}`
			};

			this.diagnostics.push(diagnostic);
		}
	}
}

function getByteAmount(variableDefinition: VariableDefinitionContext) : number {
	return Number.parseInt(variableDefinition.byteOffset().getText());
}

function getNumberOfBytes(type: TypeContext) : number {
	if (type.short()) {
		return 2;
	}

	if (type.int()) {
		return 4;
	}

	return 0;
}

function getRange(token: Token): Range {
	return {
		start: { line: token.line - 1, character: token.column },
		end: { line: token.line - 1, character: token.column + token.stop - token.start + 1 }
	};
}