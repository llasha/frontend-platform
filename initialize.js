"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.analytics = analytics;
exports.auth = auth;
exports.history = exports.basename = void 0;
exports.initError = initError;
exports.initialize = initialize;
exports.loadExternalScripts = loadExternalScripts;
var _history = require("history");
var _env = _interopRequireDefault(require("env.config"));
var _utils = require("./utils");
var _pubSub = require("./pubSub");
var _config = require("./config");
var _logging = require("./logging");
var _analytics2 = require("./analytics");
var _scripts = require("./scripts");
var _auth2 = require("./auth");
var _i18n = require("./i18n");
var _constants = require("./constants");
var _LocalForageCache = _interopRequireDefault(require("./auth/LocalForageCache"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; } /**
 * #### Import members from **@edx/frontend-platform**
 *
 * The initialization module provides a function for managing an application's initialization
 * lifecycle.  It also provides constants and default handler implementations.
 *
 * ```
 * import {
 *   initialize,
 *   APP_INIT_ERROR,
 *   APP_READY,
 *   subscribe,
 * } from '@edx/frontend-platform';
 * import { AppProvider, ErrorPage, PageWrap } from '@edx/frontend-platform/react';
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 * import { Routes, Route } from 'react-router-dom';
 *
 * subscribe(APP_READY, () => {
 *   ReactDOM.render(
 *     <AppProvider store={configureStore()}>
 *       <Header />
 *       <main>
 *         <Routes>
 *           <Route path="/" element={<PageWrap><PaymentPage /></PageWrap>} />
 *         </Routes>
 *       </main>
 *       <Footer />
 *     </AppProvider>,
 *     document.getElementById('root'),
 *   );
 * });
 *
 * subscribe(APP_INIT_ERROR, (error) => {
 *   ReactDOM.render(<ErrorPage message={error.message} />, document.getElementById('root'));
 * });
 *
 * initialize({
 *   messages: [appMessages],
 *   requireAuthenticatedUser: true,
 *   hydrateAuthenticatedUser: true,
 * });

```
 * @module Initialization
 */ /*
This 'env.config' package is a special 'magic' alias in our webpack configuration in frontend-build.
It points at an `env.config.js` file in the root of an MFE's repository if it exists and falls back
to an empty object `{}` if the file doesn't exist.  This acts like an 'optional' import, in a sense.
Note that the env.config.js file in frontend-platform's root directory is NOT used by the actual
initialization code, it's just there for the test suite and example application.
*/ // eslint-disable-line import/no-unresolved
// eslint-disable-next-line import/no-cycle
/**
 * A browser history or memory history object created by the [history](https://github.com/ReactTraining/history)
 * package.  Applications are encouraged to use this history object, rather than creating their own,
 * as behavior may be undefined when managing history via multiple mechanisms/instances. Note that
 * in environments where browser history may be inaccessible due to `window` being undefined, this
 * falls back to memory history.
 */
var history = exports.history = typeof window !== 'undefined' ? (0, _history.createBrowserHistory)({
  basename: (0, _utils.getPath)((0, _config.getConfig)().PUBLIC_PATH)
}) : (0, _history.createMemoryHistory)();

/**
 * The string basename that is the root directory of this MFE.
 *
 * In devstack, this should always just return "/", because each MFE is in its own server/domain.
 *
 * In Tutor, all MFEs are deployed to a common server, each under a different top-level directory.
 * The basename is the root path for a given MFE, e.g. "/library-authoring". It is set by tutor-mfe
 * as an ENV variable in the Docker file, and we read it here from that configuration so that it
 * can be passed into a Router later.
 */
var basename = exports.basename = (0, _utils.getPath)((0, _config.getConfig)().PUBLIC_PATH);

/**
 * The default handler for the initialization lifecycle's `initError` phase.  Logs the error to the
 * LoggingService using `logError`
 *
 * @see {@link module:frontend-platform/logging~logError}
 * @param {*} error
 */
function initError(_x) {
  return _initError.apply(this, arguments);
}
/**
 * The default handler for the initialization lifecycle's `auth` phase.
 *
 * The handler has several responsibilities:
 * - Determining the user's authentication state (authenticated or anonymous)
 * - Optionally redirecting to login if the application requires an authenticated user.
 * - Optionally loading additional user information via the application's user account data
 * endpoint.
 *
 * @param {boolean} requireUser Whether or not we should redirect to login if a user is not
 * authenticated.
 * @param {boolean} hydrateUser Whether or not we should fetch additional user account data.
 */
function _initError() {
  _initError = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(error) {
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          (0, _logging.logError)(error);
        case 1:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return _initError.apply(this, arguments);
}
function auth(_x2, _x3) {
  return _auth.apply(this, arguments);
}
/**
 * Set or overrides configuration via an env.config.js file in the consuming application.
 * This env.config.js is loaded at runtime and must export one of two things:
 *
 * - An object which will be merged into the application config via `mergeConfig`.
 * - A function which returns an object which will be merged into the application config via
 * `mergeConfig`.  This function can return a promise.
 */
function _auth() {
  _auth = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(requireUser, hydrateUser) {
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.n) {
        case 0:
          if (!requireUser) {
            _context3.n = 2;
            break;
          }
          _context3.n = 1;
          return (0, _auth2.ensureAuthenticatedUser)(globalThis.location.href);
        case 1:
          _context3.n = 3;
          break;
        case 2:
          _context3.n = 3;
          return (0, _auth2.fetchAuthenticatedUser)();
        case 3:
          if (hydrateUser && (0, _auth2.getAuthenticatedUser)() !== null) {
            // We intentionally do not await the promise returned by hydrateAuthenticatedUser. All the
            // critical data is returned as part of fetch/ensureAuthenticatedUser above, and anything else
            // is a nice-to-have for application code.
            (0, _auth2.hydrateAuthenticatedUser)();
          }
        case 4:
          return _context3.a(2);
      }
    }, _callee3);
  }));
  return _auth.apply(this, arguments);
}
function jsFileConfig() {
  return _jsFileConfig.apply(this, arguments);
}
/*
 * Set or overrides configuration through an API.
 * This method allows runtime configuration.
 * Set a basic configuration when an error happen and allow initError and display the ErrorPage.
 */
