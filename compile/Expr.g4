grammar Expr;

prog: stat+ EOF ;

stat: expr         
    | funcCall  
    ;

funcCall: ID '(' parameters? ')'
  ;

parameters: parameter (',' parameter)*;

parameter: expr;

ifStat: 'if' '(' ifCondition ')' '{' expr '}' elseStat*  'else' '{' expr '}';

ifCondition: expr;

elseStat: 'else if' expr '{' expr '}';

expr: '-' expr 
  | '!' expr
  | ifStat
  | expr ('>'|'<'|'>='|'<='|'=='|'!='|'&&'|'||') expr
  | expr '[' expr ']'
  | expr ('*' | '/') expr
  | expr ('+' | '-') expr
  | '(' expr ')'
  | funcCall
  | ID
  | INT
  ;

ID: [a-zA-Z] ([a-zA-Z] | [0-9])* ;

INT: [0-9]+ ;

WS: [ \t\r\n]+ -> skip;