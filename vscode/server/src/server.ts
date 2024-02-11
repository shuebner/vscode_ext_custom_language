/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */
import {
	createConnection,
	TextDocuments,
	Diagnostic,
	ProposedFeatures,
	TextDocumentSyncKind,
	InitializeResult
} from 'vscode-languageserver/node';

import {
	TextDocument
} from 'vscode-languageserver-textdocument';

import {
	AntlrValidator
} from './antlr4validator';
import S7BlockSequenceLexer from './S7BlockSequence/S7BlockSequenceLexer';
import S7BlockSequenceParser from './S7BlockSequence/S7BlockSequenceParser';

// Create a connection for the server, using Node's IPC as a transport.
// Also include all preview / proposed LSP features.
const connection = createConnection(ProposedFeatures.all);

// Create a simple text document manager.
const documents: TextDocuments<TextDocument> = new TextDocuments(TextDocument);

const validator = new AntlrValidator(
	cs => new S7BlockSequenceLexer(cs),
	ts => new S7BlockSequenceParser(ts),
	parser => parser.expr());

connection.onInitialize(() => {
	const result: InitializeResult = {
		capabilities: {
			textDocumentSync: TextDocumentSyncKind.Incremental,
		}
	};
	return result;
});

// The content of a text document has changed. This event is emitted
// when the text document first opened or when its content has changed.
documents.onDidChangeContent(change => {
	const diagnostics: Diagnostic[] = validator.Validate(change.document);
	// Send the computed diagnostics to VSCode.
	connection.sendDiagnostics({ uri: change.document.uri, diagnostics });
});

// Make the text document manager listen on the connection
// for open, change and close text document events
documents.listen(connection);

// Listen on the connection
connection.listen();