function _jsFileConfig() {
  _jsFileConfig = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4() {
    var config;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          config = {};
          if (!(typeof _env["default"] === 'function')) {
            _context4.n = 2;
            break;
          }
          _context4.n = 1;
          return (0, _env["default"])();
        case 1:
          config = _context4.v;
          _context4.n = 3;
          break;
        case 2:
          config = _env["default"];
        case 3:
          (0, _config.mergeConfig)(config);
        case 4:
          return _context4.a(2);
      }
    }, _callee4);
  }));
  return _jsFileConfig.apply(this, arguments);
}
function runtimeConfig() {
  return _runtimeConfig.apply(this, arguments);
}
function _runtimeConfig() {
  _runtimeConfig = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5() {
    var _getConfig, MFE_CONFIG_API_URL, APP_ID, apiConfig, apiService, params, url, _yield$apiService$get, data, _t;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.p = _context5.n) {
        case 0:
          _context5.p = 0;
          _getConfig = (0, _config.getConfig)(), MFE_CONFIG_API_URL = _getConfig.MFE_CONFIG_API_URL, APP_ID = _getConfig.APP_ID;
          if (!MFE_CONFIG_API_URL) {
            _context5.n = 3;
            break;
          }
          apiConfig = {
            headers: {
              accept: 'application/json'
            }
          };
          _context5.n = 1;
          return (0, _LocalForageCache["default"])();
        case 1:
          apiService = _context5.v;
          params = new URLSearchParams();
          params.append('mfe', APP_ID);
          url = "".concat(MFE_CONFIG_API_URL, "?").concat(params.toString());
          _context5.n = 2;
          return apiService.get(url, apiConfig);
        case 2:
          _yield$apiService$get = _context5.v;
          data = _yield$apiService$get.data;
          (0, _config.mergeConfig)(data);
        case 3:
          _context5.n = 5;
          break;
        case 4:
          _context5.p = 4;
          _t = _context5.v;
          // eslint-disable-next-line no-console
          console.error('Error with config API', _t.message);
        case 5:
          return _context5.a(2);
      }
    }, _callee5, null, [[0, 4]]);
  }));
  return _runtimeConfig.apply(this, arguments);
}
function loadExternalScripts(externalScripts, data) {
  externalScripts.forEach(function (ExternalScript) {
    var script = new ExternalScript(data);
    script.loadScript();
  });
}

/**
 * The default handler for the initialization lifecycle's `analytics` phase.
 *
 * The handler is responsible for identifying authenticated and anonymous users with the analytics
 * service.  This is a pre-requisite for sending analytics events, thus, we do it during the
 * initialization sequence so that analytics is ready once the application's UI code starts to load.
 *
 */
