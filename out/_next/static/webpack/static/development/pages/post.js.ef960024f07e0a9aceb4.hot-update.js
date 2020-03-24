webpackHotUpdate("static/development/pages/post.js",{

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
  justifyContent: 'space-between',
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
var navGroupStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center'
};
var externalLinkStyle = {
  marginLeft: '0.8em',
  filter: 'invert(14%) sepia(0%) saturate(3%) hue-rotate(189deg) brightness(100%) contrast(84%)'
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
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    style: navGroupStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    style: iconStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, randomEmoji()), __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/",
    title: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/post",
    title: "blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx("div", {
    style: navGroupStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, __jsx("a", {
    style: externalLinkStyle,
    href: "https://github.com/johnsonsu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("img", {
    src: "/github.svg",
    height: "24em",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  })), __jsx("a", {
    style: externalLinkStyle,
    href: "https://www.linkedin.com/in/johnsonsu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("img", {
    src: "/linkedin.svg",
    height: "24em",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ })

})
//# sourceMappingURL=post.js.ef960024f07e0a9aceb4.hot-update.js.map