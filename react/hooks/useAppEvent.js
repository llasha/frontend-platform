"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _pubSub = require("../../pubSub");
/**
 * A React hook that allows functional components to subscribe to application events.  This should
 * be used sparingly - for the most part, Context should be used higher-up in the application to
 * provide necessary data to a given component, rather than utilizing a non-React-like Pub/Sub
 * mechanism.
 *
 * @memberof module:React
 *
 * @param {string} type
 * @param {function} callback
 */
var useAppEvent = function useAppEvent(type, callback) {
  (0, _react.useEffect)(function () {
    var subscriptionToken = (0, _pubSub.subscribe)(type, callback);
    return function () {
      return (0, _pubSub.unsubscribe)(subscriptionToken);
    };
  }, [callback, type]);
};
var _default = exports["default"] = useAppEvent;
//# sourceMappingURL=useAppEvent.js.map