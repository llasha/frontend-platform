"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = initializeMockApp;
var _analytics = require("../analytics");
var _i18n = require("../i18n");
var _logging = require("../logging");
var _auth = require("../auth");
var _config = require("../config");
var _mockMessages = _interopRequireDefault(require("./mockMessages"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * Initializes a mock application for component testing. The mock application includes
 * mock analytics, auth, and logging services, and the real i18n service.
 *
 * See MockAnalyticsService, MockAuthService, and MockLoggingService for mock implementation
 * details. For the most part, the analytics and logging services just implement their functions
 * with jest.fn() and do nothing else, whereas the MockAuthService actually has some behavior
 * implemented, it just doesn't make any HTTP calls.
 *
 * Note that this mock application is not sufficient for testing the full application lifecycle or
 * initialization callbacks/custom handlers as described in the 'initialize' function's
 * documentation. It exists merely to set up the mock services that components themselves tend to
 * interact with most often. It could be extended to allow for setting up custom handlers fairly
 * easily, as this functionality would be more-or-less identical to what the real initialize
 * function does.
 *
 * Example:
 *
 * ```
 * import { initializeMockApp } from '@edx/frontend-platform/testing';
 * import { logInfo } from '@edx/frontend-platform/logging';
 *
 * describe('initializeMockApp', () => {
 *   it('mocks things correctly', () => {
 *     const { loggingService } = initializeMockApp();
 *     logInfo('test', {});
 *     expect(loggingService.logInfo).toHaveBeenCalledWith('test', {});
 *   });
 * });
 * ```
 *
 * @param {Object} [options]
 * @param {*} [options.messages] A i18n-compatible messages object, or an array of such objects. If
 * an array is provided, duplicate keys are resolved with the last-one-in winning.
 * @param {UserData|null} [options.authenticatedUser] A UserData object representing the
 * authenticated user. This is passed directly to MockAuthService.
 * @memberof module:Testing
 */
function initializeMockApp() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
    _ref$messages = _ref.messages,
    messages = _ref$messages === void 0 ? _mockMessages["default"] : _ref$messages,
    _ref$authenticatedUse = _ref.authenticatedUser,
    authenticatedUser = _ref$authenticatedUse === void 0 ? null : _ref$authenticatedUse;
  var loggingService = (0, _logging.configure)(_logging.MockLoggingService, {
    config: (0, _config.getConfig)()
  });
  var authService = (0, _auth.configure)(_auth.MockAuthService, {
    config: _objectSpread(_objectSpread({}, (0, _config.getConfig)()), {}, {
      authenticatedUser: authenticatedUser
    }),
    loggingService: loggingService
  });
  var analyticsService = (0, _analytics.configure)(_analytics.MockAnalyticsService, {
    config: (0, _config.getConfig)(),
    httpClient: authService.getAuthenticatedHttpClient(),
    loggingService: loggingService
  });

  // The i18n service configure function has no return value, since there isn't a service class.
  (0, _i18n.configure)({
    config: (0, _config.getConfig)(),
    loggingService: loggingService,
    messages: messages
  });
  return {
    analyticsService: analyticsService,
    authService: authService,
    loggingService: loggingService
  };
}
//# sourceMappingURL=initializeMockApp.js.map