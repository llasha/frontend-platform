"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.configure = configure;
exports.getAnalyticsService = getAnalyticsService;
exports.identifyAnonymousUser = identifyAnonymousUser;
exports.identifyAuthenticatedUser = identifyAuthenticatedUser;
exports.resetAnalyticsService = resetAnalyticsService;
exports.sendPageEvent = sendPageEvent;
exports.sendTrackEvent = sendTrackEvent;
exports.sendTrackingLogEvent = sendTrackingLogEvent;
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
/**
 * #### Import members from **@edx/frontend-platform/analytics**
 *
 * Contains a shared interface for tracking events.  Has a default implementation of
 * SegmentAnalyticsService, which supports Segment and the Tracking Log API (hosted in LMS).
 *
 * The `initialize` function performs much of the analytics configuration for you.  If, however,
 * you're not using the `initialize` function, analytics can be configured via:
 *
 * ```
 * import { configure, SegmentAnalyticsService } from '@edx/frontend-platform/analytics';
 * import { getConfig } from '@edx/frontend-platform';
 * import { getAuthenticatedHttpClient } from '@edx/frontend-platform/auth';
 * import { getLoggingService } from '@edx/frontend-platform/logging';
 *
 * configure(SegmentAnalyticsService, {
 *   config: getConfig(),
 *   loggingService: getLoggingService(),
 *   httpClient: getAuthenticatedHttpClient(),
 * });
 * ```
 *
 * As shown in this example, analytics depends on the configuration document, logging, and having
 * an authenticated HTTP client.
 *
 * @module Analytics
 */

var optionsShape = {
  config: _propTypes["default"].object.isRequired,
  httpClient: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].object]).isRequired,
  loggingService: _propTypes["default"].shape({
    logError: _propTypes["default"].func.isRequired,
    logInfo: _propTypes["default"].func.isRequired
  }).isRequired
};
var serviceShape = {
  sendTrackingLogEvent: _propTypes["default"].func.isRequired,
  identifyAuthenticatedUser: _propTypes["default"].func.isRequired,
  identifyAnonymousUser: _propTypes["default"].func.isRequired,
  sendTrackEvent: _propTypes["default"].func.isRequired,
  sendPageEvent: _propTypes["default"].func.isRequired
};
var service;

/**
 *
 * @param {class} AnalyticsService
 * @param {*} options
 * @returns {AnalyticsService}
 */
function configure(AnalyticsService, options) {
  _propTypes["default"].checkPropTypes(optionsShape, options, 'property', 'Analytics');
  service = new AnalyticsService(options);
  _propTypes["default"].checkPropTypes(serviceShape, service, 'property', 'AnalyticsService');
  return service;
}

/**
 *
 * @param {*} eventName
 * @param {*} properties
 * @returns {Promise}
 */
function sendTrackingLogEvent(eventName, properties) {
  return service.sendTrackingLogEvent(eventName, properties);
}

/**
 *
 *
 * @param {*} userId
 * @param {*} traits
 */
function identifyAuthenticatedUser(userId, traits) {
  service.identifyAuthenticatedUser(userId, traits);
}

/**
 *
 *
 * @param {*} traits
 * @returns {Promise}
 */
function identifyAnonymousUser(traits) {
  return service.identifyAnonymousUser(traits);
}

/**
 *
 *
 * @param {*} eventName
 * @param {*} properties
 */
function sendTrackEvent(eventName, properties) {
  service.sendTrackEvent(eventName, properties);
}

/**
 *
 *
 * @param {*} category
 * @param {*} name
 * @param {*} properties
 */
function sendPageEvent(category, name, properties) {
  service.sendPageEvent(category, name, properties);
}

/**
 *
 *
 * @returns {AnalyticsService}
 */
function getAnalyticsService() {
  if (!service) {
    throw Error('You must first configure the analytics service.');
  }
  return service;
}

/**
 *
 */
function resetAnalyticsService() {
  service = null;
}

/**
 * @name AnalyticsService
 * @interface
 * @memberof module:Analytics
 * @property {function} identifyAnonymousUser
 * @property {function} identifyAuthenticatedUser
 * @property {function} sendPageEvent
 * @property {function} sendTrackEvent
 * @property {function} sendTrackingLogEvent
 */
//# sourceMappingURL=interface.js.map