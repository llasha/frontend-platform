"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = OptionalReduxProvider;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRedux = require("react-redux");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * @memberof module:React
 * @param {Object} props
 */function OptionalReduxProvider(_ref) {
  var _ref$store = _ref.store,
    store = _ref$store === void 0 ? null : _ref$store,
    children = _ref.children;
  if (store === null) {
    return children;
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRedux.Provider, {
    store: store,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      "data-testid": "redux-provider",
      children: children
    })
  });
}
OptionalReduxProvider.propTypes = {
  store: _propTypes["default"].shape(),
  children: _propTypes["default"].node.isRequired
};
//# sourceMappingURL=OptionalReduxProvider.js.map