function analytics() {
  return _analytics.apply(this, arguments);
}
function _analytics() {
  _analytics = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6() {
    var authenticatedUser;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.n) {
        case 0:
          authenticatedUser = (0, _auth2.getAuthenticatedUser)();
          if (!(authenticatedUser && authenticatedUser.userId)) {
            _context6.n = 1;
            break;
          }
          (0, _analytics2.identifyAuthenticatedUser)(authenticatedUser.userId);
          _context6.n = 2;
          break;
        case 1:
          _context6.n = 2;
          return (0, _analytics2.identifyAnonymousUser)();
        case 2:
          return _context6.a(2);
      }
    }, _callee6);
  }));
  return _analytics.apply(this, arguments);
}
function applyOverrideHandlers(overrides) {
  var noOp = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function noOp() {
      return _ref.apply(this, arguments);
    };
  }();
  return _objectSpread({
    pubSub: noOp,
    config: noOp,
    logging: noOp,
    auth: auth,
    analytics: analytics,
    i18n: noOp,
    ready: noOp,
    initError: initError
  }, overrides);
}

/**
 * Invokes the application initialization sequence.
 *
 * The sequence proceeds through a number of lifecycle phases, during which pertinent services are
 * configured.
 *
 * Using the `handlers` option, lifecycle phase handlers can be overridden to perform custom
 * functionality.  Note that while these override handlers _do_ replace the default handler
 * functionality for analytics, auth, and initError (the other phases have no default
 * functionality), they do _not_ override the configuration of the actual services that those
 * handlers leverage.
 *
 * Some services can be overridden via the loggingService and analyticsService options.  The other
 * services (auth and i18n) cannot currently be overridden.
 *
 * The following lifecycle phases exist:
 *
 * - pubSub: A no-op by default.
 * - config: A no-op by default.
 * - logging: A no-op by default.
 * - auth: Uses the 'auth' handler defined above.
 * - analytics: Uses the 'analytics' handler defined above.
 * - i18n: A no-op by default.
 * - ready: A no-op by default.
 * - initError: Uses the 'initError' handler defined above.
 *
 * @param {Object} [options]
 * @param {*} [options.loggingService=NewRelicLoggingService] The `LoggingService` implementation
 * to use.
 * @param {*} [options.analyticsService=SegmentAnalyticsService] The `AnalyticsService`
 * implementation to use.
 * @param {*} [options.authMiddleware=[]] An array of middleware to apply to http clients in the auth service.
 * @param {*} [options.externalScripts=[GoogleAnalyticsLoader]] An array of externalScripts.
 * By default added GoogleAnalyticsLoader.
 * @param {*} [options.requireAuthenticatedUser=false] If true, turns on automatic login
 * redirection for unauthenticated users.  Defaults to false, meaning that by default the
 * application will allow anonymous/unauthenticated sessions.
 * @param {*} [options.hydrateAuthenticatedUser=false] If true, makes an API call to the user
 * account endpoint (`${App.config.LMS_BASE_URL}/api/user/v1/accounts/${username}`) to fetch
 * detailed account information for the authenticated user. This data is merged into the return
 * value of `getAuthenticatedUser`, overriding any duplicate keys that already exist. Defaults to
 * false, meaning that no additional account information will be loaded.
 * @param {*} [options.messages] A i18n-compatible messages object, or an array of such objects. If
 * an array is provided, duplicate keys are resolved with the last-one-in winning.
 * @param {*} [options.handlers={}] An optional object of handlers which can be used to replace the
 * default behavior of any part of the startup sequence. It can also be used to add additional
 * initialization behavior before or after the rest of the sequence.
 */
