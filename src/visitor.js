import ExprParser from '../compile/ExprParser.js';
import ExprVisitor from '../compile/ExprVisitor.js';

export default class Visitor extends ExprVisitor {
  constructor() {
    super();
  }

  visitStat(ctx) {
    const { children = [] } = ctx;

    if (children?.length === 1) {
      return this.visitExpr(ctx.getChild(0));
    }
  }

  visitExpr(ctx) {
    const { children } = ctx;

    let context;

    if ((context = ctx.funcCall())) {
      return this.visitFuncCall(context);
    }
    if ((context = ctx.ifStat())) {
      return this.visitIfStat(context);
    }

    if (children.length === 3) {
      const lrs = this.visitExpr(children[0]);
      const rrs = this.visitExpr(children[2]);

      const operator = children[1].getText();

      if (operator === '*') {
        return lrs * rrs;
      }
      if (operator === '/') {
        return lrs / rrs;
      }
      if (operator === '+') {
        return lrs + rrs;
      }
      if (operator === '-') {
        return lrs + rrs;
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
    } else if (children.length === 1) {
      return Number(children[0].getText());
    } else if (children.length === 2) {
      if (children[0].getText() === '-') {
        return -children[1].getText();
      }
    }

    return 0;
  }

  visitIfStat(ctx) {
    const { children } = ctx;
    const condition = children[2];
    const stat1 = children[5];
    const stat2 = children[9];
    console.log(ctx);
    children.forEach((cc) => {
      console.log('ww', cc.getText());
    });

    // if (this.visitExpr(condition)) {
    //   return this.visitExpr(stat1);
    // } else {
    //   return this.visitExpr(stat2);
    // }
  }

  visitFuncCall(ctx) {
    const { children } = ctx;
    if (children.length === 4) {
      const funcName = children[0].getText();
      const parameters = this.visitParameters(children[2]);

      if (funcName === 'abs') {
        return Math.abs(parameters[0]);
      }
      if (funcName === 'max') {
        return Math.max(...parameters);
      }

      if (funcName === 'min') {
        return Math.min(...parameters);
      }

      if (funcName === 'add') {
        return parameters.reduce((acc, cur) => acc + cur, 0);
      }
    }
  }

  visitParameters(ctx) {
    const { children } = ctx;
    return children
      .filter(
        (parameterCtx) => parameterCtx instanceof ExprParser.ParameterContext
      )
      .map((ctx) => this.visitParameter(ctx));
  }

  visitParameter(ctx) {
    const { children } = ctx;
    if (children[0] instanceof ExprParser.ExprContext) {
      return this.visitExpr(children[0]);
    }

    if (children[0] instanceof ExprParser.FuncCallContext) {
      return this.visitFuncCall(children[0]);
    }
  }
}
