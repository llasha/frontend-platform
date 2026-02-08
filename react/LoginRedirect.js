"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = LoginRedirect;
var _react = require("react");
var _auth = require("../auth");
/**
 * A React component that, when rendered, redirects to the login page as a side effect.  Uses
 * `redirectToLogin` to perform the redirect.
 *
 * @see {@link module:frontend-platform/auth~redirectToLogin}
 * @memberof module:React
 */
function LoginRedirect() {
  (0, _react.useEffect)(function () {
    (0, _auth.redirectToLogin)(global.location.href);
  }, []);
  return null;
}
//# sourceMappingURL=LoginRedirect.js.map