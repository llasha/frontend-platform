"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLanguageMessages = exports.getLanguageList = void 0;
var _i18nIsoLanguages = _interopRequireWildcard(require("@llasha/i18n-iso-languages"));
var _en = _interopRequireDefault(require("@llasha/i18n-iso-languages/langs/en.json"));
var _es = _interopRequireDefault(require("@llasha/i18n-iso-languages/langs/es.json"));
var _fr = _interopRequireDefault(require("@llasha/i18n-iso-languages/langs/fr.json"));
var _pl = _interopRequireDefault(require("@llasha/i18n-iso-languages/langs/pl.json"));
var _pt = _interopRequireDefault(require("@llasha/i18n-iso-languages/langs/pt.json"));
var _ka = _interopRequireDefault(require("@llasha/i18n-iso-languages/langs/ka.json"));
var _lib = require("./lib");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /* eslint-disable import/extensions */ // import arLocale from '@llasha/i18n-iso-languages/langs/ar.json';
// import zhLocale from '@llasha/i18n-iso-languages/langs/zh.json';
// import caLocale from '@llasha/i18n-iso-languages/langs/ca.json';
// import heLocale from '@llasha/i18n-iso-languages/langs/he.json';
// import idLocale from '@llasha/i18n-iso-languages/langs/id.json';
// import koLocale from '@llasha/i18n-iso-languages/langs/ko.json';
// import ruLocale from '@llasha/i18n-iso-languages/langs/ru.json';
// import thLocale from '@llasha/i18n-iso-languages/langs/th.json';
// import ukLocale from '@llasha/i18n-iso-languages/langs/uk.json';
/*
 * LANGUAGE LISTS
 *
 * Lists of language names localized in supported languages.
 *
 * TODO: When we start dynamically loading translations only for the current locale, change this.
 * TODO: Also note that a bunch of languages are missing here. They're present but commented out
 * for reference. That's because they're not implemented in this library.  If you read this and it's
 * been a while, go check and see if that's changed!
 */

// LANGUAGES.registerLocale(arLocale);
_i18nIsoLanguages["default"].registerLocale(_en["default"]);
_i18nIsoLanguages["default"].registerLocale(_es["default"]);
_i18nIsoLanguages["default"].registerLocale(_fr["default"]);
// LANGUAGES.registerLocale(zhLocale);
// LANGUAGES.registerLocale(caLocale);
// LANGUAGES.registerLocale(heLocale);
// LANGUAGES.registerLocale(idLocale);
// LANGUAGES.registerLocale(koLocale);
_i18nIsoLanguages["default"].registerLocale(_pl["default"]);
_i18nIsoLanguages["default"].registerLocale(_pt["default"]);
// LANGUAGES.registerLocale(ruLocale);
// LANGUAGES.registerLocale(thLocale);
// LANGUAGES.registerLocale(ukLocale);
_i18nIsoLanguages["default"].registerLocale(_ka["default"]);

/**
 * Provides a lookup table of language IDs to language names for the current locale.
 *
 * @memberof I18n
 */
var getLanguageMessages = exports.getLanguageMessages = function getLanguageMessages(locale) {
  var primaryLanguageSubtag = (0, _lib.getPrimaryLanguageSubtag)(locale);
  var languageCode = (0, _i18nIsoLanguages.langs)().includes(primaryLanguageSubtag) ? primaryLanguageSubtag : 'en';
  return _i18nIsoLanguages["default"].getNames(languageCode);
};

/**
 * Provides a list of languages represented as objects of the following shape:
 *
 * {
 *   key, // The ID of the language
 *   name // The localized name of the language
 * }
 *
 * TODO: ARCH-878: The list should be sorted alphabetically in the current locale.
 * This is useful for populating dropdowns.
 *
 * @memberof I18n
 */
var getLanguageList = exports.getLanguageList = function getLanguageList(locale) {
  var languageMessages = getLanguageMessages(locale);
  return Object.entries(languageMessages).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      code = _ref2[0],
      name = _ref2[1];
    return {
      code: code,
      name: name
    };
  });
};
//# sourceMappingURL=languages.js.map