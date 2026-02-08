"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _analytics = require("../../../analytics");
/**
 * A custom React hook that listens for changes in the system's color scheme preference (via `matchMedia`)
 * and sends an event with the chosen color scheme (either `light` or `dark`) to the provided tracking service.
 * It sends an event both when the hook is first initialized (to capture the user's initial preference)
 * and when the system's color scheme preference changes.
 *
 * @memberof module:React
 */
var useTrackColorSchemeChoice = function useTrackColorSchemeChoice() {
  (0, _react.useEffect)(function () {
    var _window$matchMedia, _window;
    var trackColorSchemeChoice = function trackColorSchemeChoice(_ref) {
      var matches = _ref.matches;
      var preferredColorScheme = matches ? 'dark' : 'light';
      (0, _analytics.sendTrackEvent)('openedx.ui.frontend-platform.prefers-color-scheme.selected', {
        preferredColorScheme: preferredColorScheme
      });
    };
    var colorSchemeQuery = (_window$matchMedia = (_window = window).matchMedia) === null || _window$matchMedia === void 0 ? void 0 : _window$matchMedia.call(_window, '(prefers-color-scheme: dark)');
    if (colorSchemeQuery) {
      // send user's initial choice
      trackColorSchemeChoice(colorSchemeQuery);
      colorSchemeQuery.addEventListener('change', trackColorSchemeChoice);
    }
    return function () {
      if (colorSchemeQuery) {
        colorSchemeQuery.removeEventListener('change', trackColorSchemeChoice);
      }
    };
  }, []);
};
var _default = exports["default"] = useTrackColorSchemeChoice;
//# sourceMappingURL=useTrackColorSchemeChoice.js.map