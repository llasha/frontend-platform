"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCountryList = getCountryList;
exports.getCountryMessages = getCountryMessages;
var _i18nIsoCountries = _interopRequireWildcard(require("i18n-iso-countries"));
var _ar = _interopRequireDefault(require("i18n-iso-countries/langs/ar.json"));
var _en = _interopRequireDefault(require("i18n-iso-countries/langs/en.json"));
var _es = _interopRequireDefault(require("i18n-iso-countries/langs/es.json"));
var _fr = _interopRequireDefault(require("i18n-iso-countries/langs/fr.json"));
var _zh = _interopRequireDefault(require("i18n-iso-countries/langs/zh.json"));
var _ca = _interopRequireDefault(require("i18n-iso-countries/langs/ca.json"));
var _he = _interopRequireDefault(require("i18n-iso-countries/langs/he.json"));
var _id = _interopRequireDefault(require("i18n-iso-countries/langs/id.json"));
var _ko = _interopRequireDefault(require("i18n-iso-countries/langs/ko.json"));
var _pl = _interopRequireDefault(require("i18n-iso-countries/langs/pl.json"));
var _pt = _interopRequireDefault(require("i18n-iso-countries/langs/pt.json"));
var _ru = _interopRequireDefault(require("i18n-iso-countries/langs/ru.json"));
var _uk = _interopRequireDefault(require("i18n-iso-countries/langs/uk.json"));
var _ka = _interopRequireDefault(require("i18n-iso-countries/langs/ka.json"));
var _lib = require("./lib");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; } /* eslint-disable import/extensions */
/*
 * COUNTRY LISTS
 *
 * Lists of country names localized in supported languages.
 *
 * TODO: When we start dynamically loading translations only for the current locale, change this.
 */

_i18nIsoCountries["default"].registerLocale(_ar["default"]);
_i18nIsoCountries["default"].registerLocale(_en["default"]);
_i18nIsoCountries["default"].registerLocale(_es["default"]);
_i18nIsoCountries["default"].registerLocale(_fr["default"]);
_i18nIsoCountries["default"].registerLocale(_zh["default"]);
_i18nIsoCountries["default"].registerLocale(_ca["default"]);
_i18nIsoCountries["default"].registerLocale(_he["default"]);
_i18nIsoCountries["default"].registerLocale(_id["default"]);
_i18nIsoCountries["default"].registerLocale(_ko["default"]);
_i18nIsoCountries["default"].registerLocale(_pl["default"]);
_i18nIsoCountries["default"].registerLocale(_pt["default"]);
_i18nIsoCountries["default"].registerLocale(_ru["default"]);
// COUNTRIES.registerLocale(thLocale); // Doesn't exist in lib.
_i18nIsoCountries["default"].registerLocale(_uk["default"]);
_i18nIsoCountries["default"].registerLocale(_ka["default"]);

/**
 * Provides a lookup table of country IDs to country names for the current locale.
 *
 * @memberof module:I18n
 */
function getCountryMessages(locale) {
  var primaryLanguageSubtag = (0, _lib.getPrimaryLanguageSubtag)(locale);
  var languageCode = (0, _i18nIsoCountries.langs)().includes(primaryLanguageSubtag) ? primaryLanguageSubtag : 'en';
  return _i18nIsoCountries["default"].getNames(languageCode);
}

/**
 * Provides a list of countries represented as objects of the following shape:
 *
 * {
 *   key, // The ID of the country
 *   name // The localized name of the country
 * }
 *
 * TODO: ARCH-878: The list should be sorted alphabetically in the current locale.
 * This is useful for populating dropdowns.
 *
 * @memberof module:I18n
 */
function getCountryList(locale) {
  var countryMessages = getCountryMessages(locale);
  return Object.entries(countryMessages).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      code = _ref2[0],
      name = _ref2[1];
    return {
      code: code,
      name: name
    };
  });
}
//# sourceMappingURL=countries.js.map