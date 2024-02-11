import { CharStream, CommonTokenStream, ErrorListener, RecognitionException, Recognizer, Token }  from 'antlr4';
import {
	Diagnostic,
} from 'vscode-languageserver/node';
import MyGrammarLexer from './S7BlockSequence/S7BlockSequenceLexer';
import MyGrammarParser from './S7BlockSequence/S7BlockSequenceParser';
import { TextDocument } from 'vscode-languageserver-textdocument';
import { off } from 'process';

export function Validate(document: TextDocument): Diagnostic[] {
	const text = document.getText();
	const chars = new CharStream(text); // replace this with a FileStream as required
	const lexer = new MyGrammarLexer(chars);
	const tokens = new CommonTokenStream(lexer);
	const parser = new MyGrammarParser(tokens);
	const diagnosticsListener = new DiagnosticsListener();
	parser.addErrorListener(diagnosticsListener);
	const tree = parser.expr();

	return diagnosticsListener.diagnostics;
}

class DiagnosticsListener extends ErrorListener<Token> {
	public diagnostics: Diagnostic[] = [];

	syntaxError(recognizer: Recognizer<Token>, offendingSymbol: Token, line: number, column: number, msg: string, e: RecognitionException | undefined): void {
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