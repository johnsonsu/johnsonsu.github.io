webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/johnsonsu/Developer/github/johnsonsu.github.io/pages/blog.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function Blog(_ref) {
  var posts = _ref.posts;
  return __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, posts.map(function (post) {
    var name = post.slice(0, -3);
    return __jsx("li", {
      key: name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx("a", {
      href: "/posts/".concat(name),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, name));
  }));
}

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ })

})
//# sourceMappingURL=blog.js.e7e3c94450f3c1697740.hot-update.js.map