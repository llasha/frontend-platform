"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AuthenticatedPageRoute;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _AppContext = _interopRequireDefault(require("./AppContext"));
var _PageWrap = _interopRequireDefault(require("./PageWrap"));
var _auth = require("../auth");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
/**
 * A react-router route that redirects to the login page when the route becomes active and the user
 * is not authenticated.  If the application has been initialized with `requireAuthenticatedUser`
 * false, an authenticatedPageRoute can be used to protect a subset of the application's routes,
 * rather than the entire application.
 *
 * It can optionally accept an override URL to redirect to instead of the login page.
 *
 * Like a `PageWrap`, also calls `sendPageEvent` when the route becomes active.
 *
 * @see PageWrap
 * @see {@link module:frontend-platform/analytics~sendPageEvent}
 * @memberof module:React
 * @param {Object} props
 * @param {string} [props.redirectUrl] The URL anonymous users should be redirected to, rather than
 * viewing the route's contents.
 */function AuthenticatedPageRoute(_ref) {
  var _ref$redirectUrl = _ref.redirectUrl,
    redirectUrl = _ref$redirectUrl === void 0 ? null : _ref$redirectUrl,
    children = _ref.children;
  var _useContext = (0, _react.useContext)(_AppContext["default"]),
    authenticatedUser = _useContext.authenticatedUser;
  if (authenticatedUser === null) {
    var destination = redirectUrl || (0, _auth.getLoginRedirectUrl)(global.location.href);
    global.location.assign(destination);
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_PageWrap["default"], {
    children: children
  });
}
AuthenticatedPageRoute.propTypes = {
  redirectUrl: _propTypes["default"].string,
  children: _propTypes["default"].node.isRequired
};
//# sourceMappingURL=AuthenticatedPageRoute.js.map