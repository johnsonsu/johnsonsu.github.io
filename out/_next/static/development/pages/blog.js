(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static/development/pages/blog.js"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fblog&absolutePagePath=%2FUsers%2Fjohnsonsu%2FDeveloper%2Fgithub%2Fjohnsonsu.github.io%2Fpages%2Fblog.js!./":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fblog&absolutePagePath=%2FUsers%2Fjohnsonsu%2FDeveloper%2Fgithub%2Fjohnsonsu.github.io%2Fpages%2Fblog.js ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/blog", function() {
      var mod = __webpack_require__(/*! ./pages/blog.js */ "./pages/blog.js")
      if(true) {
        module.hot.accept(/*! ./pages/blog.js */ "./pages/blog.js", function() {
          if(!next.router.components["/blog"]) return
          var updatedPage = __webpack_require__(/*! ./pages/blog.js */ "./pages/blog.js")
          next.router.update("/blog", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_82519ec661270f7f484f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_82519ec661270f7f484f */ "dll-reference dll_82519ec661270f7f484f"))("./node_modules/react/index.js");

/***/ }),

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
      href: "/post/".concat(name),
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

/***/ }),

/***/ 2:
/*!******************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fblog&absolutePagePath=%2FUsers%2Fjohnsonsu%2FDeveloper%2Fgithub%2Fjohnsonsu.github.io%2Fpages%2Fblog.js ***!
  \******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fblog&absolutePagePath=%2FUsers%2Fjohnsonsu%2FDeveloper%2Fgithub%2Fjohnsonsu.github.io%2Fpages%2Fblog.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fblog&absolutePagePath=%2FUsers%2Fjohnsonsu%2FDeveloper%2Fgithub%2Fjohnsonsu.github.io%2Fpages%2Fblog.js!./");


/***/ }),

/***/ "dll-reference dll_82519ec661270f7f484f":
/*!*******************************************!*\
  !*** external "dll_82519ec661270f7f484f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_82519ec661270f7f484f;

/***/ })

},[[2,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=blog.js.map