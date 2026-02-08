"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CONFIG_TOPIC = exports.CONFIG_CHANGED = exports.APP_TOPIC = exports.APP_READY = exports.APP_PUBSUB_INITIALIZED = exports.APP_LOGGING_INITIALIZED = exports.APP_INIT_ERROR = exports.APP_I18N_INITIALIZED = exports.APP_CONFIG_INITIALIZED = exports.APP_AUTH_INITIALIZED = exports.APP_ANALYTICS_INITIALIZED = void 0;
/** @constant */
var APP_TOPIC = exports.APP_TOPIC = 'APP';
var APP_PUBSUB_INITIALIZED = exports.APP_PUBSUB_INITIALIZED = "".concat(APP_TOPIC, ".PUBSUB_INITIALIZED");

/**
 * Event published when the application initialization sequence has finished loading any dynamic
 * configuration setup in a custom config handler.
 *
 * @event
 */
var APP_CONFIG_INITIALIZED = exports.APP_CONFIG_INITIALIZED = "".concat(APP_TOPIC, ".CONFIG_INITIALIZED");

/**
 * Event published when the application initialization sequence has finished determining the user's
 * authentication state, creating an authenticated API client, and executing auth handlers.
 *
 * @event
 */
var APP_AUTH_INITIALIZED = exports.APP_AUTH_INITIALIZED = "".concat(APP_TOPIC, ".AUTH_INITIALIZED");

/**
 * Event published when the application initialization sequence has finished initializing
 * internationalization and executing any i18n handlers.
 *
 * @event
 */
var APP_I18N_INITIALIZED = exports.APP_I18N_INITIALIZED = "".concat(APP_TOPIC, ".I18N_INITIALIZED");

/**
 * Event published when the application initialization sequence has finished initializing the
 * logging service and executing any logging handlers.
 *
 * @event
 */
var APP_LOGGING_INITIALIZED = exports.APP_LOGGING_INITIALIZED = "".concat(APP_TOPIC, ".LOGGING_INITIALIZED");

/**
 * Event published when the application initialization sequence has finished initializing the
 * analytics service and executing any analytics handlers.
 *
 * @event
 */
var APP_ANALYTICS_INITIALIZED = exports.APP_ANALYTICS_INITIALIZED = "".concat(APP_TOPIC, ".ANALYTICS_INITIALIZED");

/**
 * Event published when the application initialization sequence has finished.  Applications should
 * subscribe to this event and start rendering the UI when it has fired.
 *
 * @event
 */
var APP_READY = exports.APP_READY = "".concat(APP_TOPIC, ".READY");

/**
 * Event published when the application initialization sequence has aborted.  This is frequently
 * used to show an error page when an initialization error has occurred.
 *
 * @see {@link module:React~ErrorPage}
 * @event
 */
var APP_INIT_ERROR = exports.APP_INIT_ERROR = "".concat(APP_TOPIC, ".INIT_ERROR");

/** @constant */
var CONFIG_TOPIC = exports.CONFIG_TOPIC = 'CONFIG';
var CONFIG_CHANGED = exports.CONFIG_CHANGED = "".concat(CONFIG_TOPIC, ".CHANGED");
//# sourceMappingURL=constants.js.map