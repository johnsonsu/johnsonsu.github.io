webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavButton */ \"./components/NavButton.js\");\nvar _this = undefined,\n    _jsxFileName = \"/Users/johnsonsu/Developer/github/johnsonsu.github.io/components/Nav.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nvar containerStyle = {\n  display: 'flex',\n  flexDirection: 'row',\n  alignItems: 'center',\n  justifyContent: 'space-between',\n  backgroundColor: '#f2f2f2',\n  padding: '1em',\n  borderRadius: '0.4em',\n  boxShadow: '0px 0px 30px 0px rgba(100, 100, 100, 0.5)'\n};\nvar iconStyle = {\n  display: 'flex',\n  alignItems: 'center',\n  justifyContent: 'center',\n  marginRight: '1em',\n  borderRadius: '1.5em',\n  height: '2em',\n  width: '2em',\n  fontSize: '1.4em',\n  backgroundColor: '#fefefe'\n};\nvar navGroupStyle = {\n  display: 'flex',\n  flexDirection: 'row',\n  alignItems: 'center'\n};\nvar externalLinkStyle = {\n  marginLeft: '0.8em',\n  filter: 'invert(14%) sepia(0%) saturate(3%) hue-rotate(189deg) brightness(100%) contrast(84%)'\n};\nvar emojis = ['🦾', '🎸', '🤦🏻‍♂️', '🤯', '🚀', '🤩', '🤓', '🐑', '🍣', '🎮', '🗺'];\n\nvar randomEmoji = function randomEmoji() {\n  return emojis[Math.floor(Math.random() * emojis.length)];\n};\n\nvar Nav = function Nav() {\n  return __jsx(\"div\", {\n    style: containerStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    style: navGroupStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 44,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    style: iconStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }\n  }, randomEmoji()), __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    href: \"/\",\n    title: \"About\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }), __jsx(_NavButton__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    href: \"/blog\",\n    title: \"Blog\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }\n  })), __jsx(\"div\", {\n    style: navGroupStyle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    style: externalLinkStyle,\n    href: \"https://github.com/johnsonsu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"/github.svg\",\n    height: \"24em\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 9\n    }\n  })), __jsx(\"a\", {\n    style: externalLinkStyle,\n    href: \"https://www.linkedin.com/in/johnsonsu\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: \"/linkedin.svg\",\n    height: \"24em\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 9\n    }\n  }))));\n};\n\n_c = Nav;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Nav);\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/YTEzMyJdLCJuYW1lcyI6WyJjb250YWluZXJTdHlsZSIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImljb25TdHlsZSIsIm1hcmdpblJpZ2h0IiwiaGVpZ2h0Iiwid2lkdGgiLCJmb250U2l6ZSIsIm5hdkdyb3VwU3R5bGUiLCJleHRlcm5hbExpbmtTdHlsZSIsIm1hcmdpbkxlZnQiLCJmaWx0ZXIiLCJlbW9qaXMiLCJyYW5kb21FbW9qaSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsIk5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxjQUFjLEdBQUc7QUFDckJDLFNBQU8sRUFBRSxNQURZO0FBRXJCQyxlQUFhLEVBQUUsS0FGTTtBQUdyQkMsWUFBVSxFQUFFLFFBSFM7QUFJckJDLGdCQUFjLEVBQUUsZUFKSztBQUtyQkMsaUJBQWUsRUFBRSxTQUxJO0FBTXJCQyxTQUFPLEVBQUUsS0FOWTtBQU9yQkMsY0FBWSxFQUFFLE9BUE87QUFRckJDLFdBQVMsRUFBRTtBQVJVLENBQXZCO0FBV0EsSUFBTUMsU0FBUyxHQUFHO0FBQ2hCUixTQUFPLEVBQUUsTUFETztBQUVoQkUsWUFBVSxFQUFFLFFBRkk7QUFHaEJDLGdCQUFjLEVBQUUsUUFIQTtBQUloQk0sYUFBVyxFQUFFLEtBSkc7QUFLaEJILGNBQVksRUFBRSxPQUxFO0FBTWhCSSxRQUFNLEVBQUUsS0FOUTtBQU9oQkMsT0FBSyxFQUFFLEtBUFM7QUFRaEJDLFVBQVEsRUFBRSxPQVJNO0FBU2hCUixpQkFBZSxFQUFFO0FBVEQsQ0FBbEI7QUFZQSxJQUFNUyxhQUFhLEdBQUc7QUFDcEJiLFNBQU8sRUFBRSxNQURXO0FBRXBCQyxlQUFhLEVBQUUsS0FGSztBQUdwQkMsWUFBVSxFQUFFO0FBSFEsQ0FBdEI7QUFNQSxJQUFNWSxpQkFBaUIsR0FBRztBQUN4QkMsWUFBVSxFQUFFLE9BRFk7QUFFeEJDLFFBQU0sRUFDSjtBQUhzQixDQUExQjtBQU1BLElBQU1DLE1BQU0sR0FBRyxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsU0FBYixFQUF3QixJQUF4QixFQUE4QixJQUE5QixFQUFvQyxJQUFwQyxFQUEwQyxJQUExQyxFQUFnRCxJQUFoRCxFQUFzRCxJQUF0RCxFQUE0RCxJQUE1RCxFQUFrRSxJQUFsRSxDQUFmOztBQUVBLElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsU0FBTUQsTUFBTSxDQUFDRSxJQUFJLENBQUNDLEtBQUwsQ0FBV0QsSUFBSSxDQUFDRSxNQUFMLEtBQWdCSixNQUFNLENBQUNLLE1BQWxDLENBQUQsQ0FBWjtBQUFBLENBQXBCOztBQUVBLElBQU1DLEdBQUcsR0FBRyxTQUFOQSxHQUFNO0FBQUEsU0FDVjtBQUFLLFNBQUssRUFBRXhCLGNBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssU0FBSyxFQUFFYyxhQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLFNBQUssRUFBRUwsU0FBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXdCVSxXQUFXLEVBQW5DLENBREYsRUFFRSxNQUFDLGtEQUFEO0FBQVcsUUFBSSxFQUFDLEdBQWhCO0FBQW9CLFNBQUssRUFBQyxPQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsRUFHRSxNQUFDLGtEQUFEO0FBQVcsUUFBSSxFQUFDLE9BQWhCO0FBQXdCLFNBQUssRUFBQyxNQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEYsQ0FERixFQU9FO0FBQUssU0FBSyxFQUFFTCxhQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFNBQUssRUFBRUMsaUJBQVY7QUFBNkIsUUFBSSxFQUFDLDhCQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsYUFBVDtBQUF1QixVQUFNLEVBQUMsTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRTtBQUFHLFNBQUssRUFBRUEsaUJBQVY7QUFBNkIsUUFBSSxFQUFDLHVDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUMsZUFBVDtBQUF5QixVQUFNLEVBQUMsTUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBSkYsQ0FQRixDQURVO0FBQUEsQ0FBWjs7S0FBTVMsRztBQW1CU0Esa0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZCdXR0b24gZnJvbSAnLi9OYXZCdXR0b24nXG5cbmNvbnN0IGNvbnRhaW5lclN0eWxlID0ge1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcbiAgYmFja2dyb3VuZENvbG9yOiAnI2YyZjJmMicsXG4gIHBhZGRpbmc6ICcxZW0nLFxuICBib3JkZXJSYWRpdXM6ICcwLjRlbScsXG4gIGJveFNoYWRvdzogJzBweCAwcHggMzBweCAwcHggcmdiYSgxMDAsIDEwMCwgMTAwLCAwLjUpJyxcbn1cblxuY29uc3QgaWNvblN0eWxlID0ge1xuICBkaXNwbGF5OiAnZmxleCcsXG4gIGFsaWduSXRlbXM6ICdjZW50ZXInLFxuICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gIG1hcmdpblJpZ2h0OiAnMWVtJyxcbiAgYm9yZGVyUmFkaXVzOiAnMS41ZW0nLFxuICBoZWlnaHQ6ICcyZW0nLFxuICB3aWR0aDogJzJlbScsXG4gIGZvbnRTaXplOiAnMS40ZW0nLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmVmZWZlJyxcbn1cblxuY29uc3QgbmF2R3JvdXBTdHlsZSA9IHtcbiAgZGlzcGxheTogJ2ZsZXgnLFxuICBmbGV4RGlyZWN0aW9uOiAncm93JyxcbiAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG59XG5cbmNvbnN0IGV4dGVybmFsTGlua1N0eWxlID0ge1xuICBtYXJnaW5MZWZ0OiAnMC44ZW0nLFxuICBmaWx0ZXI6XG4gICAgJ2ludmVydCgxNCUpIHNlcGlhKDAlKSBzYXR1cmF0ZSgzJSkgaHVlLXJvdGF0ZSgxODlkZWcpIGJyaWdodG5lc3MoMTAwJSkgY29udHJhc3QoODQlKScsXG59XG5cbmNvbnN0IGVtb2ppcyA9IFsn8J+mvicsICfwn464JywgJ/CfpKbwn4+74oCN4pmC77iPJywgJ/CfpK8nLCAn8J+agCcsICfwn6SpJywgJ/CfpJMnLCAn8J+QkScsICfwn42jJywgJ/Cfjq4nLCAn8J+XuiddXG5cbmNvbnN0IHJhbmRvbUVtb2ppID0gKCkgPT4gZW1vamlzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGVtb2ppcy5sZW5ndGgpXVxuXG5jb25zdCBOYXYgPSAoKSA9PiAoXG4gIDxkaXYgc3R5bGU9e2NvbnRhaW5lclN0eWxlfT5cbiAgICA8ZGl2IHN0eWxlPXtuYXZHcm91cFN0eWxlfT5cbiAgICAgIDxkaXYgc3R5bGU9e2ljb25TdHlsZX0+e3JhbmRvbUVtb2ppKCl9PC9kaXY+XG4gICAgICA8TmF2QnV0dG9uIGhyZWY9XCIvXCIgdGl0bGU9XCJBYm91dFwiIC8+XG4gICAgICA8TmF2QnV0dG9uIGhyZWY9XCIvYmxvZ1wiIHRpdGxlPVwiQmxvZ1wiIC8+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHN0eWxlPXtuYXZHcm91cFN0eWxlfT5cbiAgICAgIDxhIHN0eWxlPXtleHRlcm5hbExpbmtTdHlsZX0gaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9qb2huc29uc3VcIj5cbiAgICAgICAgPGltZyBzcmM9XCIvZ2l0aHViLnN2Z1wiIGhlaWdodD1cIjI0ZW1cIiAvPlxuICAgICAgPC9hPlxuICAgICAgPGEgc3R5bGU9e2V4dGVybmFsTGlua1N0eWxlfSBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2pvaG5zb25zdVwiPlxuICAgICAgICA8aW1nIHNyYz1cIi9saW5rZWRpbi5zdmdcIiBoZWlnaHQ9XCIyNGVtXCIgLz5cbiAgICAgIDwvYT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdlxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

})