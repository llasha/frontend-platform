"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AUTHENTICATED_USER_TOPIC = exports.AUTHENTICATED_USER_CHANGED = void 0;
exports.configure = configure;
exports.ensureAuthenticatedUser = ensureAuthenticatedUser;
exports.fetchAuthenticatedUser = fetchAuthenticatedUser;
exports.getAuthService = getAuthService;
exports.getAuthenticatedHttpClient = getAuthenticatedHttpClient;
exports.getAuthenticatedUser = getAuthenticatedUser;
exports.getHttpClient = getHttpClient;
exports.getLoginRedirectUrl = getLoginRedirectUrl;
exports.getLogoutRedirectUrl = getLogoutRedirectUrl;
exports.hydrateAuthenticatedUser = hydrateAuthenticatedUser;
exports.redirectToLogin = redirectToLogin;
exports.redirectToLogout = redirectToLogout;
exports.resetAuthService = resetAuthService;
exports.setAuthenticatedUser = setAuthenticatedUser;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _pubSub = require("../pubSub");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } /**
 * #### Import members from **@edx/frontend-platform/auth**
 *
 * Simplifies the process of making authenticated API requests to backend edX services by providing
 * common authN/authZ client code that enables the login/logout flow and handles ensuring the
 * presence of a valid [JWT cookie](https://github.com/openedx/edx-platform/blob/master/openedx/core/djangoapps/oauth_dispatch/docs/decisions/0009-jwt-in-session-cookie.rst).
 *
 * The `initialize` function performs much of the auth configuration for you.  If, however, you're
 * not using the `initialize` function, an authenticated API client can be created via:
 *
 * ```
 * import {
 *   configure,
 *   fetchAuthenticatedUser,
 *   getAuthenticatedHttpClient
 * } from '@edx/frontend-platform/auth';
 * import { getConfig } from '@edx/frontend-platform';
 * import { getLoggingService } from '@edx/frontend-platform/logging';
 *
 * configure({
 *   loggingService: getLoggingService(),
 *   config: getConfig(),
 * });
 *
 * const authenticatedUser = await fetchAuthenticatedUser(); // validates and decodes JWT token
 * const authenticatedHttpClient = getAuthenticatedHttpClient();
 * const response = await getAuthenticatedHttpClient().get(`https://example.com/api/user/data/${authenticatedUser.username}`); // fetching from an authenticated API using user data
 * ```
 *
 * As shown in this example, auth depends on the configuration document and logging.
 *
 * NOTE: The documentation for AxiosJwtAuthService is nearly the same as that for the top-level
 * auth interface, except that it contains some Axios-specific details.
 *
 * @module Auth
 */
/**
 * @constant
 * @private
 */
var AUTHENTICATED_USER_TOPIC = exports.AUTHENTICATED_USER_TOPIC = 'AUTHENTICATED_USER';

/**
 * Published when the authenticated user data changes.  This can happen when the authentication
 * service determines that the user is authenticated or anonymous, as well as when we fetch
 * additional user account data if the `hydrateAuthenticatedUser` flag has been set in the
 * `initialize` function.
 *
 * @event
 * @see {@link module:Initialization~initialize}
 */
var AUTHENTICATED_USER_CHANGED = exports.AUTHENTICATED_USER_CHANGED = "".concat(AUTHENTICATED_USER_TOPIC, ".CHANGED");
var optionsShape = {
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
var serviceShape = {
  getAuthenticatedHttpClient: _propTypes["default"].func.isRequired,
  getHttpClient: _propTypes["default"].func.isRequired,
  getLoginRedirectUrl: _propTypes["default"].func.isRequired,
  redirectToLogin: _propTypes["default"].func.isRequired,
  getLogoutRedirectUrl: _propTypes["default"].func.isRequired,
  redirectToLogout: _propTypes["default"].func.isRequired,
  getAuthenticatedUser: _propTypes["default"].func.isRequired,
  setAuthenticatedUser: _propTypes["default"].func.isRequired,
  fetchAuthenticatedUser: _propTypes["default"].func.isRequired,
  ensureAuthenticatedUser: _propTypes["default"].func.isRequired,
  hydrateAuthenticatedUser: _propTypes["default"].func.isRequired
};
var service;

/**
 *
 * @param {class} AuthService
 * @param {*} options
 * @returns {AuthService}
 */
function configure(AuthService, options) {
  _propTypes["default"].checkPropTypes(optionsShape, options, 'property', 'Auth');
  service = new AuthService(options);
  _propTypes["default"].checkPropTypes(serviceShape, service, 'property', 'AuthService');
  return service;
}

/**
 *
 *
 * @returns {AuthService}
 */
function getAuthService() {
  if (!service) {
    throw Error('You must first configure the auth service.');
  }
  return service;
}

/**
 *
 */
function resetAuthService() {
  service = null;
}

/**
 * Gets the authenticated HTTP client for the service.
 *
 * @param {Object} [options] Optional options for how to configure the authenticated HTTP client
 * @param {boolean} [options.useCache] Whether to use front end caching for all requests made with the returned client
 *
 * @returns {HttpClient}
 */
function getAuthenticatedHttpClient() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return service.getAuthenticatedHttpClient(options);
}

/**
 * Gets the unauthenticated HTTP client for the service.
 *
 * @param {Object} [options] Optional options for how to configure the authenticated HTTP client
 * @param {boolean} [options.useCache] Whether to use front end caching for all requests made with the returned client
 *
 * @returns {HttpClient}
 */
