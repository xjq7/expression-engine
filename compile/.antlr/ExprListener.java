// Generated from /Users/xjq/project/expression-engine/compile/Expr.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.tree.ParseTreeListener;

/**
 * This interface defines a complete listener for a parse tree produced by
 * {@link ExprParser}.
 */
public interface ExprListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by {@link ExprParser#prog}.
	 * @param ctx the parse tree
	 */
	void enterProg(ExprParser.ProgContext ctx);
	/**
	 * Exit a parse tree produced by {@link ExprParser#prog}.
	 * @param ctx the parse tree
	 */
	void exitProg(ExprParser.ProgContext ctx);
	/**
	 * Enter a parse tree produced by {@link ExprParser#stat}.
	 * @param ctx the parse tree
	 */
	void enterStat(ExprParser.StatContext ctx);
	/**
	 * Exit a parse tree produced by {@link ExprParser#stat}.
	 * @param ctx the parse tree
	 */
	void exitStat(ExprParser.StatContext ctx);
	/**
	 * Enter a parse tree produced by {@link ExprParser#funcCall}.
	 * @param ctx the parse tree
	 */
	void enterFuncCall(ExprParser.FuncCallContext ctx);
	/**
	 * Exit a parse tree produced by {@link ExprParser#funcCall}.
	 * @param ctx the parse tree
	 */
	void exitFuncCall(ExprParser.FuncCallContext ctx);
	/**
	 * Enter a parse tree produced by {@link ExprParser#parameters}.
	 * @param ctx the parse tree
	 */
	void enterParameters(ExprParser.ParametersContext ctx);
	/**
	 * Exit a parse tree produced by {@link ExprParser#parameters}.
	 * @param ctx the parse tree
	 */
	void exitParameters(ExprParser.ParametersContext ctx);
	/**
	 * Enter a parse tree produced by {@link ExprParser#parameter}.
	 * @param ctx the parse tree
	 */
	void enterParameter(ExprParser.ParameterContext ctx);
	/**
	 * Exit a parse tree produced by {@link ExprParser#parameter}.
	 * @param ctx the parse tree
	 */
	void exitParameter(ExprParser.ParameterContext ctx);
	/**
	 * Enter a parse tree produced by {@link ExprParser#ifStat}.
	 * @param ctx the parse tree
	 */
	void enterIfStat(ExprParser.IfStatContext ctx);
	/**
	 * Exit a parse tree produced by {@link ExprParser#ifStat}.
	 * @param ctx the parse tree
	 */
	void exitIfStat(ExprParser.IfStatContext ctx);
	/**
	 * Enter a parse tree produced by {@link ExprParser#ifCondition}.
	 * @param ctx the parse tree
	 */
	void enterIfCondition(ExprParser.IfConditionContext ctx);
	/**
	 * Exit a parse tree produced by {@link ExprParser#ifCondition}.
	 * @param ctx the parse tree
	 */
	void exitIfCondition(ExprParser.IfConditionContext ctx);
	/**
	 * Enter a parse tree produced by {@link ExprParser#elseStat}.
	 * @param ctx the parse tree
	 */
	void enterElseStat(ExprParser.ElseStatContext ctx);
	/**
	 * Exit a parse tree produced by {@link ExprParser#elseStat}.
	 * @param ctx the parse tree
	 */
	void exitElseStat(ExprParser.ElseStatContext ctx);
	/**
	 * Enter a parse tree produced by {@link ExprParser#expr}.
	 * @param ctx the parse tree
	 */
	void enterExpr(ExprParser.ExprContext ctx);
	/**
	 * Exit a parse tree produced by {@link ExprParser#expr}.
	 * @param ctx the parse tree
	 */
	void exitExpr(ExprParser.ExprContext ctx);
}