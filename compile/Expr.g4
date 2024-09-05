grammar Expr;

prog: expr EOF ;

funcCall: ID '(' parameters? ')'
  ;

parameters: expr (',' expr)*;

ifStat: ifPart elseIfPart* elsePart ;

ifPart: 'if' '(' expr ')' block;

elseIfPart: 'else if' expr block ;

elsePart: 'else' block ;

expr: ('-' | '+' | '!') expr 
  | funcCall
  | ifStat
  | expr ('*' | '/' | '%') expr
  | expr ('+' | '-') expr
  | expr ('>'|'<'|'>='|'<='|'=='|'!=') expr
  | expr ('&&'|'||') expr
  | expr '[' expr ']'
  | '(' expr ')'
  | expr '?' expr ':' expr
  | ID
  | INT
  ;

block: '{' expr '}'
  | '{' '}'
  ;

BOOL: 'true' 
  | 'false';

ID: [a-zA-Z] ([a-zA-Z] | [0-9])* ;

INT: [0-9]+ ;

WS: [ \t\r\n]+ -> skip;