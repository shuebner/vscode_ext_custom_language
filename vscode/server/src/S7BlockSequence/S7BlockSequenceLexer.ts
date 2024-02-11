// Generated from grammar/S7BlockSequence.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "antlr4";
export default class S7BlockSequenceLexer extends Lexer {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly WHITESPACE = 3;
	public static readonly PATH_SEPARATOR = 4;
	public static readonly POS_INT = 5;
	public static readonly BR = 6;
	public static readonly SHORT = 7;
	public static readonly INT = 8;
	public static readonly ID = 9;
	public static readonly EOF = Token.EOF;

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	public static readonly literalNames: (string | null)[] = [ null, "'('", 
                                                            "')'", null, 
                                                            "':'", null, 
                                                            null, "'Short'", 
                                                            "'Int'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, "WHITESPACE", 
                                                             "PATH_SEPARATOR", 
                                                             "POS_INT", 
                                                             "BR", "SHORT", 
                                                             "INT", "ID" ];
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "WHITESPACE", "PATH_SEPARATOR", "POS_INT", "BR", "SHORT", 
		"INT", "ID",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, S7BlockSequenceLexer._ATN, S7BlockSequenceLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "S7BlockSequence.g4"; }

	public get literalNames(): (string | null)[] { return S7BlockSequenceLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return S7BlockSequenceLexer.symbolicNames; }
	public get ruleNames(): string[] { return S7BlockSequenceLexer.ruleNames; }

	public get serializedATN(): number[] { return S7BlockSequenceLexer._serializedATN; }

	public get channelNames(): string[] { return S7BlockSequenceLexer.channelNames; }

	public get modeNames(): string[] { return S7BlockSequenceLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,9,55,6,-1,2,0,7,
	0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,
	0,1,1,1,1,1,2,4,2,25,8,2,11,2,12,2,26,1,3,1,3,1,4,4,4,32,8,4,11,4,12,4,
	33,1,5,4,5,37,8,5,11,5,12,5,38,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,
	1,8,4,8,52,8,8,11,8,12,8,53,0,0,9,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,
	9,1,0,4,2,0,9,9,32,32,1,0,48,57,3,0,10,10,13,13,124,124,5,0,45,45,48,57,
	65,90,95,95,97,122,58,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,
	9,1,0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,1,19,1,0,
	0,0,3,21,1,0,0,0,5,24,1,0,0,0,7,28,1,0,0,0,9,31,1,0,0,0,11,36,1,0,0,0,13,
	40,1,0,0,0,15,46,1,0,0,0,17,51,1,0,0,0,19,20,5,40,0,0,20,2,1,0,0,0,21,22,
	5,41,0,0,22,4,1,0,0,0,23,25,7,0,0,0,24,23,1,0,0,0,25,26,1,0,0,0,26,24,1,
	0,0,0,26,27,1,0,0,0,27,6,1,0,0,0,28,29,5,58,0,0,29,8,1,0,0,0,30,32,7,1,
	0,0,31,30,1,0,0,0,32,33,1,0,0,0,33,31,1,0,0,0,33,34,1,0,0,0,34,10,1,0,0,
	0,35,37,7,2,0,0,36,35,1,0,0,0,37,38,1,0,0,0,38,36,1,0,0,0,38,39,1,0,0,0,
	39,12,1,0,0,0,40,41,5,83,0,0,41,42,5,104,0,0,42,43,5,111,0,0,43,44,5,114,
	0,0,44,45,5,116,0,0,45,14,1,0,0,0,46,47,5,73,0,0,47,48,5,110,0,0,48,49,
	5,116,0,0,49,16,1,0,0,0,50,52,7,3,0,0,51,50,1,0,0,0,52,53,1,0,0,0,53,51,
	1,0,0,0,53,54,1,0,0,0,54,18,1,0,0,0,5,0,26,33,38,53,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!S7BlockSequenceLexer.__ATN) {
			S7BlockSequenceLexer.__ATN = new ATNDeserializer().deserialize(S7BlockSequenceLexer._serializedATN);
		}

		return S7BlockSequenceLexer.__ATN;
	}


	static DecisionsToDFA = S7BlockSequenceLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}