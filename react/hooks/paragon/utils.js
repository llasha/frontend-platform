"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeExistingLinks = exports.isEmptyObject = exports.fallbackThemeUrl = void 0;
var _initialize = require("../../../initialize");
/**
 * Iterates through each given `<link>` element and removes it from the DOM.
 * @param {HTMLLinkElement[]} existingLinks
 */
var removeExistingLinks = exports.removeExistingLinks = function removeExistingLinks(existingLinks) {
  existingLinks.forEach(function (link) {
    link.remove();
  });
};

/**
* Creates the fallback URL for the given theme file.
* @param {string} url The theme file path.
* @returns {string} The default theme url.
*/
var fallbackThemeUrl = exports.fallbackThemeUrl = function fallbackThemeUrl(url) {
  var _window$location;
  var baseUrl = (_window$location = window.location) === null || _window$location === void 0 ? void 0 : _window$location.origin;

  // validates if the baseurl has the protocol to be interpreted correctly by the browser,
  // if is not present add '//' to use Protocol-relative URL
  var protocol = /^(https?:)?\/\//.test(baseUrl) ? '' : '//';
  return "".concat(protocol).concat(baseUrl).concat(_initialize.basename).concat(url);
};
var isEmptyObject = exports.isEmptyObject = function isEmptyObject(obj) {
  return !obj || Object.keys(obj).length === 0;
};
//# sourceMappingURL=utils.js.map