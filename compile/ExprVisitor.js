// Generated from compile/Expr.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';

// This class defines a complete generic visitor for a parse tree produced by ExprParser.

export default class ExprVisitor extends antlr4.tree.ParseTreeVisitor {

	// Visit a parse tree produced by ExprParser#prog.
	visitProg(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#funcCall.
	visitFuncCall(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#parameters.
	visitParameters(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#ifStat.
	visitIfStat(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#ifPart.
	visitIfPart(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#elseIfPart.
	visitElseIfPart(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#elsePart.
	visitElsePart(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#expr.
	visitExpr(ctx) {
	  return this.visitChildren(ctx);
	}


	// Visit a parse tree produced by ExprParser#block.
	visitBlock(ctx) {
	  return this.visitChildren(ctx);
	}



}