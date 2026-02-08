"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.publish = publish;
exports.subscribe = subscribe;
exports.unsubscribe = unsubscribe;
var _pubsubJs = _interopRequireDefault(require("pubsub-js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * #### Import members from **@edx/frontend-platform**
 *
 * The PubSub module is a thin wrapper around the base functionality of
 * [PubSubJS](https://github.com/mroderick/PubSubJS).  For the sake of simplicity and not relying
 * too heavily on implementation-specific features, it maintains a fairly simple API (subscribe,
 * unsubscribe, and publish).
 *
 * Publish/Subscribe events should be used mindfully, especially in relation to application UI
 * frameworks like React.  Given React's unidirectional data flow and prop/state management
 * capabilities, using a pub/sub mechanism is at odds with that framework's best practices.
 *
 * That said, we use pub/sub in our application initialization sequence to allow applications to
 * hook into the initialization lifecycle, and we also use them to publish when the application
 * state has changed, i.e., when the config document or user's authentication state have changed.
 *
 * @module PubSub
 */

/**
 *
 * @param {string} type
 * @param {function} callback
 * @returns {string} A subscription token that can be passed to `unsubscribe`
 */
function subscribe(type, callback) {
  return _pubsubJs["default"].subscribe(type, callback);
}

/**
 *
 * @param {string} token A subscription token provided by `subscribe`
 */
function unsubscribe(token) {
  return _pubsubJs["default"].unsubscribe(token);
}

/**
 *
 * @param {string} type
 * @param {Object} data
 */
function publish(type, data) {
  return _pubsubJs["default"].publish(type, data);
}
//# sourceMappingURL=pubSub.js.map