function getHttpClient() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return service.getHttpClient(options);
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
function getLoginRedirectUrl(redirectUrl) {
  return service.getLoginRedirectUrl(redirectUrl);
}

/**
 * Redirects the user to the login page.
 *
 * @param {string} redirectUrl The URL the user should be redirected to after logging in.
 */
function redirectToLogin(redirectUrl) {
  return service.redirectToLogin(redirectUrl);
}

/**
 * Builds a URL to the logout page with a post-logout redirect URL attached as a query parameter.
 *
 * ```
 * const url = getLogoutRedirectUrl('http://localhost/mypage');
 * console.log(url); // http://localhost/logout?redirect_url=http%3A%2F%2Flocalhost%2Fmypage
 * ```
 *
 * @param {string} redirectUrl The URL the user should be redirected to after logging out.
 */
function getLogoutRedirectUrl(redirectUrl) {
  return service.getLogoutRedirectUrl(redirectUrl);
}

/**
 * Redirects the user to the logout page.
 *
 * @param {string} redirectUrl The URL the user should be redirected to after logging out.
 */
function redirectToLogout(redirectUrl) {
  return service.redirectToLogout(redirectUrl);
}

/**
 * If it exists, returns the user data representing the currently authenticated user. If the
 * user is anonymous, returns null.
 *
 * @returns {UserData|null}
 */
function getAuthenticatedUser() {
  return service.getAuthenticatedUser();
}

/**
 * Sets the authenticated user to the provided value.
 *
 * @param {UserData} authUser
 * @emits AUTHENTICATED_USER_CHANGED
 */
function setAuthenticatedUser(authUser) {
  service.setAuthenticatedUser(authUser);
  (0, _pubSub.publish)(AUTHENTICATED_USER_CHANGED);
}

/**
 * Reads the authenticated user's access token. Resolves to null if the user is
 * unauthenticated.
 *
 * @returns {Promise<UserData>|Promise<null>} Resolves to the user's access token if they are
 * logged in.
 */
function fetchAuthenticatedUser() {
  return _fetchAuthenticatedUser.apply(this, arguments);
}
/**
 * Ensures a user is authenticated. It will redirect to login when not
 * authenticated.
 *
 * @param {string} [redirectUrl=config.BASE_URL] to return user after login when not
 * authenticated.
 * @returns {Promise<UserData>}
 */
function _fetchAuthenticatedUser() {
  _fetchAuthenticatedUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var options,
      _args = arguments;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.n) {
        case 0:
          options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
          return _context.a(2, service.fetchAuthenticatedUser(options));
      }
    }, _callee);
  }));
  return _fetchAuthenticatedUser.apply(this, arguments);
}
function ensureAuthenticatedUser(_x) {
  return _ensureAuthenticatedUser.apply(this, arguments);
}
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
 * @emits AUTHENTICATED_USER_CHANGED
 */
function _ensureAuthenticatedUser() {
  _ensureAuthenticatedUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(redirectUrl) {
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          return _context2.a(2, service.ensureAuthenticatedUser(redirectUrl));
      }
    }, _callee2);
  }));
  return _ensureAuthenticatedUser.apply(this, arguments);
}
function hydrateAuthenticatedUser() {
  return _hydrateAuthenticatedUser.apply(this, arguments);
}
/**
 * @name AuthService
 * @interface
 * @memberof module:Auth
 * @property {function} getAuthenticatedHttpClient
 * @property {function} getHttpClient
 * @property {function} getLoginRedirectUrl
 * @property {function} redirectToLogin
 * @property {function} getLogoutRedirectUrl
 * @property {function} redirectToLogout
 * @property {function} getAuthenticatedUser
 * @property {function} setAuthenticatedUser
 * @property {function} fetchAuthenticatedUser
 * @property {function} ensureAuthenticatedUser
 * @property {function} hydrateAuthenticatedUser
 */
/**
 * A configured axios client. See axios docs for more
 * info https://github.com/axios/axios. All the functions
 * below accept isPublic and isCsrfExempt in the request
 * config options. Setting these to true will prevent this
 * client from attempting to refresh the jwt access token
 * or a csrf token respectively.
 *
 * ```
 *  // A public endpoint (no jwt token refresh)
 *  apiClient.get('/path/to/endpoint', { isPublic: true });
 * ```
 *
 * ```
 *  // A csrf exempt endpoint
 *  apiClient.post('/path/to/endpoint', { data }, { isCsrfExempt: true });
 * ```
 *
 * @name HttpClient
 * @interface
 * @memberof module:Auth
 * @property {function} get
 * @property {function} head
 * @property {function} options
 * @property {function} delete (csrf protected)
 * @property {function} post (csrf protected)
 * @property {function} put (csrf protected)
 * @property {function} patch (csrf protected)
 */
/**
 * @name UserData
 * @interface
 * @memberof module:Auth
 * @property {string} userId
 * @property {string} username
 * @property {Array} roles
 * @property {boolean} administrator
 */
function _hydrateAuthenticatedUser() {
  _hydrateAuthenticatedUser = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          _context3.n = 1;
          return service.hydrateAuthenticatedUser();
        case 1:
          (0, _pubSub.publish)(AUTHENTICATED_USER_CHANGED);
        case 2:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return _hydrateAuthenticatedUser.apply(this, arguments);
}
//# sourceMappingURL=interface.js.map