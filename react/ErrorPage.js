"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _paragon = require("@openedx/paragon");
var _hooks = require("./hooks");
var _i18n = require("../i18n");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /**
 * An error page that displays a generic message for unexpected errors.  Also contains a "Try
 * Again" button to refresh the page.
 *
 * @memberof module:React
 * @extends {Component}
 */
function ErrorPage(_ref) {
  var message = _ref.message;
  var _useState = (0, _react.useState)((0, _i18n.getLocale)()),
    _useState2 = _slicedToArray(_useState, 2),
    locale = _useState2[0],
    setLocale = _useState2[1];
  (0, _hooks.useAppEvent)(_i18n.LOCALE_CHANGED, function () {
    setLocale((0, _i18n.getLocale)());
  });

  /* istanbul ignore next */
  var reload = function reload() {
    global.location.reload();
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.IntlProvider, {
    locale: locale,
    messages: (0, _i18n.getMessages)(),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Container, {
      fluid: true,
      className: "py-5 justify-content-center align-items-start text-center",
      "data-testid": "error-page",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Row, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_paragon.Col, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-muted",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
              id: "unexpected.error.message.text",
              defaultMessage: "An unexpected error occurred. Please click the button below to refresh the page.",
              description: "error message when an unexpected error occurs"
            })
          }), message && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
            role: "alert",
            className: "my-4",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
              children: message
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_paragon.Button, {
            onClick: reload,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.FormattedMessage, {
              id: "unexpected.error.button.text",
              defaultMessage: "Try again",
              description: "text for button that tries to reload the app by refreshing the page"
            })
          })]
        })
      })
    })
  });
}
ErrorPage.propTypes = {
  message: _propTypes["default"].string
};
ErrorPage.defaultProps = {
  message: null
};
var _default = exports["default"] = ErrorPage;
//# sourceMappingURL=ErrorPage.js.map