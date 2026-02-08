"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = AppProvider;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _OptionalReduxProvider = _interopRequireDefault(require("./OptionalReduxProvider"));
var _ErrorBoundary = _interopRequireDefault(require("./ErrorBoundary"));
var _AppContext = _interopRequireDefault(require("./AppContext"));
var _hooks = require("./hooks");
var _reducers = require("./reducers");
var _auth = require("../auth");
var _config = require("../config");
var _constants = require("../constants");
var _i18n = require("../i18n");
var _initialize = require("../initialize");
var _constants2 = require("./constants");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /**
 * A wrapper component for React-based micro-frontends to initialize a number of common data/
 * context providers.
 *
 * ```
 * subscribe(APP_READY, () => {
 *   ReactDOM.render(
 *     <AppProvider>
 *       <HelloWorld />
 *     </AppProvider>
 *   )
 * });
 * ```
 *
 * This will provide the following to HelloWorld:
 * - An error boundary as described above.
 * - An `AppContext` provider for React context data.
 * - IntlProvider for @edx/frontend-i18n internationalization
 * - Optionally a redux `Provider`. Will only be included if a `store` property is passed to
 * `AppProvider`.
 * - A `Router` for react-router.
 * - A theme manager for Paragon.
 *
 * @param {Object} props
 * @param {Object} [props.store] A redux store.
 * @memberof module:React
 */
function AppProvider(_ref) {
  var _ref$store = _ref.store,
    store = _ref$store === void 0 ? null : _ref$store,
    children = _ref.children,
    _ref$wrapWithRouter = _ref.wrapWithRouter,
    wrapWithRouter = _ref$wrapWithRouter === void 0 ? true : _ref$wrapWithRouter;
  var _useState = (0, _react.useState)((0, _config.getConfig)()),
    _useState2 = _slicedToArray(_useState, 2),
    config = _useState2[0],
    setConfig = _useState2[1];
  var _useState3 = (0, _react.useState)((0, _auth.getAuthenticatedUser)()),
    _useState4 = _slicedToArray(_useState3, 2),
    authenticatedUser = _useState4[0],
    setAuthenticatedUser = _useState4[1];
  var _useState5 = (0, _react.useState)((0, _i18n.getLocale)()),
    _useState6 = _slicedToArray(_useState5, 2),
    locale = _useState6[0],
    setLocale = _useState6[1];
  (0, _hooks.useAppEvent)(_auth.AUTHENTICATED_USER_CHANGED, function () {
    setAuthenticatedUser((0, _auth.getAuthenticatedUser)());
  });
  (0, _hooks.useAppEvent)(_constants.CONFIG_CHANGED, function () {
    setConfig((0, _config.getConfig)());
  });
  (0, _hooks.useAppEvent)(_i18n.LOCALE_CHANGED, function () {
    setLocale((0, _i18n.getLocale)());
  });
  (0, _hooks.useTrackColorSchemeChoice)();
  var _useParagonTheme = (0, _hooks.useParagonTheme)(),
    _useParagonTheme2 = _slicedToArray(_useParagonTheme, 2),
    paragonThemeState = _useParagonTheme2[0],
    paragonThemeDispatch = _useParagonTheme2[1];
  var appContextValue = (0, _react.useMemo)(function () {
    return {
      authenticatedUser: authenticatedUser,
      config: config,
      locale: locale,
      paragonTheme: {
        state: paragonThemeState,
        setThemeVariant: function setThemeVariant(themeVariant) {
          paragonThemeDispatch(_reducers.paragonThemeActions.setParagonThemeVariant(themeVariant));

          // Persist selected theme variant to localStorage.
          window.localStorage.setItem(_constants2.SELECTED_THEME_VARIANT_KEY, themeVariant);
        }
      }
    };
  }, [authenticatedUser, config, locale, paragonThemeState, paragonThemeDispatch]);
  if (!(paragonThemeState !== null && paragonThemeState !== void 0 && paragonThemeState.isThemeLoaded)) {
    return null;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_i18n.IntlProvider, {
    locale: locale,
    messages: (0, _i18n.getMessages)(),
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ErrorBoundary["default"], {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AppContext["default"].Provider, {
        value: appContextValue,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_OptionalReduxProvider["default"], {
          store: store,
          children: wrapWithRouter ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.BrowserRouter, {
            basename: _initialize.basename,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
              "data-testid": "browser-router",
              children: children
            })
          }) : children
        })
      })
    })
  });
}
AppProvider.propTypes = {
  store: _propTypes["default"].shape({}),
  children: _propTypes["default"].node.isRequired,
  wrapWithRouter: _propTypes["default"].bool
};
//# sourceMappingURL=AppProvider.js.map