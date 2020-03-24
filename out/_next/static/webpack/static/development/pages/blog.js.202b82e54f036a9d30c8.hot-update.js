webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavButton */ "./components/NavButton.js");
var _jsxFileName = "/Users/johnsonsu/Developer/github/johnsonsu.github.io/components/Nav.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var containerStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: '#f2f2f2',
  padding: '1em',
  borderRadius: '0.4em',
  boxShadow: '0px 0px 30px 0px rgba(100, 100, 100, 0.5)'
};
var iconStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: '1em',
  borderRadius: '1.5em',
  height: '2em',
  width: '2em',
  fontSize: '1.4em',
  backgroundColor: '#555'
};
var emojis = ['🦾', '🎸', '🤦🏻‍♂️', '🤯', '🚀', '🤩', '🤓', '🐑'];

var randomEmoji = function randomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
};

var Nav = function Nav() {
  return __jsx("div", {
    style: containerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    style: iconStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "\uD83D\uDE02"), __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/about",
    title: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/blog",
    title: "Blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=blog.js.202b82e54f036a9d30c8.hot-update.js.map