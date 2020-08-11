webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavButton */ \"./components/NavButton.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/johnsonsu/Developer/github/johnsonsu.github.io/components/Nav.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar containerStyle = {\n  display: 'flex',\n  flexDirection: 'row',\n  alignItems: 'center',\n  justifyContent: 'space-between',\n  backgroundColor: '#f2f2f2',\n  padding: '1em',\n  marginTop: '1em',\n  borderRadius: '0.4em',\n  boxShadow: '0px 0px 30px 0px rgba(100, 100, 100, 0.5)'\n};\nvar iconStyle = {\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n  marginRight: '1em',\n  borderRadius: '1.5em',\n  height: '2em',\n  width: '2em',\n  fontSize: '1.4em',\n  backgroundColor: '#fefefe'\n};\nvar navGroupStyle = {\n  display: 'flex',\n  flexDirection: 'row',\n  alignItems: 'center'\n};\nvar externalLinkStyle = {\n  marginLeft: '0.8em',\n  filter: 'invert(14%) sepia(0%) saturate(3%) hue-rotate(189deg) brightness(100%) contrast(84%)'\n};\nvar emojis = ['🦾', '🎸', '🤦🏻‍♂️', '🤯', '🚀', '🤩', '🤓', '🐑', '🍣', '🎮', '🗺'];\n\nvar randomEmoji = function randomEmoji() {\n  return emojis[Math.floor(Math.random() * emojis.length)];\n};\n\nvar Nav = function Nav() {\n  return __jsx(\"div\", {\n    style: containerStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    style: navGroupStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: iconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, randomEmoji()), __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    href: \"/\",\n    title: \"About\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }), __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    href: \"/blog\",\n    title: \"Blog\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  })), __jsx(\"div\", {\n    style: navGroupStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    style: externalLinkStyle,\n    href: \"https://github.com/johnsonsu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"/github.svg\",\n    height: \"24em\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 9\n    }\n  })), __jsx(\"a\", {\n    style: externalLinkStyle,\n    href: \"https://www.linkedin.com/in/johnsonsu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"/linkedin.svg\",\n    height: \"24em\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 9\n    }\n  }))));\n};\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/YTEzMyJdLCJuYW1lcyI6WyJjb250YWluZXJTdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsIm1hcmdpblRvcCIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImljb25TdHlsZSIsIm1hcmdpblJpZ2h0IiwiaGVpZ2h0Iiwid2lkdGgiLCJmb250U2l6ZSIsIm5hdkdyb3VwU3R5bGUiLCJleHRlcm5hbExpbmtTdHlsZSIsIm1hcmdpbkxlZnQiLCJmaWx0ZXIiLCJlbW9qaXMiLCJyYW5kb21FbW9qaSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIk5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxjQUFjLEdBQUc7QUFDckJDLFNBQU8sRUFBRSxNQURZO0FBRXJCQyxlQUFhLEVBQUUsS0FGTTtBQUdyQkMsWUFBVSxFQUFFLFFBSFM7QUFJckJDLGdCQUFjLEVBQUUsZUFKSztBQUtyQkMsaUJBQWUsRUFBRSxTQUxJO0FBTXJCQyxTQUFPLEVBQUUsS0FOWTtBQU9yQkMsV0FBUyxFQUFFLEtBUFU7QUFRckJDLGNBQVksRUFBRSxPQVJPO0FBU3JCQyxXQUFTLEVBQUU7QUFUVSxDQUF2QjtBQVlBLElBQU1DLFNBQVMsR0FBRztBQUNoQlQsU0FBTyxFQUFFLE1BRE87QUFFaEJFLFlBQVUsRUFBRSxRQUZJO0FBR2hCQyxnQkFBYyxFQUFFLFFBSEE7QUFJaEJPLGFBQVcsRUFBRSxLQUpHO0FBS2hCSCxjQUFZLEVBQUUsT0FMRTtBQU1oQkksUUFBTSxFQUFFLEtBTlE7QUFPaEJDLE9BQUssRUFBRSxLQVBTO0FBUWhCQyxVQUFRLEVBQUUsT0FSTTtBQVNoQlQsaUJBQWUsRUFBRTtBQVRELENBQWxCO0FBWUEsSUFBTVUsYUFBYSxHQUFHO0FBQ3BCZCxTQUFPLEVBQUUsTUFEVztBQUVwQkMsZUFBYSxFQUFFLEtBRks7QUFHcEJDLFlBQVUsRUFBRTtBQUhRLENBQXRCO0FBTUEsSUFBTWEsaUJBQWlCLEdBQUc7QUFDeEJDLFlBQVUsRUFBRSxPQURZO0FBRXhCQyxRQUFNLEVBQ0o7QUFIc0IsQ0FBMUI7QUFNQSxJQUFNQyxNQUFNLEdBQUcsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLFNBQWIsRUFBd0IsSUFBeEIsRUFBOEIsSUFBOUIsRUFBb0MsSUFBcEMsRUFBMEMsSUFBMUMsRUFBZ0QsSUFBaEQsRUFBc0QsSUFBdEQsRUFBNEQsSUFBNUQsRUFBa0UsSUFBbEUsQ0FBZjs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFNBQU1ELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkosTUFBTSxDQUFDSyxNQUFsQyxDQUFELENBQVo7QUFBQSxDQUFwQjs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTTtBQUFBLFNBQ1Y7QUFBSyxTQUFLLEVBQUV6QixjQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBRWUsYUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxTQUFLLEVBQUVMLFNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUF3QlUsV0FBVyxFQUFuQyxDQURGLEVBRUUsTUFBQyxrREFBRDtBQUFXLFFBQUksRUFBQyxHQUFoQjtBQUFvQixTQUFLLEVBQUMsT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0UsTUFBQyxrREFBRDtBQUFXLFFBQUksRUFBQyxPQUFoQjtBQUF3QixTQUFLLEVBQUMsTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhGLENBREYsRUFPRTtBQUFLLFNBQUssRUFBRUwsYUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxTQUFLLEVBQUVDLGlCQUFWO0FBQTZCLFFBQUksRUFBQyw4QkFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLGFBQVQ7QUFBdUIsVUFBTSxFQUFDLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBRyxTQUFLLEVBQUVBLGlCQUFWO0FBQTZCLFFBQUksRUFBQyx1Q0FBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLGVBQVQ7QUFBeUIsVUFBTSxFQUFDLE1BQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUpGLENBUEYsQ0FEVTtBQUFBLENBQVo7O0tBQU1TLEc7QUFtQlNBLGtFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9OYXYuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2QnV0dG9uIGZyb20gJy4vTmF2QnV0dG9uJ1xuXG5jb25zdCBjb250YWluZXJTdHlsZSA9IHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmMmYyZjInLFxuICBwYWRkaW5nOiAnMWVtJyxcbiAgbWFyZ2luVG9wOiAnMWVtJyxcbiAgYm9yZGVyUmFkaXVzOiAnMC40ZW0nLFxuICBib3hTaGFkb3c6ICcwcHggMHB4IDMwcHggMHB4IHJnYmEoMTAwLCAxMDAsIDEwMCwgMC41KScsXG59XG5cbmNvbnN0IGljb25TdHlsZSA9IHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxuICBtYXJnaW5SaWdodDogJzFlbScsXG4gIGJvcmRlclJhZGl1czogJzEuNWVtJyxcbiAgaGVpZ2h0OiAnMmVtJyxcbiAgd2lkdGg6ICcyZW0nLFxuICBmb250U2l6ZTogJzEuNGVtJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2ZlZmVmZScsXG59XG5cbmNvbnN0IG5hdkdyb3VwU3R5bGUgPSB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxufVxuXG5jb25zdCBleHRlcm5hbExpbmtTdHlsZSA9IHtcbiAgbWFyZ2luTGVmdDogJzAuOGVtJyxcbiAgZmlsdGVyOlxuICAgICdpbnZlcnQoMTQlKSBzZXBpYSgwJSkgc2F0dXJhdGUoMyUpIGh1ZS1yb3RhdGUoMTg5ZGVnKSBicmlnaHRuZXNzKDEwMCUpIGNvbnRyYXN0KDg0JSknLFxufVxuXG5jb25zdCBlbW9qaXMgPSBbJ/Cfpr4nLCAn8J+OuCcsICfwn6Sm8J+Pu+KAjeKZgu+4jycsICfwn6SvJywgJ/CfmoAnLCAn8J+kqScsICfwn6STJywgJ/CfkJEnLCAn8J+NoycsICfwn46uJywgJ/Cfl7onXVxuXG5jb25zdCByYW5kb21FbW9qaSA9ICgpID0+IGVtb2ppc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBlbW9qaXMubGVuZ3RoKV1cblxuY29uc3QgTmF2ID0gKCkgPT4gKFxuICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0+XG4gICAgPGRpdiBzdHlsZT17bmF2R3JvdXBTdHlsZX0+XG4gICAgICA8ZGl2IHN0eWxlPXtpY29uU3R5bGV9PntyYW5kb21FbW9qaSgpfTwvZGl2PlxuICAgICAgPE5hdkJ1dHRvbiBocmVmPVwiL1wiIHRpdGxlPVwiQWJvdXRcIiAvPlxuICAgICAgPE5hdkJ1dHRvbiBocmVmPVwiL2Jsb2dcIiB0aXRsZT1cIkJsb2dcIiAvPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBzdHlsZT17bmF2R3JvdXBTdHlsZX0+XG4gICAgICA8YSBzdHlsZT17ZXh0ZXJuYWxMaW5rU3R5bGV9IGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vam9obnNvbnN1XCI+XG4gICAgICAgIDxpbWcgc3JjPVwiL2dpdGh1Yi5zdmdcIiBoZWlnaHQ9XCIyNGVtXCIgLz5cbiAgICAgIDwvYT5cbiAgICAgIDxhIHN0eWxlPXtleHRlcm5hbExpbmtTdHlsZX0gaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9qb2huc29uc3VcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvbGlua2VkaW4uc3ZnXCIgaGVpZ2h0PVwiMjRlbVwiIC8+XG4gICAgICA8L2E+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBOYXZcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

})