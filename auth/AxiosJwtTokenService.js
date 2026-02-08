"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _universalCookie = _interopRequireDefault(require("universal-cookie"));
var _jwtDecode = _interopRequireDefault(require("jwt-decode"));
var _axios = _interopRequireDefault(require("axios"));
var _utils = require("./utils");
var _createRetryInterceptor = _interopRequireDefault(require("./interceptors/createRetryInterceptor"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var AxiosJwtTokenService = exports["default"] = /*#__PURE__*/function () {
  function AxiosJwtTokenService(loggingService, tokenCookieName, tokenRefreshEndpoint) {
    _classCallCheck(this, AxiosJwtTokenService);
    this.loggingService = loggingService;
    this.tokenCookieName = tokenCookieName;
    this.tokenRefreshEndpoint = tokenRefreshEndpoint;
    this.httpClient = _axios["default"].create();
    // Set withCredentials to true. Enables cross-site Access-Control requests
    // to be made using cookies, authorization headers or TLS client
    // certificates. More on MDN:
    // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials
    this.httpClient.defaults.withCredentials = true;
    // Add retries to this axios instance
    this.httpClient.interceptors.response.use(function (response) {
      return response;
    }, (0, _createRetryInterceptor["default"])({
      httpClient: this.httpClient
    }));
    this.cookies = new _universalCookie["default"]();
    this.refreshRequestPromises = {};
  }
  return _createClass(AxiosJwtTokenService, [{
    key: "getHttpClient",
    value: function getHttpClient() {
      return this.httpClient;
    }
  }, {
    key: "decodeJwtCookie",
    value: function decodeJwtCookie() {
      var cookieValue = this.cookies.get(this.tokenCookieName);
      if (cookieValue) {
        try {
          return (0, _jwtDecode["default"])(cookieValue);
        } catch (e) {
          var error = Object.create(e);
          error.message = 'Error decoding JWT token';
          error.customAttributes = {
            cookieValue: cookieValue
          };
          throw error;
        }
      }
      return null;
    }
  }, {
    key: "refresh",
    value: function refresh() {
      var _this = this;
      var responseServerEpochSeconds = 0;
      if (this.refreshRequestPromises[this.tokenCookieName] === undefined) {
        var makeRefreshRequest = /*#__PURE__*/function () {
          var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
            var axiosResponse, userIsUnauthenticated, _decodedJwtToken, browserEpochSeconds, browserDriftSeconds, decodedJwtToken, error, _t, _t2;
            return _regenerator().w(function (_context) {
              while (1) switch (_context.p = _context.n) {
                case 0:
                  _context.p = 0;
                  _context.p = 1;
                  _context.n = 2;
                  return _this.httpClient.post(_this.tokenRefreshEndpoint);
                case 2:
                  axiosResponse = _context.v;
                  // eslint-disable-next-line max-len
                  if (axiosResponse.data && axiosResponse.data.response_epoch_seconds) {
                    responseServerEpochSeconds = axiosResponse.data.response_epoch_seconds;
                  }
                  _context.n = 4;
                  break;
                case 3:
                  _context.p = 3;
                  _t = _context.v;
                  (0, _utils.processAxiosErrorAndThrow)(_t);
                case 4:
                  _context.n = 7;
                  break;
                case 5:
                  _context.p = 5;
                  _t2 = _context.v;
                  userIsUnauthenticated = _t2.response && _t2.response.status === 401;
                  if (!userIsUnauthenticated) {
                    _context.n = 6;
                    break;
                  }
                  // Clean up the cookie if it exists to eliminate any situation
                  // where the cookie is not expired but the jwt is expired.
                  _this.cookies.remove(_this.tokenCookieName);
                  _decodedJwtToken = null;
                  return _context.a(2, _decodedJwtToken);
                case 6:
                  throw _t2;
                case 7:
                  browserEpochSeconds = Date.now() / 1000;
                  browserDriftSeconds = responseServerEpochSeconds > 0 ? Math.abs(browserEpochSeconds - responseServerEpochSeconds) : null;
                  decodedJwtToken = _this.decodeJwtCookie();
                  if (decodedJwtToken) {
                    _context.n = 8;
                    break;
                  }
                  // This is an unexpected case. The refresh endpoint should set the
                  //   cookie that is needed.
                  // For more details, see:
                  //   docs/decisions/0005-token-null-after-successful-refresh.rst
                  error = new Error('Access token is still null after successful refresh.');
                  error.customAttributes = {
                    axiosResponse: axiosResponse,
                    browserDriftSeconds: browserDriftSeconds,
                    browserEpochSeconds: browserEpochSeconds
                  };
                  throw error;
                case 8:
                  return _context.a(2, decodedJwtToken);
              }
            }, _callee, null, [[1, 3], [0, 5]]);
          }));
          return function makeRefreshRequest() {
            return _ref.apply(this, arguments);
          };
        }();
        this.refreshRequestPromises[this.tokenCookieName] = makeRefreshRequest()["finally"](function () {
          delete _this.refreshRequestPromises[_this.tokenCookieName];
        });
      }
      return this.refreshRequestPromises[this.tokenCookieName];
    }
  }, {
    key: "getJwtToken",
    value: function () {
      var _getJwtToken = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var forceRefresh,
          decodedJwtToken,
          _args2 = arguments,
          _t3,
          _t4;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.p = _context2.n) {
            case 0:
              forceRefresh = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : false;
              _context2.p = 1;
              decodedJwtToken = this.decodeJwtCookie(this.tokenCookieName);
              if (!(!AxiosJwtTokenService.isTokenExpired(decodedJwtToken) && !forceRefresh)) {
                _context2.n = 2;
                break;
              }
              return _context2.a(2, decodedJwtToken);
            case 2:
              _context2.n = 4;
              break;
            case 3:
              _context2.p = 3;
              _t3 = _context2.v;
              // Log unexpected error and continue with attempt to refresh it.
              // TODO: Fix these.  They're still using loggingService as a singleton.
              (0, _utils.logFrontendAuthError)(this.loggingService, _t3);
            case 4:
              _context2.p = 4;
              _context2.n = 5;
              return this.refresh();
            case 5:
              return _context2.a(2, _context2.v);
            case 6:
              _context2.p = 6;
              _t4 = _context2.v;
              // TODO: Fix these.  They're still using loggingService as a singleton.
              (0, _utils.logFrontendAuthError)(this.loggingService, _t4);
              throw _t4;
            case 7:
              return _context2.a(2);
          }
        }, _callee2, this, [[4, 6], [1, 3]]);
      }));
      function getJwtToken() {
        return _getJwtToken.apply(this, arguments);
      }
      return getJwtToken;
    }()
  }], [{
    key: "isTokenExpired",
    value: function isTokenExpired(token) {
      return !token || token.exp < Date.now() / 1000;
    }
  }]);
}();
//# sourceMappingURL=AxiosJwtTokenService.js.map