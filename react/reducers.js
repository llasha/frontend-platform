"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.paragonThemeActions = void 0;
exports.paragonThemeReducer = paragonThemeReducer;
var _constants = require("./constants");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function paragonThemeReducer(state, action) {
  switch (action.type) {
    case _constants.SET_THEME_VARIANT:
      {
        var requestedThemeVariant = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          themeVariant: requestedThemeVariant
        });
      }
    case _constants.SET_IS_THEME_LOADED:
      {
        var requestedIsThemeLoaded = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          isThemeLoaded: requestedIsThemeLoaded
        });
      }
    default:
      return state;
  }
}
var setParagonThemeVariant = function setParagonThemeVariant(payload) {
  return {
    type: _constants.SET_THEME_VARIANT,
    payload: payload
  };
};
var setParagonThemeLoaded = function setParagonThemeLoaded(payload) {
  return {
    type: _constants.SET_IS_THEME_LOADED,
    payload: payload
  };
};
var paragonThemeActions = exports.paragonThemeActions = {
  setParagonThemeVariant: setParagonThemeVariant,
  setParagonThemeLoaded: setParagonThemeLoaded
};
//# sourceMappingURL=reducers.js.map