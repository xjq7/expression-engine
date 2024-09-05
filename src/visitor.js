import ExprParser from '../compile/ExprParser.js';
import ExprVisitor from '../compile/ExprVisitor.js';

export default class Visitor extends ExprVisitor {
  constructor() {
    super();
  }

  /**
   * 根节点直接当表达式处理
   *
   * @param {*} ctx
   * @return {*}
   * @memberof Visitor
   */
  visitProg(ctx) {
    return this.visitExpr(ctx.expr());
  }

  /**
   * 解释 表达式
   *
   * @param {*} ctx
   * @return {*}
   * @memberof Visitor
   */
  visitExpr(ctx) {
    let context;
    const childCount = ctx.getChildCount();
    if (ctx.funcCall && (context = ctx.funcCall())) {
      return this.visitFuncCall(context);
    }
    if (ctx.ifStat && (context = ctx.ifStat())) {
      return this.visitIfStat(context);
    }

    if (childCount === 3) {
      const lChild = ctx.getChild(0);
      const mChild = ctx.getChild(1);
      const rChild = ctx.getChild(2);

      if (lChild.getText() === '(' && rChild.getText() === ')') {
        return this.visitExpr(mChild);
      }

      const lrs = this.visitExpr(lChild);
      const rrs = this.visitExpr(rChild);

      const operator = mChild.getText();

      if (operator === '+') {
        return lrs + rrs;
      }
      if (operator === '-') {
        return lrs - rrs;
      }
      if (operator === '*') {
        return lrs * rrs;
      }
      if (operator === '%') {
        return lrs % rrs;
      }
      if (operator === '/') {
        return lrs / rrs;
      }
      if (operator === '>=') {
        return lrs >= rrs;
      }
      if (operator === '>') {
        return lrs > rrs;
      }
      if (operator === '<=') {
        return lrs <= rrs;
      }
      if (operator === '<') {
        return lrs < rrs;
      }
      if (operator === '==') {
        return lrs === rrs;
      }
      if (operator === '!=') {
        return lrs !== rrs;
      }
    } else if (childCount === 1) {
      let context;
      if ((context = ctx.INT())) {
        return Number(context.getText());
      }

      if ((context = ctx.BOOL())) {
        return context === 'true';
      }

      if ((context = ctx.ID())) {
        return context.getText();
      }
    } else if (childCount === 2) {
      const operator = ctx.getChild(0).getText();
      const value = this.visitExpr(ctx.getChild(1));

      if (operator === '-') {
        return -value;
      }
      if (operator === '!') {
        return !value;
      }
    } else if (childCount === 5) {
      const exprs = ctx.expr();
      const [condition, statL, statR] = exprs;

      if (this.visitExpr(condition)) {
        return this.visitExpr(statL);
      } else {
        return this.visitExpr(statR);
      }
    }

    throw new Error('语法错误');
  }

  /**
   * 解释 if
   *
   * @param {*} ctx
   * @return {*}
   * @memberof Visitor
   */
  visitIfStat(ctx) {
    const ifPart = ctx.ifPart();
    const ifExpr = ifPart.expr();

    let res;
    if ((res = this.visitExpr(ifExpr))) {
      const block = ifPart.block();
      const expr = block.expr();
      return this.visitExpr(expr);
    }

    const elseIfParts = ctx.elseIfPart();

    if (elseIfParts.length) {
      for (let i = 0; i < elseIfParts.length; i++) {
        const context = elseIfParts[i];
        const ifExpr = context.expr();
        const blockExpr = context.block().expr();

        if ((res = this.visitExpr(ifExpr))) {
          return this.visitExpr(blockExpr);
        }
      }
    }
    const elsePart = ctx.elsePart();

    const elseBlockExpr = elsePart.block().expr();
    return this.visitExpr(elseBlockExpr);
  }

  /**
   * 函数调用解释
   *
   * @param {*} ctx
   * @return {*}
   * @memberof Visitor
   */
  visitFuncCall(ctx) {
    const funcName = ctx.ID().getText();
    const parameters = this.visitParameters(ctx.parameters());

    if (funcName === 'abs') {
      return Math.abs(parameters[0]);
    }
    if (funcName === 'max') {
      return Math.max(...parameters);
    }

    if (funcName === 'min') {
      return Math.min(...parameters);
    }
  }

  /**
   * 处理参数列表
   *
   * @param {*} ctx
   * @return {*}
   * @memberof Visitor
   */
  visitParameters(ctx) {
    const parameters = ctx.expr();
    return parameters.map((ctx) => this.visitExpr(ctx));
  }
}