function initialize(_x4) {
  return _initialize.apply(this, arguments);
}
function _initialize() {
  _initialize = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee7(_ref2) {
    var _ref2$loggingService, loggingService, _ref2$analyticsServic, analyticsService, _ref2$authService, authService, _ref2$authMiddleware, authMiddleware, _ref2$externalScripts, externalScripts, _ref2$requireAuthenti, requireUser, _ref2$hydrateAuthenti, hydrateUser, messages, _ref2$handlers, overrideHandlers, handlers, loggingServiceImpl, analyticsServiceImpl, authServiceImpl, _t2;
    return _regenerator().w(function (_context7) {
      while (1) switch (_context7.p = _context7.n) {
        case 0:
          _ref2$loggingService = _ref2.loggingService, loggingService = _ref2$loggingService === void 0 ? _logging.NewRelicLoggingService : _ref2$loggingService, _ref2$analyticsServic = _ref2.analyticsService, analyticsService = _ref2$analyticsServic === void 0 ? _analytics2.SegmentAnalyticsService : _ref2$analyticsServic, _ref2$authService = _ref2.authService, authService = _ref2$authService === void 0 ? _auth2.AxiosJwtAuthService : _ref2$authService, _ref2$authMiddleware = _ref2.authMiddleware, authMiddleware = _ref2$authMiddleware === void 0 ? [] : _ref2$authMiddleware, _ref2$externalScripts = _ref2.externalScripts, externalScripts = _ref2$externalScripts === void 0 ? [_scripts.GoogleAnalyticsLoader] : _ref2$externalScripts, _ref2$requireAuthenti = _ref2.requireAuthenticatedUser, requireUser = _ref2$requireAuthenti === void 0 ? false : _ref2$requireAuthenti, _ref2$hydrateAuthenti = _ref2.hydrateAuthenticatedUser, hydrateUser = _ref2$hydrateAuthenti === void 0 ? false : _ref2$hydrateAuthenti, messages = _ref2.messages, _ref2$handlers = _ref2.handlers, overrideHandlers = _ref2$handlers === void 0 ? {} : _ref2$handlers;
          handlers = applyOverrideHandlers(overrideHandlers);
          _context7.p = 1;
          _context7.n = 2;
          return handlers.pubSub();
        case 2:
          (0, _pubSub.publish)(_constants.APP_PUBSUB_INITIALIZED);

          // Configuration
          _context7.n = 3;
          return handlers.config();
        case 3:
          _context7.n = 4;
          return jsFileConfig();
        case 4:
          _context7.n = 5;
          return runtimeConfig();
        case 5:
          (0, _pubSub.publish)(_constants.APP_CONFIG_INITIALIZED);
          loadExternalScripts(externalScripts, {
            config: (0, _config.getConfig)()
          });

          // This allows us to replace the implementations of the logging, analytics, and auth services
          // based on keys in the ConfigDocument.  The JavaScript File Configuration method is the only
          // one capable of supplying an alternate implementation since it can import other modules.
          // If a service wasn't supplied we fall back to the default parameters on the initialize
          // function signature.
          loggingServiceImpl = (0, _config.getConfig)().loggingService || loggingService;
          analyticsServiceImpl = (0, _config.getConfig)().analyticsService || analyticsService;
          authServiceImpl = (0, _config.getConfig)().authService || authService; // Logging
          (0, _logging.configure)(loggingServiceImpl, {
            config: (0, _config.getConfig)()
          });
          _context7.n = 6;
          return handlers.logging();
        case 6:
          (0, _pubSub.publish)(_constants.APP_LOGGING_INITIALIZED);

          // Internationalization
          (0, _i18n.configure)({
            messages: messages,
            config: (0, _config.getConfig)(),
            loggingService: (0, _logging.getLoggingService)()
          });
          _context7.n = 7;
          return handlers.i18n();
        case 7:
          (0, _pubSub.publish)(_constants.APP_I18N_INITIALIZED);

          // Authentication
          (0, _auth2.configure)(authServiceImpl, {
            loggingService: (0, _logging.getLoggingService)(),
            config: (0, _config.getConfig)(),
            middleware: authMiddleware
          });
          _context7.n = 8;
          return handlers.auth(requireUser, hydrateUser);
        case 8:
          (0, _pubSub.publish)(_constants.APP_AUTH_INITIALIZED);

          // Analytics
          (0, _analytics2.configure)(analyticsServiceImpl, {
            config: (0, _config.getConfig)(),
            loggingService: (0, _logging.getLoggingService)(),
            httpClient: (0, _auth2.getAuthenticatedHttpClient)()
          });
          _context7.n = 9;
          return handlers.analytics();
        case 9:
          (0, _pubSub.publish)(_constants.APP_ANALYTICS_INITIALIZED);

          // Application Ready
          _context7.n = 10;
          return handlers.ready();
        case 10:
          (0, _pubSub.publish)(_constants.APP_READY);
          _context7.n = 13;
          break;
        case 11:
          _context7.p = 11;
          _t2 = _context7.v;
          if (_t2.isRedirecting) {
            _context7.n = 13;
            break;
          }
          _context7.n = 12;
          return handlers.initError(_t2);
        case 12:
          (0, _pubSub.publish)(_constants.APP_INIT_ERROR, _t2);
        case 13:
          return _context7.a(2);
      }
    }, _callee7, null, [[1, 11]]);
  }));
  return _initialize.apply(this, arguments);
}
//# sourceMappingURL=initialize.js.map