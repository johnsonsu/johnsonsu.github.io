webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./components/NavButton.js":
/*!*********************************!*\
  !*** ./components/NavButton.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/johnsonsu/Developer/github/johnsonsu.github.io/components/NavButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var buttonStyle = {
  display: 'flex',
  marginRight: '1em',
  borderRadius: '1.5em',
  height: '2em',
  width: '2em',
  fontSize: '1.4em',
  backgroundColor: '#fefefe'
};
var linkStyle = {
  textDecoration: 'none'
};

var NavButton = function NavButton(_ref) {
  var href = _ref.href,
      title = _ref.title;
  return __jsx("div", {
    style: buttonStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: href,
    as: href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx("a", {
    style: linkStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, title)));
};

NavButton.propTypes = {
  href: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (NavButton);

/***/ })

})
//# sourceMappingURL=blog.js.e385cbc185172e9887ed.hot-update.js.map