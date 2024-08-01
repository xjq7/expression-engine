import antlr4 from 'antlr4';
import ExprLexer from '../compile/ExprLexer.js';
import ExprParser from '../compile/ExprParser.js';
import Visitor from './visitor.js';

export function run(input) {
  // 创建词法分析器和语法分析器
  const input_stream = new antlr4.InputStream(input);
  const lexer = new ExprLexer(input_stream);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ExprParser(tokens);

  // 解析树的根节点
  const tree = parser.prog();

  // 创建 Visitor 实例
  const visitor = new Visitor();

  // 访问解析树的根节点并计算结果
  const result = visitor.visitProg(tree);
  return result;
}
