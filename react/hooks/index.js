"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  useAppEvent: true
};
Object.defineProperty(exports, "useAppEvent", {
  enumerable: true,
  get: function get() {
    return _useAppEvent["default"];
  }
});
var _useAppEvent = _interopRequireDefault(require("./useAppEvent"));
var _paragon = require("./paragon");
Object.keys(_paragon).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _paragon[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _paragon[key];
    }
  });
});
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//# sourceMappingURL=index.js.map