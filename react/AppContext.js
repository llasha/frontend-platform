"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * `AppContext` provides data from `App` in a way that React components can readily consume, even
 * if it's mutable data. `AppContext` contains the following data structure:
 *
 * ```
 * {
 *   authenticatedUser: <THE App.authenticatedUser OBJECT>,
 *   config: <THE App.config OBJECT>
 * }
 * ```
 * If the `App.authenticatedUser` or `App.config` data changes, `AppContext` will be updated
 * accordingly and pass those changes onto React components using the context.
 *
 * `AppContext` is used in a React application like any other `[React Context](https://reactjs.org/docs/context.html)
 * @memberof module:React
 */
var AppContext = /*#__PURE__*/_react["default"].createContext({
  authenticatedUser: null,
  config: {}
});
var _default = exports["default"] = AppContext;
//# sourceMappingURL=AppContext.js.map