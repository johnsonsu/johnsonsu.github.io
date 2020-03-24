webpackHotUpdate("static/development/pages/index.js",{

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
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
  backgroundColor: '#fefefe'
};
var emojis = ['🦾', '🎸', '🤦🏻‍♂️', '🤯', '🚀', '🤩', '🤓', '🐑', '🍣', '🎮', '🗺'];

var randomEmoji = function randomEmoji() {
  return emojis[Math.floor(Math.random() * emojis.length)];
};

var Nav = function Nav() {
  return __jsx("div", {
    style: containerStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx("div", {
    style: iconStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, randomEmoji()), __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/",
    title: "About",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/post",
    title: "Blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("a", {
    href: "https://github.com/johnsonsu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("img", {
    src: "/github.svg",
    height: "24em",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx("a", {
    href: "https://www.linkedin.com/in/johnsonsu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("img", {
    src: "/linkedin.svg",
    height: "24em",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=index.js.6ab46bbd07c886bf7b4c.hot-update.js.map