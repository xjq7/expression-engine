// Generated from compile/Expr.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import ExprListener from './ExprListener.js';
import ExprVisitor from './ExprVisitor.js';

const serializedATN = [4,1,26,107,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,1,0,4,0,20,8,0,11,0,12,0,21,1,0,1,0,1,
1,1,1,3,1,28,8,1,1,2,1,2,1,2,3,2,33,8,2,1,2,1,2,1,3,1,3,1,3,5,3,40,8,3,10,
3,12,3,43,9,3,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,5,5,55,8,5,10,5,12,
5,58,9,5,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,86,8,8,1,8,1,8,1,8,1,8,1,8,1,
8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,5,8,102,8,8,10,8,12,8,105,9,8,1,8,0,1,
16,9,0,2,4,6,8,10,12,14,16,0,3,1,0,11,18,1,0,21,22,2,0,9,9,23,23,112,0,19,
1,0,0,0,2,27,1,0,0,0,4,29,1,0,0,0,6,36,1,0,0,0,8,44,1,0,0,0,10,46,1,0,0,
0,12,64,1,0,0,0,14,66,1,0,0,0,16,85,1,0,0,0,18,20,3,2,1,0,19,18,1,0,0,0,
20,21,1,0,0,0,21,19,1,0,0,0,21,22,1,0,0,0,22,23,1,0,0,0,23,24,5,0,0,1,24,
1,1,0,0,0,25,28,3,16,8,0,26,28,3,4,2,0,27,25,1,0,0,0,27,26,1,0,0,0,28,3,
1,0,0,0,29,30,5,24,0,0,30,32,5,1,0,0,31,33,3,6,3,0,32,31,1,0,0,0,32,33,1,
0,0,0,33,34,1,0,0,0,34,35,5,2,0,0,35,5,1,0,0,0,36,41,3,8,4,0,37,38,5,3,0,
0,38,40,3,8,4,0,39,37,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,
42,7,1,0,0,0,43,41,1,0,0,0,44,45,3,16,8,0,45,9,1,0,0,0,46,47,5,4,0,0,47,
48,5,1,0,0,48,49,3,12,6,0,49,50,5,2,0,0,50,51,5,5,0,0,51,52,3,16,8,0,52,
56,5,6,0,0,53,55,3,14,7,0,54,53,1,0,0,0,55,58,1,0,0,0,56,54,1,0,0,0,56,57,
1,0,0,0,57,59,1,0,0,0,58,56,1,0,0,0,59,60,5,7,0,0,60,61,5,5,0,0,61,62,3,
16,8,0,62,63,5,6,0,0,63,11,1,0,0,0,64,65,3,16,8,0,65,13,1,0,0,0,66,67,5,
8,0,0,67,68,3,16,8,0,68,69,5,5,0,0,69,70,3,16,8,0,70,71,5,6,0,0,71,15,1,
0,0,0,72,73,6,8,-1,0,73,74,5,9,0,0,74,86,3,16,8,11,75,76,5,10,0,0,76,86,
3,16,8,10,77,86,3,10,5,0,78,79,5,1,0,0,79,80,3,16,8,0,80,81,5,2,0,0,81,86,
1,0,0,0,82,86,3,4,2,0,83,86,5,24,0,0,84,86,5,25,0,0,85,72,1,0,0,0,85,75,
1,0,0,0,85,77,1,0,0,0,85,78,1,0,0,0,85,82,1,0,0,0,85,83,1,0,0,0,85,84,1,
0,0,0,86,103,1,0,0,0,87,88,10,8,0,0,88,89,7,0,0,0,89,102,3,16,8,9,90,91,
10,6,0,0,91,92,7,1,0,0,92,102,3,16,8,7,93,94,10,5,0,0,94,95,7,2,0,0,95,102,
3,16,8,6,96,97,10,7,0,0,97,98,5,19,0,0,98,99,3,16,8,0,99,100,5,20,0,0,100,
102,1,0,0,0,101,87,1,0,0,0,101,90,1,0,0,0,101,93,1,0,0,0,101,96,1,0,0,0,
102,105,1,0,0,0,103,101,1,0,0,0,103,104,1,0,0,0,104,17,1,0,0,0,105,103,1,
0,0,0,8,21,27,32,41,56,85,101,103];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ExprParser extends antlr4.Parser {

    static grammarFileName = "Expr.g4";
    static literalNames = [ null, "'('", "')'", "','", "'if'", "'{'", "'}'", 
                            "'else'", "'else if'", "'-'", "'!'", "'>'", 
                            "'<'", "'>='", "'<='", "'=='", "'!='", "'&&'", 
                            "'||'", "'['", "']'", "'*'", "'/'", "'+'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "ID", "INT", "WS" ];
    static ruleNames = [ "prog", "stat", "funcCall", "parameters", "parameter", 
                         "ifStat", "ifCondition", "elseStat", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ExprParser.ruleNames;
        this.literalNames = ExprParser.literalNames;
        this.symbolicNames = ExprParser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 8:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 8);
    		case 1:
    			return this.precpred(this._ctx, 6);
    		case 2:
    			return this.precpred(this._ctx, 5);
    		case 3:
    			return this.precpred(this._ctx, 7);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ExprParser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 18;
	            this.stat();
	            this.state = 21; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 50333202) !== 0));
	        this.state = 23;
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



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ExprParser.RULE_stat);
	    try {
	        this.state = 27;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 25;
	            this.expr(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 26;
	            this.funcCall();
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



	funcCall() {
	    let localctx = new FuncCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ExprParser.RULE_funcCall);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        this.match(ExprParser.ID);
	        this.state = 30;
	        this.match(ExprParser.T__0);
	        this.state = 32;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 50333202) !== 0)) {
	            this.state = 31;
	            this.parameters();
	        }

	        this.state = 34;
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
	    this.enterRule(localctx, 6, ExprParser.RULE_parameters);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 36;
	        this.parameter();
	        this.state = 41;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 37;
	            this.match(ExprParser.T__2);
	            this.state = 38;
	            this.parameter();
	            this.state = 43;
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



	parameter() {
	    let localctx = new ParameterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ExprParser.RULE_parameter);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.expr(0);
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
	    this.enterRule(localctx, 10, ExprParser.RULE_ifStat);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 46;
	        this.match(ExprParser.T__3);
	        this.state = 47;
	        this.match(ExprParser.T__0);
	        this.state = 48;
	        this.ifCondition();
	        this.state = 49;
	        this.match(ExprParser.T__1);
	        this.state = 50;
	        this.match(ExprParser.T__4);
	        this.state = 51;
	        this.expr(0);
	        this.state = 52;
	        this.match(ExprParser.T__5);
	        this.state = 56;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===8) {
	            this.state = 53;
	            this.elseStat();
	            this.state = 58;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 59;
	        this.match(ExprParser.T__6);
	        this.state = 60;
	        this.match(ExprParser.T__4);
	        this.state = 61;
	        this.expr(0);
	        this.state = 62;
	        this.match(ExprParser.T__5);
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



	ifCondition() {
	    let localctx = new IfConditionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, ExprParser.RULE_ifCondition);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 64;
	        this.expr(0);
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



	elseStat() {
	    let localctx = new ElseStatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, ExprParser.RULE_elseStat);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(ExprParser.T__7);
	        this.state = 67;
	        this.expr(0);
	        this.state = 68;
	        this.match(ExprParser.T__4);
	        this.state = 69;
	        this.expr(0);
	        this.state = 70;
	        this.match(ExprParser.T__5);
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
	    const _startState = 16;
	    this.enterRecursionRule(localctx, 16, ExprParser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 85;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 73;
	            this.match(ExprParser.T__8);
	            this.state = 74;
	            this.expr(11);
	            break;

	        case 2:
	            this.state = 75;
	            this.match(ExprParser.T__9);
	            this.state = 76;
	            this.expr(10);
	            break;

	        case 3:
	            this.state = 77;
	            this.ifStat();
	            break;

	        case 4:
	            this.state = 78;
	            this.match(ExprParser.T__0);
	            this.state = 79;
	            this.expr(0);
	            this.state = 80;
	            this.match(ExprParser.T__1);
	            break;

	        case 5:
	            this.state = 82;
	            this.funcCall();
	            break;

	        case 6:
	            this.state = 83;
	            this.match(ExprParser.ID);
	            break;

	        case 7:
	            this.state = 84;
	            this.match(ExprParser.INT);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 103;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 101;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
	                    this.state = 87;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 88;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 522240) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 89;
	                    this.expr(9);
	                    break;

	                case 2:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
	                    this.state = 90;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 91;
	                    _la = this._input.LA(1);
	                    if(!(_la===21 || _la===22)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 92;
	                    this.expr(7);
	                    break;

	                case 3:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
	                    this.state = 93;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 94;
	                    _la = this._input.LA(1);
	                    if(!(_la===9 || _la===23)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 95;
	                    this.expr(6);
	                    break;

	                case 4:
	                    localctx = new ExprContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expr);
	                    this.state = 96;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 97;
	                    this.match(ExprParser.T__18);
	                    this.state = 98;
	                    this.expr(0);
	                    this.state = 99;
	                    this.match(ExprParser.T__19);
	                    break;

	                } 
	            }
	            this.state = 105;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
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
ExprParser.ID = 24;
ExprParser.INT = 25;
ExprParser.WS = 26;

