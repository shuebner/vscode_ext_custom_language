// Generated from grammar/S7BlockSequence.g4 by ANTLR 4.13.1

import {ParseTreeListener} from "antlr4";


import { ExprContext } from "./S7BlockSequenceParser";
import { BlockSequenceContext } from "./S7BlockSequenceParser";
import { BlockContext } from "./S7BlockSequenceParser";
import { VariableDefinitionsContext } from "./S7BlockSequenceParser";
import { BlockHeaderContext } from "./S7BlockSequenceParser";
import { VariableDefinitionContext } from "./S7BlockSequenceParser";
import { DbNumberContext } from "./S7BlockSequenceParser";
import { DbOffsetContext } from "./S7BlockSequenceParser";
import { ByteAmountContext } from "./S7BlockSequenceParser";
import { ByteOffsetContext } from "./S7BlockSequenceParser";
import { TypeContext } from "./S7BlockSequenceParser";
import { VarNameContext } from "./S7BlockSequenceParser";
import { ShortContext } from "./S7BlockSequenceParser";
import { IntContext } from "./S7BlockSequenceParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `S7BlockSequenceParser`.
 */
export default class S7BlockSequenceListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `S7BlockSequenceParser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `S7BlockSequenceParser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;
	/**
	 * Enter a parse tree produced by `S7BlockSequenceParser.blockSequence`.
	 * @param ctx the parse tree
	 */
	enterBlockSequence?: (ctx: BlockSequenceContext) => void;
	/**
	 * Exit a parse tree produced by `S7BlockSequenceParser.blockSequence`.
	 * @param ctx the parse tree
	 */
	exitBlockSequence?: (ctx: BlockSequenceContext) => void;
	/**
	 * Enter a parse tree produced by `S7BlockSequenceParser.block`.
	 * @param ctx the parse tree
	 */
	enterBlock?: (ctx: BlockContext) => void;
	/**
	 * Exit a parse tree produced by `S7BlockSequenceParser.block`.
	 * @param ctx the parse tree
	 */
	exitBlock?: (ctx: BlockContext) => void;
	/**
	 * Enter a parse tree produced by `S7BlockSequenceParser.variableDefinitions`.
	 * @param ctx the parse tree
	 */
	enterVariableDefinitions?: (ctx: VariableDefinitionsContext) => void;
	/**
	 * Exit a parse tree produced by `S7BlockSequenceParser.variableDefinitions`.
	 * @param ctx the parse tree
	 */
	exitVariableDefinitions?: (ctx: VariableDefinitionsContext) => void;
	/**
	 * Enter a parse tree produced by `S7BlockSequenceParser.blockHeader`.
	 * @param ctx the parse tree
	 */
	enterBlockHeader?: (ctx: BlockHeaderContext) => void;
	/**
	 * Exit a parse tree produced by `S7BlockSequenceParser.blockHeader`.
	 * @param ctx the parse tree
	 */
	exitBlockHeader?: (ctx: BlockHeaderContext) => void;
	/**
	 * Enter a parse tree produced by `S7BlockSequenceParser.variableDefinition`.
	 * @param ctx the parse tree
	 */
	enterVariableDefinition?: (ctx: VariableDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `S7BlockSequenceParser.variableDefinition`.
	 * @param ctx the parse tree
	 */
	exitVariableDefinition?: (ctx: VariableDefinitionContext) => void;
	/**
	 * Enter a parse tree produced by `S7BlockSequenceParser.dbNumber`.
	 * @param ctx the parse tree
	 */
	enterDbNumber?: (ctx: DbNumberContext) => void;
	/**
	 * Exit a parse tree produced by `S7BlockSequenceParser.dbNumber`.
	 * @param ctx the parse tree
	 */
	exitDbNumber?: (ctx: DbNumberContext) => void;
	/**
	 * Enter a parse tree produced by `S7BlockSequenceParser.dbOffset`.
	 * @param ctx the parse tree
	 */
	enterDbOffset?: (ctx: DbOffsetContext) => void;
	/**
	 * Exit a parse tree produced by `S7BlockSequenceParser.dbOffset`.
	 * @param ctx the parse tree
	 */
	exitDbOffset?: (ctx: DbOffsetContext) => void;
	/**
	 * Enter a parse tree produced by `S7BlockSequenceParser.byteAmount`.
	 * @param ctx the parse tree
	 */
	enterByteAmount?: (ctx: ByteAmountContext) => void;
	/**
	 * Exit a parse tree produced by `S7BlockSequenceParser.byteAmount`.
	 * @param ctx the parse tree
	 */
	exitByteAmount?: (ctx: ByteAmountContext) => void;
	/**
	 * Enter a parse tree produced by `S7BlockSequenceParser.byteOffset`.
	 * @param ctx the parse tree
	 */
	enterByteOffset?: (ctx: ByteOffsetContext) => void;
	/**
	 * Exit a parse tree produced by `S7BlockSequenceParser.byteOffset`.
	 * @param ctx the parse tree
	 */
	exitByteOffset?: (ctx: ByteOffsetContext) => void;
	/**
	 * Enter a parse tree produced by `S7BlockSequenceParser.type`.
	 * @param ctx the parse tree
	 */
	enterType?: (ctx: TypeContext) => void;
	/**
	 * Exit a parse tree produced by `S7BlockSequenceParser.type`.
	 * @param ctx the parse tree
	 */
	exitType?: (ctx: TypeContext) => void;
	/**
	 * Enter a parse tree produced by `S7BlockSequenceParser.varName`.
	 * @param ctx the parse tree
	 */
	enterVarName?: (ctx: VarNameContext) => void;
	/**
	 * Exit a parse tree produced by `S7BlockSequenceParser.varName`.
	 * @param ctx the parse tree
	 */
	exitVarName?: (ctx: VarNameContext) => void;
	/**
	 * Enter a parse tree produced by `S7BlockSequenceParser.short`.
	 * @param ctx the parse tree
	 */
	enterShort?: (ctx: ShortContext) => void;
	/**
	 * Exit a parse tree produced by `S7BlockSequenceParser.short`.
	 * @param ctx the parse tree
	 */
	exitShort?: (ctx: ShortContext) => void;
	/**
	 * Enter a parse tree produced by `S7BlockSequenceParser.int`.
	 * @param ctx the parse tree
	 */
	enterInt?: (ctx: IntContext) => void;
	/**
	 * Exit a parse tree produced by `S7BlockSequenceParser.int`.
	 * @param ctx the parse tree
	 */
	exitInt?: (ctx: IntContext) => void;
}

