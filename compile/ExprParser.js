// Generated from compile/Expr.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ExprListener from './ExprListener.js';
import ExprVisitor from './ExprVisitor.js';

const serializedATN = [4,1,29,108,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,1,0,1,0,1,1,1,1,1,1,3,1,25,8,1,1,1,
1,1,1,2,1,2,1,2,5,2,32,8,2,10,2,12,2,35,9,2,1,3,1,3,5,3,39,8,3,10,3,12,3,
42,9,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,7,1,
7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,70,8,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,5,7,
95,8,7,10,7,12,7,98,9,7,1,8,1,8,1,8,1,8,1,8,1,8,3,8,106,8,8,1,8,0,1,14,9,
0,2,4,6,8,10,12,14,16,0,5,1,0,7,9,1,0,10,12,1,0,7,8,1,0,13,18,1,0,19,20,
113,0,18,1,0,0,0,2,21,1,0,0,0,4,28,1,0,0,0,6,36,1,0,0,0,8,45,1,0,0,0,10,
51,1,0,0,0,12,55,1,0,0,0,14,69,1,0,0,0,16,105,1,0,0,0,18,19,3,14,7,0,19,
20,5,0,0,1,20,1,1,0,0,0,21,22,5,27,0,0,22,24,5,1,0,0,23,25,3,4,2,0,24,23,
1,0,0,0,24,25,1,0,0,0,25,26,1,0,0,0,26,27,5,2,0,0,27,3,1,0,0,0,28,33,3,14,
7,0,29,30,5,3,0,0,30,32,3,14,7,0,31,29,1,0,0,0,32,35,1,0,0,0,33,31,1,0,0,
0,33,34,1,0,0,0,34,5,1,0,0,0,35,33,1,0,0,0,36,40,3,8,4,0,37,39,3,10,5,0,
38,37,1,0,0,0,39,42,1,0,0,0,40,38,1,0,0,0,40,41,1,0,0,0,41,43,1,0,0,0,42,
40,1,0,0,0,43,44,3,12,6,0,44,7,1,0,0,0,45,46,5,4,0,0,46,47,5,1,0,0,47,48,
3,14,7,0,48,49,5,2,0,0,49,50,3,16,8,0,50,9,1,0,0,0,51,52,5,5,0,0,52,53,3,
14,7,0,53,54,3,16,8,0,54,11,1,0,0,0,55,56,5,6,0,0,56,57,3,16,8,0,57,13,1,
0,0,0,58,59,6,7,-1,0,59,60,7,0,0,0,60,70,3,14,7,12,61,70,3,2,1,0,62,70,3,
6,3,0,63,64,5,1,0,0,64,65,3,14,7,0,65,66,5,2,0,0,66,70,1,0,0,0,67,70,5,27,
0,0,68,70,5,28,0,0,69,58,1,0,0,0,69,61,1,0,0,0,69,62,1,0,0,0,69,63,1,0,0,
0,69,67,1,0,0,0,69,68,1,0,0,0,70,96,1,0,0,0,71,72,10,9,0,0,72,73,7,1,0,0,
73,95,3,14,7,10,74,75,10,8,0,0,75,76,7,2,0,0,76,95,3,14,7,9,77,78,10,7,0,
0,78,79,7,3,0,0,79,95,3,14,7,8,80,81,10,6,0,0,81,82,7,4,0,0,82,95,3,14,7,
7,83,84,10,3,0,0,84,85,5,23,0,0,85,86,3,14,7,0,86,87,5,24,0,0,87,88,3,14,
7,4,88,95,1,0,0,0,89,90,10,5,0,0,90,91,5,21,0,0,91,92,3,14,7,0,92,93,5,22,
0,0,93,95,1,0,0,0,94,71,1,0,0,0,94,74,1,0,0,0,94,77,1,0,0,0,94,80,1,0,0,
0,94,83,1,0,0,0,94,89,1,0,0,0,95,98,1,0,0,0,96,94,1,0,0,0,96,97,1,0,0,0,
97,15,1,0,0,0,98,96,1,0,0,0,99,100,5,25,0,0,100,101,3,14,7,0,101,102,5,26,
0,0,102,106,1,0,0,0,103,104,5,25,0,0,104,106,5,26,0,0,105,99,1,0,0,0,105,
103,1,0,0,0,106,17,1,0,0,0,7,24,33,40,69,94,96,105];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ExprParser extends antlr4.Parser {

    static grammarFileName = "Expr.g4";
    static literalNames = [ null, "'('", "')'", "','", "'if'", "'else if'", 
                            "'else'", "'-'", "'+'", "'!'", "'*'", "'/'", 
                            "'%'", "'>'", "'<'", "'>='", "'<='", "'=='", 
                            "'!='", "'&&'", "'||'", "'['", "']'", "'?'", 
                            "':'", "'{'", "'}'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "ID", "INT", "WS" ];
    static ruleNames = [ "prog", "funcCall", "parameters", "ifStat", "ifPart", 
                         "elseIfPart", "elsePart", "expr", "block" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ExprParser.ruleNames;
        this.literalNames = ExprParser.literalNames;
        this.symbolicNames = ExprParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 7:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 9);
    		case 1:
    			return this.precpred(this._ctx, 8);
    		case 2:
    			return this.precpred(this._ctx, 7);
    		case 3:
    			return this.precpred(this._ctx, 6);
    		case 4:
    			return this.precpred(this._ctx, 3);
    		case 5:
    			return this.precpred(this._ctx, 5);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ExprParser.RULE_prog);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 18;
	        this.expr(0);
	        this.state = 19;
	        this.match(ExprParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	funcCall() {
	    let localctx = new FuncCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ExprParser.RULE_funcCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(ExprParser.ID);
	        this.state = 22;
	        this.match(ExprParser.T__0);
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 402654098) !== 0)) {
	            this.state = 23;
	            this.parameters();
	        }

	        this.state = 26;
	        this.match(ExprParser.T__1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	parameters() {
	    let localctx = new ParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ExprParser.RULE_parameters);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        this.expr(0);
	        this.state = 33;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 29;
	            this.match(ExprParser.T__2);
	            this.state = 30;
	            this.expr(0);
	            this.state = 35;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStat() {
	    let localctx = new IfStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ExprParser.RULE_ifStat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.ifPart();
	        this.state = 40;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5) {
	            this.state = 37;
	            this.elseIfPart();
	            this.state = 42;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 43;
	        this.elsePart();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifPart() {
	    let localctx = new IfPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ExprParser.RULE_ifPart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        this.match(ExprParser.T__3);
	        this.state = 46;
	        this.match(ExprParser.T__0);
	        this.state = 47;
	        this.expr(0);
	        this.state = 48;
	        this.match(ExprParser.T__1);
	        this.state = 49;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elseIfPart() {
	    let localctx = new ElseIfPartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ExprParser.RULE_elseIfPart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 51;
	        this.match(ExprParser.T__4);
	        this.state = 52;
	        this.expr(0);
	        this.state = 53;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elsePart() {
	    let localctx = new ElsePartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ExprParser.RULE_elsePart);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 55;
	        this.match(ExprParser.T__5);
	        this.state = 56;
	        this.block();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, ExprParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 59;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 896) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 60;
	            this.expr(12);
	            break;

	        case 2:
	            this.state = 61;
	            this.funcCall();
	            break;

	        case 3:
	            this.state = 62;
	            this.ifStat();
	            break;

	        case 4:
	            this.state = 63;
	            this.match(ExprParser.T__0);
	            this.state = 64;
	            this.expr(0);
	            this.state = 65;
	            this.match(ExprParser.T__1);
	            break;

	        case 5:
	            this.state = 67;
	            this.match(ExprParser.ID);
	            break;

	        case 6:
	            this.state = 68;
	            this.match(ExprParser.INT);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 96;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 94;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
	                    this.state = 71;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 72;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 7168) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 73;
	                    this.expr(10);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
	                    this.state = 74;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 75;
	                    _la = this._input.LA(1);
	                    if(!(_la===7 || _la===8)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 76;
	                    this.expr(9);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
	                    this.state = 77;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 78;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 516096) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 79;
	                    this.expr(8);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
	                    this.state = 80;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 81;
	                    _la = this._input.LA(1);
	                    if(!(_la===19 || _la===20)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 82;
	                    this.expr(7);
	                    break;

	                case 5:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
	                    this.state = 83;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 84;
	                    this.match(ExprParser.T__22);
	                    this.state = 85;
	                    this.expr(0);
	                    this.state = 86;
	                    this.match(ExprParser.T__23);
	                    this.state = 87;
	                    this.expr(4);
	                    break;

	                case 6:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
	                    this.state = 89;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 90;
	                    this.match(ExprParser.T__20);
	                    this.state = 91;
	                    this.expr(0);
	                    this.state = 92;
	                    this.match(ExprParser.T__21);
	                    break;

	                } 
	            }
	            this.state = 98;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, ExprParser.RULE_block);
	    try {
	        this.state = 105;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 99;
	            this.match(ExprParser.T__24);
	            this.state = 100;
	            this.expr(0);
	            this.state = 101;
	            this.match(ExprParser.T__25);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 103;
	            this.match(ExprParser.T__24);
	            this.state = 104;
	            this.match(ExprParser.T__25);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ExprParser.EOF = antlr4.Token.EOF;
ExprParser.T__0 = 1;
ExprParser.T__1 = 2;
ExprParser.T__2 = 3;
ExprParser.T__3 = 4;
ExprParser.T__4 = 5;
ExprParser.T__5 = 6;
ExprParser.T__6 = 7;
ExprParser.T__7 = 8;
ExprParser.T__8 = 9;
ExprParser.T__9 = 10;
ExprParser.T__10 = 11;
ExprParser.T__11 = 12;
ExprParser.T__12 = 13;
ExprParser.T__13 = 14;
ExprParser.T__14 = 15;
ExprParser.T__15 = 16;
ExprParser.T__16 = 17;
ExprParser.T__17 = 18;
ExprParser.T__18 = 19;
ExprParser.T__19 = 20;
ExprParser.T__20 = 21;
ExprParser.T__21 = 22;
ExprParser.T__22 = 23;
ExprParser.T__23 = 24;
ExprParser.T__24 = 25;
ExprParser.T__25 = 26;
ExprParser.ID = 27;
ExprParser.INT = 28;
ExprParser.WS = 29;

ExprParser.RULE_prog = 0;
ExprParser.RULE_funcCall = 1;
ExprParser.RULE_parameters = 2;
ExprParser.RULE_ifStat = 3;
ExprParser.RULE_ifPart = 4;
ExprParser.RULE_elseIfPart = 5;
ExprParser.RULE_elsePart = 6;
ExprParser.RULE_expr = 7;
ExprParser.RULE_block = 8;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_prog;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	EOF() {
	    return this.getToken(ExprParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FuncCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_funcCall;
    }

	ID() {
	    return this.getToken(ExprParser.ID, 0);
	};

	parameters() {
	    return this.getTypedRuleContext(ParametersContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterFuncCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitFuncCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitFuncCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_parameters;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitParameters(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitParameters(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_ifStat;
    }

	ifPart() {
	    return this.getTypedRuleContext(IfPartContext,0);
	};

	elsePart() {
	    return this.getTypedRuleContext(ElsePartContext,0);
	};

	elseIfPart = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElseIfPartContext);
	    } else {
	        return this.getTypedRuleContext(ElseIfPartContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterIfStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitIfStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitIfStat(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_ifPart;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterIfPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitIfPart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitIfPart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseIfPartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_elseIfPart;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterElseIfPart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitElseIfPart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitElseIfPart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElsePartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_elsePart;
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterElsePart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitElsePart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitElsePart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_expr;
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	funcCall() {
	    return this.getTypedRuleContext(FuncCallContext,0);
	};

	ifStat() {
	    return this.getTypedRuleContext(IfStatContext,0);
	};

	ID() {
	    return this.getToken(ExprParser.ID, 0);
	};

	INT() {
	    return this.getToken(ExprParser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_block;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ExprParser.ProgContext = ProgContext; 
ExprParser.FuncCallContext = FuncCallContext; 
ExprParser.ParametersContext = ParametersContext; 
ExprParser.IfStatContext = IfStatContext; 
ExprParser.IfPartContext = IfPartContext; 
ExprParser.ElseIfPartContext = ElseIfPartContext; 
ExprParser.ElsePartContext = ElsePartContext; 
ExprParser.ExprContext = ExprContext; 
ExprParser.BlockContext = BlockContext; 
