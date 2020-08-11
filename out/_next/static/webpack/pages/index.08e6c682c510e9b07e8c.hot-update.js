webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavButton */ \"./components/NavButton.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/johnsonsu/Developer/github/johnsonsu.github.io/components/Nav.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nvar containerStyle = {\n  display: 'flex',\n  flexDirection: 'row',\n  alignItems: 'center',\n  justifyContent: 'space-between',\n  backgroundColor: '#f2f2f2',\n  padding: '1em',\n  borderRadius: '0.4em',\n  boxShadow: '0px 0px 30px 0px rgba(100, 100, 100, 0.5)'\n};\nvar iconStyle = {\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n  marginRight: '1em',\n  borderRadius: '1.5em',\n  height: '2em',\n  width: '2em',\n  fontSize: '1.4em',\n  backgroundColor: '#fefefe'\n};\nvar navGroupStyle = {\n  display: 'flex',\n  flexDirection: 'row',\n  alignItems: 'center'\n};\nvar externalLinkStyle = {\n  marginLeft: '0.8em',\n  filter: 'invert(14%) sepia(0%) saturate(3%) hue-rotate(189deg) brightness(100%) contrast(84%)'\n};\nvar emojis = ['🦾', '🎸', '🤦🏻‍♂️', '🤯', '🚀', '🤩', '🤓', '🐑', '🍣', '🎮', '🗺'];\n\nvar randomEmoji = function randomEmoji() {\n  return emojis[Math.floor(Math.random() * emojis.length)];\n};\n\nvar Nav = function Nav() {\n  return __jsx(\"div\", {\n    style: containerStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    style: navGroupStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, ' ', __jsx(\"div\", {\n    style: iconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  }, randomEmoji()), __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    href: \"/\",\n    title: \"About\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }\n  }), __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    href: \"/blog\",\n    title: \"Blog\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }\n  })), __jsx(\"div\", {\n    style: navGroupStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    style: externalLinkStyle,\n    href: \"https://github.com/johnsonsu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"/github.svg\",\n    height: \"24em\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 9\n    }\n  })), __jsx(\"a\", {\n    style: externalLinkStyle,\n    href: \"https://www.linkedin.com/in/johnsonsu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 56,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"/linkedin.svg\",\n    height: \"24em\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 9\n    }\n  }))));\n};\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/YTEzMyJdLCJuYW1lcyI6WyJjb250YWluZXJTdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImljb25TdHlsZSIsIm1hcmdpblJpZ2h0IiwiaGVpZ2h0Iiwid2lkdGgiLCJmb250U2l6ZSIsIm5hdkdyb3VwU3R5bGUiLCJleHRlcm5hbExpbmtTdHlsZSIsIm1hcmdpbkxlZnQiLCJmaWx0ZXIiLCJlbW9qaXMiLCJyYW5kb21FbW9qaSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIk5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsY0FBYyxHQUFHO0FBQ3JCQyxTQUFPLEVBQUUsTUFEWTtBQUVyQkMsZUFBYSxFQUFFLEtBRk07QUFHckJDLFlBQVUsRUFBRSxRQUhTO0FBSXJCQyxnQkFBYyxFQUFFLGVBSks7QUFLckJDLGlCQUFlLEVBQUUsU0FMSTtBQU1yQkMsU0FBTyxFQUFFLEtBTlk7QUFPckJDLGNBQVksRUFBRSxPQVBPO0FBUXJCQyxXQUFTLEVBQUU7QUFSVSxDQUF2QjtBQVdBLElBQU1DLFNBQVMsR0FBRztBQUNoQlIsU0FBTyxFQUFFLE1BRE87QUFFaEJFLFlBQVUsRUFBRSxRQUZJO0FBR2hCQyxnQkFBYyxFQUFFLFFBSEE7QUFJaEJNLGFBQVcsRUFBRSxLQUpHO0FBS2hCSCxjQUFZLEVBQUUsT0FMRTtBQU1oQkksUUFBTSxFQUFFLEtBTlE7QUFPaEJDLE9BQUssRUFBRSxLQVBTO0FBUWhCQyxVQUFRLEVBQUUsT0FSTTtBQVNoQlIsaUJBQWUsRUFBRTtBQVRELENBQWxCO0FBWUEsSUFBTVMsYUFBYSxHQUFHO0FBQ3BCYixTQUFPLEVBQUUsTUFEVztBQUVwQkMsZUFBYSxFQUFFLEtBRks7QUFHcEJDLFlBQVUsRUFBRTtBQUhRLENBQXRCO0FBTUEsSUFBTVksaUJBQWlCLEdBQUc7QUFDeEJDLFlBQVUsRUFBRSxPQURZO0FBRXhCQyxRQUFNLEVBQ0o7QUFIc0IsQ0FBMUI7QUFNQSxJQUFNQyxNQUFNLEdBQUcsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLFNBQWIsRUFBd0IsSUFBeEIsRUFBOEIsSUFBOUIsRUFBb0MsSUFBcEMsRUFBMEMsSUFBMUMsRUFBZ0QsSUFBaEQsRUFBc0QsSUFBdEQsRUFBNEQsSUFBNUQsRUFBa0UsSUFBbEUsQ0FBZjs7QUFFQSxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLFNBQU1ELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDQyxLQUFMLENBQVdELElBQUksQ0FBQ0UsTUFBTCxLQUFnQkosTUFBTSxDQUFDSyxNQUFsQyxDQUFELENBQVo7QUFBQSxDQUFwQjs7QUFFQSxJQUFNQyxHQUFHLEdBQUcsU0FBTkEsR0FBTTtBQUFBLFNBQ1Y7QUFBSyxTQUFLLEVBQUV4QixjQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBRWMsYUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csR0FESCxFQUVFO0FBQUssU0FBSyxFQUFFTCxTQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBd0JVLFdBQVcsRUFBbkMsQ0FGRixFQUdFLE1BQUMsa0RBQUQ7QUFBVyxRQUFJLEVBQUMsR0FBaEI7QUFBb0IsU0FBSyxFQUFDLE9BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLE1BQUMsa0RBQUQ7QUFBVyxRQUFJLEVBQUMsT0FBaEI7QUFBd0IsU0FBSyxFQUFDLE1BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKRixDQURGLEVBUUU7QUFBSyxTQUFLLEVBQUVMLGFBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsU0FBSyxFQUFFQyxpQkFBVjtBQUE2QixRQUFJLEVBQUMsOEJBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxhQUFUO0FBQXVCLFVBQU0sRUFBQyxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixFQUlFO0FBQUcsU0FBSyxFQUFFQSxpQkFBVjtBQUE2QixRQUFJLEVBQUMsdUNBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE9BQUcsRUFBQyxlQUFUO0FBQXlCLFVBQU0sRUFBQyxNQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FKRixDQVJGLENBRFU7QUFBQSxDQUFaOztLQUFNUyxHO0FBb0JTQSxrRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkJ1dHRvbiBmcm9tICcuL05hdkJ1dHRvbidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgY29udGFpbmVyU3R5bGUgPSB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjJmMmYyJyxcbiAgcGFkZGluZzogJzFlbScsXG4gIGJvcmRlclJhZGl1czogJzAuNGVtJyxcbiAgYm94U2hhZG93OiAnMHB4IDBweCAzMHB4IDBweCByZ2JhKDEwMCwgMTAwLCAxMDAsIDAuNSknLFxufVxuXG5jb25zdCBpY29uU3R5bGUgPSB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgbWFyZ2luUmlnaHQ6ICcxZW0nLFxuICBib3JkZXJSYWRpdXM6ICcxLjVlbScsXG4gIGhlaWdodDogJzJlbScsXG4gIHdpZHRoOiAnMmVtJyxcbiAgZm9udFNpemU6ICcxLjRlbScsXG4gIGJhY2tncm91bmRDb2xvcjogJyNmZWZlZmUnLFxufVxuXG5jb25zdCBuYXZHcm91cFN0eWxlID0ge1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbn1cblxuY29uc3QgZXh0ZXJuYWxMaW5rU3R5bGUgPSB7XG4gIG1hcmdpbkxlZnQ6ICcwLjhlbScsXG4gIGZpbHRlcjpcbiAgICAnaW52ZXJ0KDE0JSkgc2VwaWEoMCUpIHNhdHVyYXRlKDMlKSBodWUtcm90YXRlKDE4OWRlZykgYnJpZ2h0bmVzcygxMDAlKSBjb250cmFzdCg4NCUpJyxcbn1cblxuY29uc3QgZW1vamlzID0gWyfwn6a+JywgJ/CfjrgnLCAn8J+kpvCfj7vigI3imYLvuI8nLCAn8J+krycsICfwn5qAJywgJ/CfpKknLCAn8J+kkycsICfwn5CRJywgJ/CfjaMnLCAn8J+OricsICfwn5e6J11cblxuY29uc3QgcmFuZG9tRW1vamkgPSAoKSA9PiBlbW9qaXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZW1vamlzLmxlbmd0aCldXG5cbmNvbnN0IE5hdiA9ICgpID0+IChcbiAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9PlxuICAgIDxkaXYgc3R5bGU9e25hdkdyb3VwU3R5bGV9PlxuICAgICAgeycgJ31cbiAgICAgIDxkaXYgc3R5bGU9e2ljb25TdHlsZX0+e3JhbmRvbUVtb2ppKCl9PC9kaXY+XG4gICAgICA8TmF2QnV0dG9uIGhyZWY9XCIvXCIgdGl0bGU9XCJBYm91dFwiIC8+XG4gICAgICA8TmF2QnV0dG9uIGhyZWY9XCIvYmxvZ1wiIHRpdGxlPVwiQmxvZ1wiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHN0eWxlPXtuYXZHcm91cFN0eWxlfT5cbiAgICAgIDxhIHN0eWxlPXtleHRlcm5hbExpbmtTdHlsZX0gaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9qb2huc29uc3VcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvZ2l0aHViLnN2Z1wiIGhlaWdodD1cIjI0ZW1cIiAvPlxuICAgICAgPC9hPlxuICAgICAgPGEgc3R5bGU9e2V4dGVybmFsTGlua1N0eWxlfSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2pvaG5zb25zdVwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9saW5rZWRpbi5zdmdcIiBoZWlnaHQ9XCIyNGVtXCIgLz5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

})