"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "MockAnalyticsService", {
  enumerable: true,
  get: function get() {
    return _MockAnalyticsService["default"];
  }
});
Object.defineProperty(exports, "SegmentAnalyticsService", {
  enumerable: true,
  get: function get() {
    return _SegmentAnalyticsService["default"];
  }
});
Object.defineProperty(exports, "configure", {
  enumerable: true,
  get: function get() {
    return _interface.configure;
  }
});
Object.defineProperty(exports, "getAnalyticsService", {
  enumerable: true,
  get: function get() {
    return _interface.getAnalyticsService;
  }
});
Object.defineProperty(exports, "identifyAnonymousUser", {
  enumerable: true,
  get: function get() {
    return _interface.identifyAnonymousUser;
  }
});
Object.defineProperty(exports, "identifyAuthenticatedUser", {
  enumerable: true,
  get: function get() {
    return _interface.identifyAuthenticatedUser;
  }
});
Object.defineProperty(exports, "resetAnalyticsService", {
  enumerable: true,
  get: function get() {
    return _interface.resetAnalyticsService;
  }
});
Object.defineProperty(exports, "sendPageEvent", {
  enumerable: true,
  get: function get() {
    return _interface.sendPageEvent;
  }
});
Object.defineProperty(exports, "sendTrackEvent", {
  enumerable: true,
  get: function get() {
    return _interface.sendTrackEvent;
  }
});
Object.defineProperty(exports, "sendTrackingLogEvent", {
  enumerable: true,
  get: function get() {
    return _interface.sendTrackingLogEvent;
  }
});
var _interface = require("./interface");
var _SegmentAnalyticsService = _interopRequireDefault(require("./SegmentAnalyticsService"));
var _MockAnalyticsService = _interopRequireDefault(require("./MockAnalyticsService"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
//# sourceMappingURL=index.js.map