ExprParser.RULE_prog = 0;
ExprParser.RULE_stat = 1;
ExprParser.RULE_funcCall = 2;
ExprParser.RULE_parameters = 3;
ExprParser.RULE_parameter = 4;
ExprParser.RULE_ifStat = 5;
ExprParser.RULE_ifCondition = 6;
ExprParser.RULE_elseStat = 7;
ExprParser.RULE_expr = 8;

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

	EOF() {
	    return this.getToken(ExprParser.EOF, 0);
	};

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
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



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_stat;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	funcCall() {
	    return this.getTypedRuleContext(FuncCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitStat(this);
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

	parameter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParameterContext);
	    } else {
	        return this.getTypedRuleContext(ParameterContext,i);
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



class ParameterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_parameter;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterParameter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitParameter(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitParameter(this);
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

	ifCondition() {
	    return this.getTypedRuleContext(IfConditionContext,0);
	};

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

	elseStat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ElseStatContext);
	    } else {
	        return this.getTypedRuleContext(ElseStatContext,i);
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



class IfConditionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_ifCondition;
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.enterIfCondition(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitIfCondition(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitIfCondition(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElseStatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ExprParser.RULE_elseStat;
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
	        listener.enterElseStat(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ExprListener ) {
	        listener.exitElseStat(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ExprVisitor ) {
	        return visitor.visitElseStat(this);
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

	ifStat() {
	    return this.getTypedRuleContext(IfStatContext,0);
	};

	funcCall() {
	    return this.getTypedRuleContext(FuncCallContext,0);
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




ExprParser.ProgContext = ProgContext; 
ExprParser.StatContext = StatContext; 
ExprParser.FuncCallContext = FuncCallContext; 
ExprParser.ParametersContext = ParametersContext; 
ExprParser.ParameterContext = ParameterContext; 
ExprParser.IfStatContext = IfStatContext; 
ExprParser.IfConditionContext = IfConditionContext; 
ExprParser.ElseStatContext = ElseStatContext; 
ExprParser.ExprContext = ExprContext; 
