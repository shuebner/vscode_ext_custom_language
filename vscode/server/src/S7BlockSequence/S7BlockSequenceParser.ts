// Generated from grammar/S7BlockSequence.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import S7BlockSequenceListener from "./S7BlockSequenceListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class S7BlockSequenceParser extends Parser {
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
	public static readonly RULE_expr = 0;
	public static readonly RULE_blockSequence = 1;
	public static readonly RULE_block = 2;
	public static readonly RULE_variableDefinitions = 3;
	public static readonly RULE_blockHeader = 4;
	public static readonly RULE_variableDefinition = 5;
	public static readonly RULE_dbNumber = 6;
	public static readonly RULE_dbOffset = 7;
	public static readonly RULE_byteAmount = 8;
	public static readonly RULE_byteOffset = 9;
	public static readonly RULE_type = 10;
	public static readonly RULE_varName = 11;
	public static readonly RULE_short = 12;
	public static readonly RULE_int = 13;
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
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"expr", "blockSequence", "block", "variableDefinitions", "blockHeader", 
		"variableDefinition", "dbNumber", "dbOffset", "byteAmount", "byteOffset", 
		"type", "varName", "short", "int",
	];
	public get grammarFileName(): string { return "S7BlockSequence.g4"; }
	public get literalNames(): (string | null)[] { return S7BlockSequenceParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return S7BlockSequenceParser.symbolicNames; }
	public get ruleNames(): string[] { return S7BlockSequenceParser.ruleNames; }
	public get serializedATN(): number[] { return S7BlockSequenceParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, S7BlockSequenceParser._ATN, S7BlockSequenceParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public expr(): ExprContext {
		let localctx: ExprContext = new ExprContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, S7BlockSequenceParser.RULE_expr);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 28;
			this.blockSequence();
			this.state = 29;
			this.match(S7BlockSequenceParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockSequence(): BlockSequenceContext {
		let localctx: BlockSequenceContext = new BlockSequenceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, S7BlockSequenceParser.RULE_blockSequence);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 31;
			this.block();
			this.state = 36;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===6) {
				{
				{
				this.state = 32;
				this.match(S7BlockSequenceParser.BR);
				this.state = 33;
				this.block();
				}
				}
				this.state = 38;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public block(): BlockContext {
		let localctx: BlockContext = new BlockContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, S7BlockSequenceParser.RULE_block);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 39;
			this.blockHeader();
			this.state = 40;
			this.match(S7BlockSequenceParser.BR);
			this.state = 41;
			this.variableDefinitions();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDefinitions(): VariableDefinitionsContext {
		let localctx: VariableDefinitionsContext = new VariableDefinitionsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, S7BlockSequenceParser.RULE_variableDefinitions);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 43;
			this.variableDefinition();
			this.state = 48;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 44;
					this.match(S7BlockSequenceParser.BR);
					this.state = 45;
					this.variableDefinition();
					}
					}
				}
				this.state = 50;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public blockHeader(): BlockHeaderContext {
		let localctx: BlockHeaderContext = new BlockHeaderContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, S7BlockSequenceParser.RULE_blockHeader);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 51;
			this.dbNumber();
			this.state = 52;
			this.match(S7BlockSequenceParser.PATH_SEPARATOR);
			this.state = 53;
			this.dbOffset();
			this.state = 54;
			this.match(S7BlockSequenceParser.T__0);
			this.state = 55;
			this.byteAmount();
			this.state = 56;
			this.match(S7BlockSequenceParser.T__1);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public variableDefinition(): VariableDefinitionContext {
		let localctx: VariableDefinitionContext = new VariableDefinitionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, S7BlockSequenceParser.RULE_variableDefinition);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 58;
			this.match(S7BlockSequenceParser.WHITESPACE);
			this.state = 59;
			this.byteOffset();
			this.state = 60;
			this.match(S7BlockSequenceParser.WHITESPACE);
			this.state = 61;
			this.type_();
			this.state = 62;
			this.match(S7BlockSequenceParser.WHITESPACE);
			this.state = 63;
			this.varName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dbNumber(): DbNumberContext {
		let localctx: DbNumberContext = new DbNumberContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, S7BlockSequenceParser.RULE_dbNumber);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 65;
			this.match(S7BlockSequenceParser.POS_INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public dbOffset(): DbOffsetContext {
		let localctx: DbOffsetContext = new DbOffsetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, S7BlockSequenceParser.RULE_dbOffset);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 67;
			this.match(S7BlockSequenceParser.POS_INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public byteAmount(): ByteAmountContext {
		let localctx: ByteAmountContext = new ByteAmountContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, S7BlockSequenceParser.RULE_byteAmount);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 69;
			this.match(S7BlockSequenceParser.POS_INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public byteOffset(): ByteOffsetContext {
		let localctx: ByteOffsetContext = new ByteOffsetContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, S7BlockSequenceParser.RULE_byteOffset);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 71;
			this.match(S7BlockSequenceParser.POS_INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public type_(): TypeContext {
		let localctx: TypeContext = new TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, S7BlockSequenceParser.RULE_type);
		try {
			this.state = 75;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 73;
				this.short();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 74;
				this.int();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public varName(): VarNameContext {
		let localctx: VarNameContext = new VarNameContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, S7BlockSequenceParser.RULE_varName);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 77;
			this.match(S7BlockSequenceParser.ID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public short(): ShortContext {
		let localctx: ShortContext = new ShortContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, S7BlockSequenceParser.RULE_short);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 79;
			this.match(S7BlockSequenceParser.SHORT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public int(): IntContext {
		let localctx: IntContext = new IntContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, S7BlockSequenceParser.RULE_int);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 81;
			this.match(S7BlockSequenceParser.INT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,9,84,2,0,7,0,2,1,
	7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,
	7,10,2,11,7,11,2,12,7,12,2,13,7,13,1,0,1,0,1,0,1,1,1,1,1,1,5,1,35,8,1,10,
	1,12,1,38,9,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,5,3,47,8,3,10,3,12,3,50,9,3,1,
	4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,
	8,1,8,1,9,1,9,1,10,1,10,3,10,76,8,10,1,11,1,11,1,12,1,12,1,13,1,13,1,13,
	0,0,14,0,2,4,6,8,10,12,14,16,18,20,22,24,26,0,0,72,0,28,1,0,0,0,2,31,1,
	0,0,0,4,39,1,0,0,0,6,43,1,0,0,0,8,51,1,0,0,0,10,58,1,0,0,0,12,65,1,0,0,
	0,14,67,1,0,0,0,16,69,1,0,0,0,18,71,1,0,0,0,20,75,1,0,0,0,22,77,1,0,0,0,
	24,79,1,0,0,0,26,81,1,0,0,0,28,29,3,2,1,0,29,30,5,0,0,1,30,1,1,0,0,0,31,
	36,3,4,2,0,32,33,5,6,0,0,33,35,3,4,2,0,34,32,1,0,0,0,35,38,1,0,0,0,36,34,
	1,0,0,0,36,37,1,0,0,0,37,3,1,0,0,0,38,36,1,0,0,0,39,40,3,8,4,0,40,41,5,
	6,0,0,41,42,3,6,3,0,42,5,1,0,0,0,43,48,3,10,5,0,44,45,5,6,0,0,45,47,3,10,
	5,0,46,44,1,0,0,0,47,50,1,0,0,0,48,46,1,0,0,0,48,49,1,0,0,0,49,7,1,0,0,
	0,50,48,1,0,0,0,51,52,3,12,6,0,52,53,5,4,0,0,53,54,3,14,7,0,54,55,5,1,0,
	0,55,56,3,16,8,0,56,57,5,2,0,0,57,9,1,0,0,0,58,59,5,3,0,0,59,60,3,18,9,
	0,60,61,5,3,0,0,61,62,3,20,10,0,62,63,5,3,0,0,63,64,3,22,11,0,64,11,1,0,
	0,0,65,66,5,5,0,0,66,13,1,0,0,0,67,68,5,5,0,0,68,15,1,0,0,0,69,70,5,5,0,
	0,70,17,1,0,0,0,71,72,5,5,0,0,72,19,1,0,0,0,73,76,3,24,12,0,74,76,3,26,
	13,0,75,73,1,0,0,0,75,74,1,0,0,0,76,21,1,0,0,0,77,78,5,9,0,0,78,23,1,0,
	0,0,79,80,5,7,0,0,80,25,1,0,0,0,81,82,5,8,0,0,82,27,1,0,0,0,3,36,48,75];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!S7BlockSequenceParser.__ATN) {
			S7BlockSequenceParser.__ATN = new ATNDeserializer().deserialize(S7BlockSequenceParser._serializedATN);
		}

		return S7BlockSequenceParser.__ATN;
	}


	static DecisionsToDFA = S7BlockSequenceParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ExprContext extends ParserRuleContext {
	constructor(parser?: S7BlockSequenceParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public blockSequence(): BlockSequenceContext {
		return this.getTypedRuleContext(BlockSequenceContext, 0) as BlockSequenceContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(S7BlockSequenceParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return S7BlockSequenceParser.RULE_expr;
	}
	public enterRule(listener: S7BlockSequenceListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: S7BlockSequenceListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
}


export class BlockSequenceContext extends ParserRuleContext {
	constructor(parser?: S7BlockSequenceParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public block_list(): BlockContext[] {
		return this.getTypedRuleContexts(BlockContext) as BlockContext[];
	}
	public block(i: number): BlockContext {
		return this.getTypedRuleContext(BlockContext, i) as BlockContext;
	}
	public BR_list(): TerminalNode[] {
	    	return this.getTokens(S7BlockSequenceParser.BR);
	}
	public BR(i: number): TerminalNode {
		return this.getToken(S7BlockSequenceParser.BR, i);
	}
    public get ruleIndex(): number {
    	return S7BlockSequenceParser.RULE_blockSequence;
	}
	public enterRule(listener: S7BlockSequenceListener): void {
	    if(listener.enterBlockSequence) {
	 		listener.enterBlockSequence(this);
		}
	}
	public exitRule(listener: S7BlockSequenceListener): void {
	    if(listener.exitBlockSequence) {
	 		listener.exitBlockSequence(this);
		}
	}
}


export class BlockContext extends ParserRuleContext {
	constructor(parser?: S7BlockSequenceParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public blockHeader(): BlockHeaderContext {
		return this.getTypedRuleContext(BlockHeaderContext, 0) as BlockHeaderContext;
	}
	public BR(): TerminalNode {
		return this.getToken(S7BlockSequenceParser.BR, 0);
	}
	public variableDefinitions(): VariableDefinitionsContext {
		return this.getTypedRuleContext(VariableDefinitionsContext, 0) as VariableDefinitionsContext;
	}
    public get ruleIndex(): number {
    	return S7BlockSequenceParser.RULE_block;
	}
	public enterRule(listener: S7BlockSequenceListener): void {
	    if(listener.enterBlock) {
	 		listener.enterBlock(this);
		}
	}
	public exitRule(listener: S7BlockSequenceListener): void {
	    if(listener.exitBlock) {
	 		listener.exitBlock(this);
		}
	}
}


export class VariableDefinitionsContext extends ParserRuleContext {
	constructor(parser?: S7BlockSequenceParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public variableDefinition_list(): VariableDefinitionContext[] {
		return this.getTypedRuleContexts(VariableDefinitionContext) as VariableDefinitionContext[];
	}
	public variableDefinition(i: number): VariableDefinitionContext {
		return this.getTypedRuleContext(VariableDefinitionContext, i) as VariableDefinitionContext;
	}
	public BR_list(): TerminalNode[] {
	    	return this.getTokens(S7BlockSequenceParser.BR);
	}
	public BR(i: number): TerminalNode {
		return this.getToken(S7BlockSequenceParser.BR, i);
	}
    public get ruleIndex(): number {
    	return S7BlockSequenceParser.RULE_variableDefinitions;
	}
	public enterRule(listener: S7BlockSequenceListener): void {
	    if(listener.enterVariableDefinitions) {
	 		listener.enterVariableDefinitions(this);
		}
	}
	public exitRule(listener: S7BlockSequenceListener): void {
	    if(listener.exitVariableDefinitions) {
	 		listener.exitVariableDefinitions(this);
		}
	}
}


export class BlockHeaderContext extends ParserRuleContext {
	constructor(parser?: S7BlockSequenceParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public dbNumber(): DbNumberContext {
		return this.getTypedRuleContext(DbNumberContext, 0) as DbNumberContext;
	}
	public PATH_SEPARATOR(): TerminalNode {
		return this.getToken(S7BlockSequenceParser.PATH_SEPARATOR, 0);
	}
	public dbOffset(): DbOffsetContext {
		return this.getTypedRuleContext(DbOffsetContext, 0) as DbOffsetContext;
	}
	public byteAmount(): ByteAmountContext {
		return this.getTypedRuleContext(ByteAmountContext, 0) as ByteAmountContext;
	}
    public get ruleIndex(): number {
    	return S7BlockSequenceParser.RULE_blockHeader;
	}
	public enterRule(listener: S7BlockSequenceListener): void {
	    if(listener.enterBlockHeader) {
	 		listener.enterBlockHeader(this);
		}
	}
	public exitRule(listener: S7BlockSequenceListener): void {
	    if(listener.exitBlockHeader) {
	 		listener.exitBlockHeader(this);
		}
	}
}


export class VariableDefinitionContext extends ParserRuleContext {
	constructor(parser?: S7BlockSequenceParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHITESPACE_list(): TerminalNode[] {
	    	return this.getTokens(S7BlockSequenceParser.WHITESPACE);
	}
	public WHITESPACE(i: number): TerminalNode {
		return this.getToken(S7BlockSequenceParser.WHITESPACE, i);
	}
	public byteOffset(): ByteOffsetContext {
		return this.getTypedRuleContext(ByteOffsetContext, 0) as ByteOffsetContext;
	}
	public type_(): TypeContext {
		return this.getTypedRuleContext(TypeContext, 0) as TypeContext;
	}
	public varName(): VarNameContext {
		return this.getTypedRuleContext(VarNameContext, 0) as VarNameContext;
	}
    public get ruleIndex(): number {
    	return S7BlockSequenceParser.RULE_variableDefinition;
	}
	public enterRule(listener: S7BlockSequenceListener): void {
	    if(listener.enterVariableDefinition) {
	 		listener.enterVariableDefinition(this);
		}
	}
	public exitRule(listener: S7BlockSequenceListener): void {
	    if(listener.exitVariableDefinition) {
	 		listener.exitVariableDefinition(this);
		}
	}
}


export class DbNumberContext extends ParserRuleContext {
	constructor(parser?: S7BlockSequenceParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public POS_INT(): TerminalNode {
		return this.getToken(S7BlockSequenceParser.POS_INT, 0);
	}
    public get ruleIndex(): number {
    	return S7BlockSequenceParser.RULE_dbNumber;
	}
	public enterRule(listener: S7BlockSequenceListener): void {
	    if(listener.enterDbNumber) {
	 		listener.enterDbNumber(this);
		}
	}
	public exitRule(listener: S7BlockSequenceListener): void {
	    if(listener.exitDbNumber) {
	 		listener.exitDbNumber(this);
		}
	}
}


export class DbOffsetContext extends ParserRuleContext {
	constructor(parser?: S7BlockSequenceParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public POS_INT(): TerminalNode {
		return this.getToken(S7BlockSequenceParser.POS_INT, 0);
	}
    public get ruleIndex(): number {
    	return S7BlockSequenceParser.RULE_dbOffset;
	}
	public enterRule(listener: S7BlockSequenceListener): void {
	    if(listener.enterDbOffset) {
	 		listener.enterDbOffset(this);
		}
	}
	public exitRule(listener: S7BlockSequenceListener): void {
	    if(listener.exitDbOffset) {
	 		listener.exitDbOffset(this);
		}
	}
}


export class ByteAmountContext extends ParserRuleContext {
	constructor(parser?: S7BlockSequenceParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public POS_INT(): TerminalNode {
		return this.getToken(S7BlockSequenceParser.POS_INT, 0);
	}
    public get ruleIndex(): number {
    	return S7BlockSequenceParser.RULE_byteAmount;
	}
	public enterRule(listener: S7BlockSequenceListener): void {
	    if(listener.enterByteAmount) {
	 		listener.enterByteAmount(this);
		}
	}
	public exitRule(listener: S7BlockSequenceListener): void {
	    if(listener.exitByteAmount) {
	 		listener.exitByteAmount(this);
		}
	}
}


export class ByteOffsetContext extends ParserRuleContext {
	constructor(parser?: S7BlockSequenceParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public POS_INT(): TerminalNode {
		return this.getToken(S7BlockSequenceParser.POS_INT, 0);
	}
    public get ruleIndex(): number {
    	return S7BlockSequenceParser.RULE_byteOffset;
	}
	public enterRule(listener: S7BlockSequenceListener): void {
	    if(listener.enterByteOffset) {
	 		listener.enterByteOffset(this);
		}
	}
	public exitRule(listener: S7BlockSequenceListener): void {
	    if(listener.exitByteOffset) {
	 		listener.exitByteOffset(this);
		}
	}
}


export class TypeContext extends ParserRuleContext {
	constructor(parser?: S7BlockSequenceParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public short(): ShortContext {
		return this.getTypedRuleContext(ShortContext, 0) as ShortContext;
	}
	public int(): IntContext {
		return this.getTypedRuleContext(IntContext, 0) as IntContext;
	}
    public get ruleIndex(): number {
    	return S7BlockSequenceParser.RULE_type;
	}
	public enterRule(listener: S7BlockSequenceListener): void {
	    if(listener.enterType) {
	 		listener.enterType(this);
		}
	}
	public exitRule(listener: S7BlockSequenceListener): void {
	    if(listener.exitType) {
	 		listener.exitType(this);
		}
	}
}


export class VarNameContext extends ParserRuleContext {
	constructor(parser?: S7BlockSequenceParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ID(): TerminalNode {
		return this.getToken(S7BlockSequenceParser.ID, 0);
	}
    public get ruleIndex(): number {
    	return S7BlockSequenceParser.RULE_varName;
	}
	public enterRule(listener: S7BlockSequenceListener): void {
	    if(listener.enterVarName) {
	 		listener.enterVarName(this);
		}
	}
	public exitRule(listener: S7BlockSequenceListener): void {
	    if(listener.exitVarName) {
	 		listener.exitVarName(this);
		}
	}
}


export class ShortContext extends ParserRuleContext {
	constructor(parser?: S7BlockSequenceParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public SHORT(): TerminalNode {
		return this.getToken(S7BlockSequenceParser.SHORT, 0);
	}
    public get ruleIndex(): number {
    	return S7BlockSequenceParser.RULE_short;
	}
	public enterRule(listener: S7BlockSequenceListener): void {
	    if(listener.enterShort) {
	 		listener.enterShort(this);
		}
	}
	public exitRule(listener: S7BlockSequenceListener): void {
	    if(listener.exitShort) {
	 		listener.exitShort(this);
		}
	}
}


export class IntContext extends ParserRuleContext {
	constructor(parser?: S7BlockSequenceParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT(): TerminalNode {
		return this.getToken(S7BlockSequenceParser.INT, 0);
	}
    public get ruleIndex(): number {
    	return S7BlockSequenceParser.RULE_int;
	}
	public enterRule(listener: S7BlockSequenceListener): void {
	    if(listener.enterInt) {
	 		listener.enterInt(this);
		}
	}
	public exitRule(listener: S7BlockSequenceListener): void {
	    if(listener.exitInt) {
	 		listener.exitInt(this);
		}
	}
}
