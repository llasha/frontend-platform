"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOCALE_TOPIC = exports.LOCALE_CHANGED = void 0;
exports.configure = configure;
exports.findSupportedLocale = findSupportedLocale;
exports.getCookies = getCookies;
exports.getLocale = getLocale;
exports.getLoggingService = void 0;
exports.getMessages = getMessages;
exports.getPrimaryLanguageSubtag = getPrimaryLanguageSubtag;
exports.getSupportedLocaleList = getSupportedLocaleList;
exports.handleRtl = handleRtl;
exports.intlShape = void 0;
exports.isRtl = isRtl;
exports.mergeMessages = mergeMessages;
var _propTypes = _interopRequireDefault(require("prop-types"));
var _universalCookie = _interopRequireDefault(require("universal-cookie"));
var _lodash = _interopRequireDefault(require("lodash.merge"));
require("@formatjs/intl-pluralrules/polyfill");
require("@formatjs/intl-pluralrules/locale-data/ar");
require("@formatjs/intl-pluralrules/locale-data/en");
require("@formatjs/intl-pluralrules/locale-data/es");
require("@formatjs/intl-pluralrules/locale-data/fr");
require("@formatjs/intl-pluralrules/locale-data/zh");
require("@formatjs/intl-pluralrules/locale-data/ca");
require("@formatjs/intl-pluralrules/locale-data/he");
require("@formatjs/intl-pluralrules/locale-data/id");
require("@formatjs/intl-pluralrules/locale-data/ko");
require("@formatjs/intl-pluralrules/locale-data/pl");
require("@formatjs/intl-pluralrules/locale-data/pt");
require("@formatjs/intl-pluralrules/locale-data/ru");
require("@formatjs/intl-pluralrules/locale-data/th");
require("@formatjs/intl-pluralrules/locale-data/uk");
require("@formatjs/intl-pluralrules/locale-data/ka");
require("@formatjs/intl-relativetimeformat/polyfill");
require("@formatjs/intl-relativetimeformat/locale-data/ar");
require("@formatjs/intl-relativetimeformat/locale-data/en");
require("@formatjs/intl-relativetimeformat/locale-data/es");
require("@formatjs/intl-relativetimeformat/locale-data/fr");
require("@formatjs/intl-relativetimeformat/locale-data/zh");
require("@formatjs/intl-relativetimeformat/locale-data/ca");
require("@formatjs/intl-relativetimeformat/locale-data/he");
require("@formatjs/intl-relativetimeformat/locale-data/id");
require("@formatjs/intl-relativetimeformat/locale-data/ko");
require("@formatjs/intl-relativetimeformat/locale-data/pl");
require("@formatjs/intl-relativetimeformat/locale-data/pt");
require("@formatjs/intl-relativetimeformat/locale-data/ru");
require("@formatjs/intl-relativetimeformat/locale-data/th");
require("@formatjs/intl-relativetimeformat/locale-data/uk");
require("@formatjs/intl-relativetimeformat/locale-data/ka");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
var cookies = new _universalCookie["default"]();
var supportedLocales = ['ar',
// Arabic
// NOTE: 'en' is not included in this list intentionally, since it's the fallback.
'es-419',
// Spanish, Latin American
'fa',
// Farsi
'fa-ir',
// Farsi, Iran
'fr',
// French
'zh-cn',
// Chinese, Simplified
'ca',
// Catalan
'he',
// Hebrew
'id',
// Indonesian
'ko-kr',
// Korean (Korea)
'pl',
// Polish
'pt-br',
// Portuguese (Brazil)
'ru',
// Russian
'th',
// Thai
'uk',
// Ukrainian
'ka' // Georgian
];
var rtlLocales = ['ar',
// Arabic
'he',
// Hebrew
'fa',
// Farsi (not currently supported)
'fa-ir',
// Farsi Iran
'ur' // Urdu (not currently supported)
];
var config = null;
var loggingService = null;
var messages = null;

