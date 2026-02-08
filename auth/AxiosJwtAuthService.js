"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _axios = _interopRequireDefault(require("axios"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _utils = require("./utils");
var _utils2 = require("../utils");
var _createJwtTokenProviderInterceptor = _interopRequireDefault(require("./interceptors/createJwtTokenProviderInterceptor"));
var _createCsrfTokenProviderInterceptor = _interopRequireDefault(require("./interceptors/createCsrfTokenProviderInterceptor"));
var _createProcessAxiosRequestErrorInterceptor = _interopRequireDefault(require("./interceptors/createProcessAxiosRequestErrorInterceptor"));
var _AxiosJwtTokenService = _interopRequireDefault(require("./AxiosJwtTokenService"));
var _AxiosCsrfTokenService = _interopRequireDefault(require("./AxiosCsrfTokenService"));
var _LocalForageCache = _interopRequireDefault(require("./LocalForageCache"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var optionsPropTypes = {
  config: _propTypes["default"].shape({
    BASE_URL: _propTypes["default"].string.isRequired,
    LMS_BASE_URL: _propTypes["default"].string.isRequired,
    LOGIN_URL: _propTypes["default"].string.isRequired,
    LOGOUT_URL: _propTypes["default"].string.isRequired,
    REFRESH_ACCESS_TOKEN_ENDPOINT: _propTypes["default"].string.isRequired,
    ACCESS_TOKEN_COOKIE_NAME: _propTypes["default"].string.isRequired,
    CSRF_TOKEN_API_PATH: _propTypes["default"].string.isRequired
  }).isRequired,
  loggingService: _propTypes["default"].shape({
    logError: _propTypes["default"].func.isRequired,
    logInfo: _propTypes["default"].func.isRequired
  }).isRequired
};

/**
 * @implements {AuthService}
 * @memberof module:Auth
 */
var AxiosJwtAuthService = /*#__PURE__*/function () {
  /**
   * @param {Object} options
   * @param {Object} options.config
   * @param {string} options.config.BASE_URL
   * @param {string} options.config.LMS_BASE_URL
   * @param {string} options.config.LOGIN_URL
   * @param {string} options.config.LOGOUT_URL
   * @param {string} options.config.REFRESH_ACCESS_TOKEN_ENDPOINT
   * @param {string} options.config.ACCESS_TOKEN_COOKIE_NAME
   * @param {string} options.config.CSRF_TOKEN_API_PATH
   * @param {Object} options.loggingService requires logError and logInfo methods
   */
  function AxiosJwtAuthService(options) {
    var _this = this;
    _classCallCheck(this, AxiosJwtAuthService);
    this.authenticatedHttpClient = null;
    this.httpClient = null;
    this.cachedAuthenticatedHttpClient = null;
    this.cachedHttpClient = null;
    this.authenticatedUser = null;
    (0, _utils2.ensureDefinedConfig)(options, 'AuthService');
    _propTypes["default"].checkPropTypes(optionsPropTypes, options, 'options', 'AuthService');
    this.config = options.config;
    this.loggingService = options.loggingService;
    this.jwtTokenService = new _AxiosJwtTokenService["default"](this.loggingService, this.config.ACCESS_TOKEN_COOKIE_NAME, this.config.REFRESH_ACCESS_TOKEN_ENDPOINT);
    this.csrfTokenService = new _AxiosCsrfTokenService["default"](this.config.CSRF_TOKEN_API_PATH);
    this.authenticatedHttpClient = this.addAuthenticationToHttpClient(_axios["default"].create());
    this.httpClient = _axios["default"].create();
    (0, _LocalForageCache["default"])().then(function (cachedAxiosClient) {
      _this.cachedAuthenticatedHttpClient = _this.addAuthenticationToHttpClient(cachedAxiosClient);
      _this.cachedHttpClient = cachedAxiosClient;
    })["catch"](function (e) {
      // fallback to non-cached HTTP clients and log error
      _this.cachedAuthenticatedHttpClient = _this.authenticatedHttpClient;
      _this.cachedHttpClient = _this.httpClient;
      (0, _utils.logFrontendAuthError)(_this.loggingService, "configureCache failed with error: ".concat(e.message));
    })["finally"](function () {
      _this.middleware = options.middleware;
      _this.applyMiddleware(options.middleware);
    });
  }

  /**
   * Applies middleware to the axios instances in this service.
   *
   * @param {Array} middleware Middleware to apply.
   */
  return _createClass(AxiosJwtAuthService, [{
    key: "applyMiddleware",
    value: function applyMiddleware() {
      var middleware = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var clients = [this.authenticatedHttpClient, this.httpClient, this.cachedAuthenticatedHttpClient, this.cachedHttpClient];
      try {
        middleware.forEach(function (middlewareFn) {
          clients.forEach(function (client) {
            return client && middlewareFn(client);
          });
        });
      } catch (error) {
        (0, _utils.logFrontendAuthError)(this.loggingService, error);
        throw error;
      }
    }

    /**
     * Gets the authenticated HTTP client for the service.  This is an axios instance.
     *
     * @param {Object} [options] Optional options for how the HTTP client should be configured.
     * @param {boolean} [options.useCache] Whether to use front end caching for all requests made
     * with the returned client.
     *
     * @returns {HttpClient} A configured axios http client which can be used for authenticated
     * requests.
     */
  }, {
    key: "getAuthenticatedHttpClient",
    value: function getAuthenticatedHttpClient() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (options.useCache) {
        return this.cachedAuthenticatedHttpClient;
      }
      return this.authenticatedHttpClient;
    }

    /**
     * Gets the unauthenticated HTTP client for the service.  This is an axios instance.
     *
     * @param {Object} [options] Optional options for how the HTTP client should be configured.
     * @param {boolean} [options.useCache] Whether to use front end caching for all requests made
     * with the returned client.
     * @returns {HttpClient} A configured axios http client.
     */
  }, {
    key: "getHttpClient",
    value: function getHttpClient() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      if (options.useCache) {
        return this.cachedHttpClient;
      }
      return this.httpClient;
    }

    /**
     * Used primarily for testing.
     *
     * @ignore
     */
  }, {
    key: "getJwtTokenService",
    value: function getJwtTokenService() {
      return this.jwtTokenService;
    }

    /**
     * Used primarily for testing.
     *
     * @ignore
     */
  }, {
    key: "getCsrfTokenService",
    value: function getCsrfTokenService() {
      return this.csrfTokenService;
    }

    /**
     * Builds a URL to the login page with a post-login redirect URL attached as a query parameter.
     *
     * ```
     * const url = getLoginRedirectUrl('http://localhost/mypage');
     * console.log(url); // http://localhost/login?next=http%3A%2F%2Flocalhost%2Fmypage
     * ```
     *
     * @param {string} redirectUrl The URL the user should be redirected to after logging in.
     */
  }, {
    key: "getLoginRedirectUrl",
    value: function getLoginRedirectUrl() {
      var redirectUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config.BASE_URL;
      return "".concat(this.config.LOGIN_URL, "?next=").concat(encodeURIComponent(redirectUrl));
    }

    /**
     * Redirects the user to the login page.
     *
     * @param {string} redirectUrl The URL the user should be redirected to after logging in.
     */
  }, {
    key: "redirectToLogin",
    value: function redirectToLogin() {
      var redirectUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config.BASE_URL;
      global.location.assign(this.getLoginRedirectUrl(redirectUrl));
    }

    /**
     * Builds a URL to the logout page with a post-logout redirect URL attached as a query parameter.
     *
     * ```
     * const url = getLogoutRedirectUrl('http://localhost/mypage');
     * console.log(url); // http://localhost/logout?next=http%3A%2F%2Flocalhost%2Fmypage
     * ```
     *
     * @param {string} redirectUrl The URL the user should be redirected to after logging out.
     */
  }, {
    key: "getLogoutRedirectUrl",
    value: function getLogoutRedirectUrl() {
      var redirectUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config.BASE_URL;
      return "".concat(this.config.LOGOUT_URL, "?redirect_url=").concat(encodeURIComponent(redirectUrl));
    }

    /**
     * Redirects the user to the logout page.
     *
     * @param {string} redirectUrl The URL the user should be redirected to after logging out.
     */
  }, {
    key: "redirectToLogout",
    value: function redirectToLogout() {
      var redirectUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.config.BASE_URL;
      global.location.assign(this.getLogoutRedirectUrl(redirectUrl));
    }

    /**
     * If it exists, returns the user data representing the currently authenticated user. If the
     * user is anonymous, returns null.
     *
     * @returns {UserData|null}
     */
  }, {
    key: "getAuthenticatedUser",
    value: function getAuthenticatedUser() {
      return this.authenticatedUser;
    }

    /**
     * Sets the authenticated user to the provided value.
     *
     * @param {UserData} authUser
     */
  }, {
    key: "setAuthenticatedUser",
    value: function setAuthenticatedUser(authUser) {
      this.authenticatedUser = authUser;
    }

    /**
     * Reads the authenticated user's access token. Resolves to null if the user is
     * unauthenticated.
     *
     * @returns {Promise<UserData>|Promise<null>} Resolves to the user's access token if they are
     * logged in.
     */
  }, {
    key: "fetchAuthenticatedUser",
    value: (function () {
      var _fetchAuthenticatedUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
        var options,
          decodedAccessToken,
          _args = arguments;
        return _regenerator().w(function (_context) {
          while (1) switch (_context.n) {
            case 0:
              options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
              _context.n = 1;
              return this.jwtTokenService.getJwtToken(options.forceRefresh || false);
            case 1:
              decodedAccessToken = _context.v;
              if (decodedAccessToken !== null) {
                this.setAuthenticatedUser({
                  email: decodedAccessToken.email,
                  userId: decodedAccessToken.user_id,
                  username: decodedAccessToken.preferred_username,
                  roles: decodedAccessToken.roles || [],
                  administrator: decodedAccessToken.administrator,
                  name: decodedAccessToken.name
                });
                // Sets userId as a custom attribute that will be included with all subsequent log messages.
                // Very helpful for debugging.
                this.loggingService.setCustomAttribute('userId', decodedAccessToken.user_id);
              } else {
                this.setAuthenticatedUser(null);
                // Intentionally not setting `userId` in the logging service here because it would be useful
                // to know the previously logged in user for debugging refresh issues.
              }
              return _context.a(2, this.getAuthenticatedUser());
          }
        }, _callee, this);
      }));
      function fetchAuthenticatedUser() {
        return _fetchAuthenticatedUser.apply(this, arguments);
      }
      return fetchAuthenticatedUser;
    }()
    /**
     * Ensures a user is authenticated. It will redirect to login when not
     * authenticated.
     *
     * @param {string} [redirectUrl=config.BASE_URL] to return user after login when not
     * authenticated.
     * @returns {Promise<UserData>}
     */
    )
  }, {
    key: "ensureAuthenticatedUser",
    value: (function () {
      var _ensureAuthenticatedUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
        var redirectUrl,
          isRedirectFromLoginPage,
          redirectLoopError,
          unauthorizedError,
          _args2 = arguments;
        return _regenerator().w(function (_context2) {
          while (1) switch (_context2.n) {
            case 0:
              redirectUrl = _args2.length > 0 && _args2[0] !== undefined ? _args2[0] : this.config.BASE_URL;
              _context2.n = 1;
              return this.fetchAuthenticatedUser();
            case 1:
              if (!(this.getAuthenticatedUser() === null)) {
                _context2.n = 3;
                break;
              }
              isRedirectFromLoginPage = global.document.referrer && global.document.referrer.startsWith(this.config.LOGIN_URL);
              if (!isRedirectFromLoginPage) {
                _context2.n = 2;
                break;
              }
              redirectLoopError = new Error('Redirect from login page. Rejecting to avoid infinite redirect loop.');
              (0, _utils.logFrontendAuthError)(this.loggingService, redirectLoopError);
              throw redirectLoopError;
            case 2:
              // The user is not authenticated, send them to the login page.
              this.redirectToLogin(redirectUrl);
              unauthorizedError = new Error('Failed to ensure the user is authenticated');
              unauthorizedError.isRedirecting = true;
              throw unauthorizedError;
            case 3:
              return _context2.a(2, this.getAuthenticatedUser());
          }
        }, _callee2, this);
      }));
      function ensureAuthenticatedUser() {
        return _ensureAuthenticatedUser.apply(this, arguments);
      }
      return ensureAuthenticatedUser;
    }()
    /**
     * Fetches additional user account information for the authenticated user and merges it into the
     * existing authenticatedUser object, available via getAuthenticatedUser().
     *
     * ```
     *  console.log(authenticatedUser); // Will be sparse and only contain basic information.
     *  await hydrateAuthenticatedUser()
     *  const authenticatedUser = getAuthenticatedUser();
     *  console.log(authenticatedUser); // Will contain additional user information
     * ```
     *
     * @returns {Promise<null>}
     */
    )
  }, {
    key: "hydrateAuthenticatedUser",
    value: (function () {
      var _hydrateAuthenticatedUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
        var user, response;
        return _regenerator().w(function (_context3) {
          while (1) switch (_context3.n) {
            case 0:
              user = this.getAuthenticatedUser();
              if (!(user !== null)) {
                _context3.n = 2;
                break;
              }
              _context3.n = 1;
              return this.authenticatedHttpClient.get("".concat(this.config.LMS_BASE_URL, "/api/user/v1/accounts/").concat(user.username));
            case 1:
              response = _context3.v;
              this.setAuthenticatedUser(_objectSpread(_objectSpread({}, user), (0, _utils2.camelCaseObject)(response.data)));
            case 2:
              return _context3.a(2);
          }
        }, _callee3, this);
      }));
      function hydrateAuthenticatedUser() {
        return _hydrateAuthenticatedUser.apply(this, arguments);
      }
      return hydrateAuthenticatedUser;
    }()
    /**
    * Adds authentication defaults and interceptors to an HTTP client instance.
    *
    * @param {HttpClient} newHttpClient
    * @param {Object} config
    * @param {string} [config.REFRESH_ACCESS_TOKEN_ENDPOINT]
    * @param {string} [config.ACCESS_TOKEN_COOKIE_NAME]
    * @param {string} [config.CSRF_TOKEN_API_PATH]
    * @returns {HttpClient} A configured Axios HTTP client.
    */
    )
  }, {
    key: "addAuthenticationToHttpClient",
    value: function addAuthenticationToHttpClient(newHttpClient) {
      var httpClient = Object.create(newHttpClient);
      // Set withCredentials to true. Enables cross-site Access-Control requests
      // to be made using cookies, authorization headers or TLS client
      // certificates. More on MDN:
      // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials
      httpClient.defaults.withCredentials = true;

      // Axios interceptors

      // The JWT access token interceptor attempts to refresh the user's jwt token
      // before any request unless the isPublic flag is set on the request config.
      var refreshAccessTokenInterceptor = (0, _createJwtTokenProviderInterceptor["default"])({
        jwtTokenService: this.jwtTokenService,
        shouldSkip: function shouldSkip(axiosRequestConfig) {
          return axiosRequestConfig.isPublic;
        }
      });
      // The CSRF token intercepter fetches and caches a csrf token for any post,
      // put, patch, or delete request. That token is then added to the request
      // headers.
      var attachCsrfTokenInterceptor = (0, _createCsrfTokenProviderInterceptor["default"])({
        csrfTokenService: this.csrfTokenService,
        CSRF_TOKEN_API_PATH: this.config.CSRF_TOKEN_API_PATH,
        shouldSkip: function shouldSkip(axiosRequestConfig) {
          var method = axiosRequestConfig.method,
            isCsrfExempt = axiosRequestConfig.isCsrfExempt;
          var CSRF_PROTECTED_METHODS = ['post', 'put', 'patch', 'delete'];
          return isCsrfExempt || !CSRF_PROTECTED_METHODS.includes(method);
        }
      });
      var processAxiosRequestErrorInterceptor = (0, _createProcessAxiosRequestErrorInterceptor["default"])({
        loggingService: this.loggingService
      });

      // Request interceptors: Axios runs the interceptors in reverse order from
      // how they are listed. After fetching csrf tokens no longer require jwt
      // authentication, it won't matter which happens first. This change is
      // coming soon in edx-platform. Nov. 2019
      httpClient.interceptors.request.use(attachCsrfTokenInterceptor);
      httpClient.interceptors.request.use(refreshAccessTokenInterceptor);

      // Response interceptor: moves axios response error data into the error
      // object at error.customAttributes
      httpClient.interceptors.response.use(function (response) {
        return response;
      }, processAxiosRequestErrorInterceptor);
      return httpClient;
    }
  }]);
}();
var _default = exports["default"] = AxiosJwtAuthService;
//# sourceMappingURL=AxiosJwtAuthService.js.map