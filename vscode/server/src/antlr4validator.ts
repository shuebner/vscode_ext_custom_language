import { CharStream, CommonTokenStream, ErrorListener, Lexer, Parser, ParserRuleContext, RecognitionException, Recognizer, Token, TokenStream }  from 'antlr4';
import {
	Diagnostic,
} from 'vscode-languageserver/node';
import { TextDocument } from 'vscode-languageserver-textdocument';

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
	
		return diagnosticsListener.diagnostics;
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
			source: 'antlr'
		};
		this.diagnostics.push(diagnostic);
	}
}