/**
 * @memberof module:Internationalization
 *
 * Prior versions of react-intl (our primary implementation of the i18n service) included a
 * PropTypes-based 'shape' for its `intl` object.  This has since been removed.  For legacy
 * compatibility, we include an `intlShape` export that is set to PropTypes.object.  Usage of this
 * export is deprecated.
 *
 * @deprecated
 */
var intlShape = exports.intlShape = _propTypes["default"].object;

/**
 *
 * @ignore
 * @returns {LoggingService}
 */
var getLoggingService = exports.getLoggingService = function getLoggingService() {
  return loggingService;
};

/**
 * @memberof module:Internationalization
 */
var LOCALE_TOPIC = exports.LOCALE_TOPIC = 'LOCALE';

/**
 * @memberof module:Internationalization
 */
var LOCALE_CHANGED = exports.LOCALE_CHANGED = "".concat(LOCALE_TOPIC, ".CHANGED");

/**
 *
 * @memberof module:Internationalization
 * @returns {Cookies}
 */
function getCookies() {
  return cookies;
}

/**
 * Some of our dependencies function on primary language subtags, rather than full locales.
 * This function strips a locale down to that first subtag.  Depending on the code, this
 * may be 2 or more characters.
 *
 * @param {string} code
 * @memberof module:Internationalization
 */
function getPrimaryLanguageSubtag(code) {
  return code.split('-')[0];
}

/**
 * Finds the closest supported locale to the one provided.  This is done in three steps:
 *
 * 1. Returning the locale itself if its exact language code is supported.
 * 2. Returning the primary language subtag of the language code if it is supported (ar for ar-eg,
 * for instance).
 * 3. Returning 'en' if neither of the above produce a supported locale.
 *
 * @param {string} locale
 * @returns {string}
 * @memberof module:Internationalization
 */
function findSupportedLocale(locale) {
  if (messages[locale] !== undefined) {
    return locale;
  }
  if (messages[getPrimaryLanguageSubtag(locale)] !== undefined) {
    return getPrimaryLanguageSubtag(locale);
  }
  return 'en';
}

/**
 * Get the locale from the cookie or, failing that, the browser setting.
 * Gracefully fall back to a more general primary language subtag or to English (en)
 * if we don't support that language.
 *
 * @param {string} locale If a locale is provided, returns the closest supported locale. Optional.
 * @throws An error if i18n has not yet been configured.
 * @returns {string}
 * @memberof module:Internationalization
 */
function getLocale(locale) {
  if (messages === null) {
    throw new Error('getLocale called before configuring i18n. Call configure with messages first.');
  }
  // 1. Explicit application request
  if (locale !== undefined) {
    return findSupportedLocale(locale);
  }
  // 2. User setting in cookie
  var cookieLangPref = cookies.get(config.LANGUAGE_PREFERENCE_COOKIE_NAME);
  if (cookieLangPref) {
    return findSupportedLocale(cookieLangPref.toLowerCase());
  }
  // 3. Browser language (default)
  // Note that some browers prefer upper case for the region part of the locale, while others don't.
  // Thus the toLowerCase, for consistency.
  // https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language
  return findSupportedLocale(globalThis.navigator.language.toLowerCase());
}

/**
 * Returns messages for the provided locale, or the user's preferred locale if no argument is
 * provided.
 *
 * @param {string} [locale=getLocale()]
 * @memberof module:Internationalization
 */
function getMessages() {
  var locale = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getLocale();
  return messages[locale];
}

/**
 * Returns the list of supported locales based on the configured messages.
 * This list is dynamically generated from the translation messages that were
 * provided during i18n configuration. Always includes the current locale.
 *
 * @throws An error if i18n has not yet been configured.
 * @returns {string[]} Array of supported locale codes
 * @memberof module:Internationalization
 */
function getSupportedLocaleList() {
  if (messages === null) {
    throw new Error('getSupportedLocaleList called before configuring i18n. Call configure with messages first.');
  }
  var locales = Object.keys(messages);
  if (!locales.includes('en')) {
    locales.push('en');
  }
  return locales;
}

/**
 * Determines if the provided locale is a right-to-left language.
 *
 * @param {string} locale
 * @memberof module:Internationalization
 */
function isRtl(locale) {
  return rtlLocales.includes(locale);
}

