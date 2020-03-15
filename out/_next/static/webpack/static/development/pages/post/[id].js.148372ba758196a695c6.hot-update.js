webpackHotUpdate("static/development/pages/post/[id].js",{

/***/ "./pages/post/[id].js":
/*!****************************!*\
  !*** ./pages/post/[id].js ***!
  \****************************/
/*! exports provided: __N_SSG, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__N_SSG", function() { return __N_SSG; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "./node_modules/marked/src/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/johnsonsu/Developer/github/johnsonsu.github.io/pages/post/[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Post(_ref) {
  var post = _ref.post;
  var markdown = marked__WEBPACK_IMPORTED_MODULE_1___default()(post);
  ReactDOM.render(markdown, getElementById);
  return __jsx("div", {
    id: "markdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
}

var __N_SSG = true;
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[id].js.148372ba758196a695c6.hot-update.js.map