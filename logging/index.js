"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MockLoggingService", {
  enumerable: true,
  get: function get() {
    return _MockLoggingService["default"];
  }
});
Object.defineProperty(exports, "NewRelicLoggingService", {
  enumerable: true,
  get: function get() {
    return _NewRelicLoggingService["default"];
  }
});
Object.defineProperty(exports, "configure", {
  enumerable: true,
  get: function get() {
    return _interface.configure;
  }
});
Object.defineProperty(exports, "getLoggingService", {
  enumerable: true,
  get: function get() {
    return _interface.getLoggingService;
  }
});
Object.defineProperty(exports, "logError", {
  enumerable: true,
  get: function get() {
    return _interface.logError;
  }
});
Object.defineProperty(exports, "logInfo", {
  enumerable: true,
  get: function get() {
    return _interface.logInfo;
  }
});
Object.defineProperty(exports, "resetLoggingService", {
  enumerable: true,
  get: function get() {
    return _interface.resetLoggingService;
  }
});
var _interface = require("./interface");
var _NewRelicLoggingService = _interopRequireDefault(require("./NewRelicLoggingService"));
var _MockLoggingService = _interopRequireDefault(require("./MockLoggingService"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//# sourceMappingURL=index.js.map