/**
 * Handles applying the RTL stylesheet and "dir=rtl" attribute to the html tag if the current locale
 * is a RTL language.
 *
 * @memberof module:Internationalization
 */
function handleRtl() {
  if (isRtl(getLocale())) {
    globalThis.document.getElementsByTagName('html')[0].setAttribute('dir', 'rtl');
  } else {
    globalThis.document.getElementsByTagName('html')[0].setAttribute('dir', 'ltr');
  }
}
var messagesShape = {
  ar: _propTypes["default"].objectOf(_propTypes["default"].string),
  // Arabic
  en: _propTypes["default"].objectOf(_propTypes["default"].string),
  'es-419': _propTypes["default"].objectOf(_propTypes["default"].string),
  // Spanish, Latin American
  fr: _propTypes["default"].objectOf(_propTypes["default"].string),
  // French
  'zh-cn': _propTypes["default"].objectOf(_propTypes["default"].string),
  // Chinese, Simplified
  ca: _propTypes["default"].objectOf(_propTypes["default"].string),
  // Catalan
  he: _propTypes["default"].objectOf(_propTypes["default"].string),
  // Hebrew
  id: _propTypes["default"].objectOf(_propTypes["default"].string),
  // Indonesian
  'ko-kr': _propTypes["default"].objectOf(_propTypes["default"].string),
  // Korean (Korea)
  pl: _propTypes["default"].objectOf(_propTypes["default"].string),
  // Polish
  'pt-br': _propTypes["default"].objectOf(_propTypes["default"].string),
  // Portuguese (Brazil)
  ru: _propTypes["default"].objectOf(_propTypes["default"].string),
  // Russian
  th: _propTypes["default"].objectOf(_propTypes["default"].string),
  // Thai
  uk: _propTypes["default"].objectOf(_propTypes["default"].string),
  // Ukrainian
  ka: _propTypes["default"].objectOf(_propTypes["default"].string) // Georgian
};
var optionsShape = {
  config: _propTypes["default"].object.isRequired,
  loggingService: _propTypes["default"].shape({
    logError: _propTypes["default"].func.isRequired
  }).isRequired,
  messages: _propTypes["default"].oneOfType([_propTypes["default"].shape(messagesShape), _propTypes["default"].arrayOf(_propTypes["default"].shape(messagesShape))]).isRequired
};

/**
 *
 *
 * @param {Object} newMessages
 * @returns {Object}
 * @memberof module:Internationalization
 */
function mergeMessages(newMessages) {
  var msgs = Array.isArray(newMessages) ? _lodash["default"].apply(void 0, [{}].concat(_toConsumableArray(newMessages))) : newMessages;
  messages = (0, _lodash["default"])(messages, msgs);
  return messages;
}

/**
 * Configures the i18n library with messages for your application.
 *
 * Logs a warning if it detects a locale it doesn't expect (as defined by the supportedLocales list
 * above), or if an expected locale is not provided.
 *
 * @param {Object} options
 * @param {LoggingService} options.loggingService
 * @param {Object} options.config
 * @param {Object} options.messages
 * @memberof module:Internationalization
 */
function configure(options) {
  _propTypes["default"].checkPropTypes(optionsShape, options, 'property', 'i18n');
  // eslint-disable-next-line prefer-destructuring
  loggingService = options.loggingService;
  // eslint-disable-next-line prefer-destructuring
  config = options.config;
  messages = Array.isArray(options.messages) ? _lodash["default"].apply(void 0, [{}].concat(_toConsumableArray(options.messages))) : options.messages;
  if (config.ENVIRONMENT !== 'production') {
    Object.keys(messages).forEach(function (key) {
      if (supportedLocales.indexOf(key) < 0) {
        console.warn("Unexpected locale: ".concat(key)); // eslint-disable-line no-console
      }
    });
    supportedLocales.forEach(function (key) {
      if (messages[key] === undefined) {
        console.warn("Missing locale: ".concat(key)); // eslint-disable-line no-console
      }
    });
  }
  handleRtl();
}
//# sourceMappingURL=lib.js.map