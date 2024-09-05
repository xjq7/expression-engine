// Generated from /Users/xjq/project/expression-engine/compile/Expr.g4 by ANTLR 4.13.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast", "CheckReturnValue"})
public class ExprParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.13.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, BOOL=27, ID=28, INT=29, WS=30;
	public static final int
		RULE_prog = 0, RULE_funcCall = 1, RULE_parameters = 2, RULE_ifStat = 3, 
		RULE_ifPart = 4, RULE_elseIfPart = 5, RULE_elsePart = 6, RULE_expr = 7, 
		RULE_block = 8;
	private static String[] makeRuleNames() {
		return new String[] {
			"prog", "funcCall", "parameters", "ifStat", "ifPart", "elseIfPart", "elsePart", 
			"expr", "block"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'('", "')'", "','", "'if'", "'else if'", "'else'", "'-'", "'+'", 
			"'!'", "'*'", "'/'", "'%'", "'>'", "'<'", "'>='", "'<='", "'=='", "'!='", 
			"'&&'", "'||'", "'['", "']'", "'?'", "':'", "'{'", "'}'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, null, null, null, null, null, null, null, null, null, 
			null, null, null, "BOOL", "ID", "INT", "WS"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "Expr.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public ExprParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ProgContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public TerminalNode EOF() { return getToken(ExprParser.EOF, 0); }
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	}

	public final ProgContext prog() throws RecognitionException {
		ProgContext _localctx = new ProgContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_prog);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(18);
			expr(0);
			setState(19);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class FuncCallContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(ExprParser.ID, 0); }
		public ParametersContext parameters() {
			return getRuleContext(ParametersContext.class,0);
		}
		public FuncCallContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funcCall; }
	}

	public final FuncCallContext funcCall() throws RecognitionException {
		FuncCallContext _localctx = new FuncCallContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_funcCall);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(21);
			match(ID);
			setState(22);
			match(T__0);
			setState(24);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if ((((_la) & ~0x3f) == 0 && ((1L << _la) & 805307282L) != 0)) {
				{
				setState(23);
				parameters();
				}
			}

			setState(26);
			match(T__1);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ParametersContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public ParametersContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_parameters; }
	}

	public final ParametersContext parameters() throws RecognitionException {
		ParametersContext _localctx = new ParametersContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_parameters);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(28);
			expr(0);
			setState(33);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__2) {
				{
				{
				setState(29);
				match(T__2);
				setState(30);
				expr(0);
				}
				}
				setState(35);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfStatContext extends ParserRuleContext {
		public IfPartContext ifPart() {
			return getRuleContext(IfPartContext.class,0);
		}
		public ElsePartContext elsePart() {
			return getRuleContext(ElsePartContext.class,0);
		}
		public List<ElseIfPartContext> elseIfPart() {
			return getRuleContexts(ElseIfPartContext.class);
		}
		public ElseIfPartContext elseIfPart(int i) {
			return getRuleContext(ElseIfPartContext.class,i);
		}
		public IfStatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifStat; }
	}

	public final IfStatContext ifStat() throws RecognitionException {
		IfStatContext _localctx = new IfStatContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_ifStat);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(36);
			ifPart();
			setState(40);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==T__4) {
				{
				{
				setState(37);
				elseIfPart();
				}
				}
				setState(42);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(43);
			elsePart();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class IfPartContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public IfPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ifPart; }
	}

	public final IfPartContext ifPart() throws RecognitionException {
		IfPartContext _localctx = new IfPartContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_ifPart);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(45);
			match(T__3);
			setState(46);
			match(T__0);
			setState(47);
			expr(0);
			setState(48);
			match(T__1);
			setState(49);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElseIfPartContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ElseIfPartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elseIfPart; }
	}

	public final ElseIfPartContext elseIfPart() throws RecognitionException {
		ElseIfPartContext _localctx = new ElseIfPartContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_elseIfPart);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(51);
			match(T__4);
			setState(52);
			expr(0);
			setState(53);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ElsePartContext extends ParserRuleContext {
		public BlockContext block() {
			return getRuleContext(BlockContext.class,0);
		}
		public ElsePartContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_elsePart; }
	}

	public final ElsePartContext elsePart() throws RecognitionException {
		ElsePartContext _localctx = new ElsePartContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_elsePart);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(55);
			match(T__5);
			setState(56);
			block();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class ExprContext extends ParserRuleContext {
		public List<ExprContext> expr() {
			return getRuleContexts(ExprContext.class);
		}
		public ExprContext expr(int i) {
			return getRuleContext(ExprContext.class,i);
		}
		public FuncCallContext funcCall() {
			return getRuleContext(FuncCallContext.class,0);
		}
		public IfStatContext ifStat() {
			return getRuleContext(IfStatContext.class,0);
		}
		public TerminalNode ID() { return getToken(ExprParser.ID, 0); }
		public TerminalNode INT() { return getToken(ExprParser.INT, 0); }
		public ExprContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expr; }
	}

	public final ExprContext expr() throws RecognitionException {
		return expr(0);
	}

	private ExprContext expr(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExprContext _localctx = new ExprContext(_ctx, _parentState);
		ExprContext _prevctx = _localctx;
		int _startState = 14;
		enterRecursionRule(_localctx, 14, RULE_expr, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(69);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,3,_ctx) ) {
			case 1:
				{
				setState(59);
				_la = _input.LA(1);
				if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 896L) != 0)) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(60);
				expr(12);
				}
				break;
			case 2:
				{
				setState(61);
				funcCall();
				}
				break;
			case 3:
				{
				setState(62);
				ifStat();
				}
				break;
			case 4:
				{
				setState(63);
				match(T__0);
				setState(64);
				expr(0);
				setState(65);
				match(T__1);
				}
				break;
			case 5:
				{
				setState(67);
				match(ID);
				}
				break;
			case 6:
				{
				setState(68);
				match(INT);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(96);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(94);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
					case 1:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(71);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(72);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 7168L) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(73);
						expr(10);
						}
						break;
					case 2:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(74);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(75);
						_la = _input.LA(1);
						if ( !(_la==T__6 || _la==T__7) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(76);
						expr(9);
						}
						break;
					case 3:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(77);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(78);
						_la = _input.LA(1);
						if ( !((((_la) & ~0x3f) == 0 && ((1L << _la) & 516096L) != 0)) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(79);
						expr(8);
						}
						break;
					case 4:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(80);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(81);
						_la = _input.LA(1);
						if ( !(_la==T__18 || _la==T__19) ) {
						_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(82);
						expr(7);
						}
						break;
					case 5:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(83);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(84);
						match(T__22);
						setState(85);
						expr(0);
						setState(86);
						match(T__23);
						setState(87);
						expr(4);
						}
						break;
					case 6:
						{
						_localctx = new ExprContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expr);
						setState(89);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(90);
						match(T__20);
						setState(91);
						expr(0);
						setState(92);
						match(T__21);
						}
						break;
					}
					} 
				}
				setState(98);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,5,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	@SuppressWarnings("CheckReturnValue")
	public static class BlockContext extends ParserRuleContext {
		public ExprContext expr() {
			return getRuleContext(ExprContext.class,0);
		}
		public BlockContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block; }
	}

	public final BlockContext block() throws RecognitionException {
		BlockContext _localctx = new BlockContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_block);
		try {
			setState(105);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(99);
				match(T__24);
				setState(100);
				expr(0);
				setState(101);
				match(T__25);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(103);
				match(T__24);
				setState(104);
				match(T__25);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 7:
			return expr_sempred((ExprContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expr_sempred(ExprContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 9);
		case 1:
			return precpred(_ctx, 8);
		case 2:
			return precpred(_ctx, 7);
		case 3:
			return precpred(_ctx, 6);
		case 4:
			return precpred(_ctx, 3);
		case 5:
			return precpred(_ctx, 5);
		}
		return true;
	}

	public static final String _serializedATN =
		"\u0004\u0001\u001el\u0002\u0000\u0007\u0000\u0002\u0001\u0007\u0001\u0002"+
		"\u0002\u0007\u0002\u0002\u0003\u0007\u0003\u0002\u0004\u0007\u0004\u0002"+
		"\u0005\u0007\u0005\u0002\u0006\u0007\u0006\u0002\u0007\u0007\u0007\u0002"+
		"\b\u0007\b\u0001\u0000\u0001\u0000\u0001\u0000\u0001\u0001\u0001\u0001"+
		"\u0001\u0001\u0003\u0001\u0019\b\u0001\u0001\u0001\u0001\u0001\u0001\u0002"+
		"\u0001\u0002\u0001\u0002\u0005\u0002 \b\u0002\n\u0002\f\u0002#\t\u0002"+
		"\u0001\u0003\u0001\u0003\u0005\u0003\'\b\u0003\n\u0003\f\u0003*\t\u0003"+
		"\u0001\u0003\u0001\u0003\u0001\u0004\u0001\u0004\u0001\u0004\u0001\u0004"+
		"\u0001\u0004\u0001\u0004\u0001\u0005\u0001\u0005\u0001\u0005\u0001\u0005"+
		"\u0001\u0006\u0001\u0006\u0001\u0006\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0003\u0007F\b\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007\u0001\u0007"+
		"\u0001\u0007\u0001\u0007\u0001\u0007\u0005\u0007_\b\u0007\n\u0007\f\u0007"+
		"b\t\u0007\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0001\b\u0003\bj\b\b"+
		"\u0001\b\u0000\u0001\u000e\t\u0000\u0002\u0004\u0006\b\n\f\u000e\u0010"+
		"\u0000\u0005\u0001\u0000\u0007\t\u0001\u0000\n\f\u0001\u0000\u0007\b\u0001"+
		"\u0000\r\u0012\u0001\u0000\u0013\u0014q\u0000\u0012\u0001\u0000\u0000"+
		"\u0000\u0002\u0015\u0001\u0000\u0000\u0000\u0004\u001c\u0001\u0000\u0000"+
		"\u0000\u0006$\u0001\u0000\u0000\u0000\b-\u0001\u0000\u0000\u0000\n3\u0001"+
		"\u0000\u0000\u0000\f7\u0001\u0000\u0000\u0000\u000eE\u0001\u0000\u0000"+
		"\u0000\u0010i\u0001\u0000\u0000\u0000\u0012\u0013\u0003\u000e\u0007\u0000"+
		"\u0013\u0014\u0005\u0000\u0000\u0001\u0014\u0001\u0001\u0000\u0000\u0000"+
		"\u0015\u0016\u0005\u001c\u0000\u0000\u0016\u0018\u0005\u0001\u0000\u0000"+
		"\u0017\u0019\u0003\u0004\u0002\u0000\u0018\u0017\u0001\u0000\u0000\u0000"+
		"\u0018\u0019\u0001\u0000\u0000\u0000\u0019\u001a\u0001\u0000\u0000\u0000"+
		"\u001a\u001b\u0005\u0002\u0000\u0000\u001b\u0003\u0001\u0000\u0000\u0000"+
		"\u001c!\u0003\u000e\u0007\u0000\u001d\u001e\u0005\u0003\u0000\u0000\u001e"+
		" \u0003\u000e\u0007\u0000\u001f\u001d\u0001\u0000\u0000\u0000 #\u0001"+
		"\u0000\u0000\u0000!\u001f\u0001\u0000\u0000\u0000!\"\u0001\u0000\u0000"+
		"\u0000\"\u0005\u0001\u0000\u0000\u0000#!\u0001\u0000\u0000\u0000$(\u0003"+
		"\b\u0004\u0000%\'\u0003\n\u0005\u0000&%\u0001\u0000\u0000\u0000\'*\u0001"+
		"\u0000\u0000\u0000(&\u0001\u0000\u0000\u0000()\u0001\u0000\u0000\u0000"+
		")+\u0001\u0000\u0000\u0000*(\u0001\u0000\u0000\u0000+,\u0003\f\u0006\u0000"+
		",\u0007\u0001\u0000\u0000\u0000-.\u0005\u0004\u0000\u0000./\u0005\u0001"+
		"\u0000\u0000/0\u0003\u000e\u0007\u000001\u0005\u0002\u0000\u000012\u0003"+
		"\u0010\b\u00002\t\u0001\u0000\u0000\u000034\u0005\u0005\u0000\u000045"+
		"\u0003\u000e\u0007\u000056\u0003\u0010\b\u00006\u000b\u0001\u0000\u0000"+
		"\u000078\u0005\u0006\u0000\u000089\u0003\u0010\b\u00009\r\u0001\u0000"+
		"\u0000\u0000:;\u0006\u0007\uffff\uffff\u0000;<\u0007\u0000\u0000\u0000"+
		"<F\u0003\u000e\u0007\f=F\u0003\u0002\u0001\u0000>F\u0003\u0006\u0003\u0000"+
		"?@\u0005\u0001\u0000\u0000@A\u0003\u000e\u0007\u0000AB\u0005\u0002\u0000"+
		"\u0000BF\u0001\u0000\u0000\u0000CF\u0005\u001c\u0000\u0000DF\u0005\u001d"+
		"\u0000\u0000E:\u0001\u0000\u0000\u0000E=\u0001\u0000\u0000\u0000E>\u0001"+
		"\u0000\u0000\u0000E?\u0001\u0000\u0000\u0000EC\u0001\u0000\u0000\u0000"+
		"ED\u0001\u0000\u0000\u0000F`\u0001\u0000\u0000\u0000GH\n\t\u0000\u0000"+
		"HI\u0007\u0001\u0000\u0000I_\u0003\u000e\u0007\nJK\n\b\u0000\u0000KL\u0007"+
		"\u0002\u0000\u0000L_\u0003\u000e\u0007\tMN\n\u0007\u0000\u0000NO\u0007"+
		"\u0003\u0000\u0000O_\u0003\u000e\u0007\bPQ\n\u0006\u0000\u0000QR\u0007"+
		"\u0004\u0000\u0000R_\u0003\u000e\u0007\u0007ST\n\u0003\u0000\u0000TU\u0005"+
		"\u0017\u0000\u0000UV\u0003\u000e\u0007\u0000VW\u0005\u0018\u0000\u0000"+
		"WX\u0003\u000e\u0007\u0004X_\u0001\u0000\u0000\u0000YZ\n\u0005\u0000\u0000"+
		"Z[\u0005\u0015\u0000\u0000[\\\u0003\u000e\u0007\u0000\\]\u0005\u0016\u0000"+
		"\u0000]_\u0001\u0000\u0000\u0000^G\u0001\u0000\u0000\u0000^J\u0001\u0000"+
		"\u0000\u0000^M\u0001\u0000\u0000\u0000^P\u0001\u0000\u0000\u0000^S\u0001"+
		"\u0000\u0000\u0000^Y\u0001\u0000\u0000\u0000_b\u0001\u0000\u0000\u0000"+
		"`^\u0001\u0000\u0000\u0000`a\u0001\u0000\u0000\u0000a\u000f\u0001\u0000"+
		"\u0000\u0000b`\u0001\u0000\u0000\u0000cd\u0005\u0019\u0000\u0000de\u0003"+
		"\u000e\u0007\u0000ef\u0005\u001a\u0000\u0000fj\u0001\u0000\u0000\u0000"+
		"gh\u0005\u0019\u0000\u0000hj\u0005\u001a\u0000\u0000ic\u0001\u0000\u0000"+
		"\u0000ig\u0001\u0000\u0000\u0000j\u0011\u0001\u0000\u0000\u0000\u0007"+
		"\u0018!(E^`i";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}