// Generated from grammar/S7BlockSequence.g4 by ANTLR 4.13.1

import {ParseTreeVisitor} from 'antlr4';


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
 * This interface defines a complete generic visitor for a parse tree produced
 * by `S7BlockSequenceParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export default class S7BlockSequenceVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `S7BlockSequenceParser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;
	/**
	 * Visit a parse tree produced by `S7BlockSequenceParser.blockSequence`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockSequence?: (ctx: BlockSequenceContext) => Result;
	/**
	 * Visit a parse tree produced by `S7BlockSequenceParser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by `S7BlockSequenceParser.variableDefinitions`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDefinitions?: (ctx: VariableDefinitionsContext) => Result;
	/**
	 * Visit a parse tree produced by `S7BlockSequenceParser.blockHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockHeader?: (ctx: BlockHeaderContext) => Result;
	/**
	 * Visit a parse tree produced by `S7BlockSequenceParser.variableDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDefinition?: (ctx: VariableDefinitionContext) => Result;
	/**
	 * Visit a parse tree produced by `S7BlockSequenceParser.dbNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbNumber?: (ctx: DbNumberContext) => Result;
	/**
	 * Visit a parse tree produced by `S7BlockSequenceParser.dbOffset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDbOffset?: (ctx: DbOffsetContext) => Result;
	/**
	 * Visit a parse tree produced by `S7BlockSequenceParser.byteAmount`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitByteAmount?: (ctx: ByteAmountContext) => Result;
	/**
	 * Visit a parse tree produced by `S7BlockSequenceParser.byteOffset`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitByteOffset?: (ctx: ByteOffsetContext) => Result;
	/**
	 * Visit a parse tree produced by `S7BlockSequenceParser.type`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitType?: (ctx: TypeContext) => Result;
	/**
	 * Visit a parse tree produced by `S7BlockSequenceParser.varName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarName?: (ctx: VarNameContext) => Result;
	/**
	 * Visit a parse tree produced by `S7BlockSequenceParser.short`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShort?: (ctx: ShortContext) => Result;
	/**
	 * Visit a parse tree produced by `S7BlockSequenceParser.int`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInt?: (ctx: IntContext) => Result;
}

