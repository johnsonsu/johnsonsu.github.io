webpackHotUpdate_N_E("pages/post/[id]",{

/***/ "./components/Comments.js":
/*!********************************!*\
  !*** ./components/Comments.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/johnsonsu/Developer/github/johnsonsu.github.io/components/Comments.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nvar DISQUS_SCRIPT = 'disq_script';\n\nvar Comments = function Comments(_ref) {\n  _s();\n\n  var fullUrl = _ref.fullUrl,\n      id = _ref.id;\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var sd = document.getElementById(DISQUS_SCRIPT);\n\n    var disqus_config = function disqus_config() {\n      _this.page.url = fullUrl;\n      _this.page.identifier = id;\n    };\n\n    if (!sd) {\n      var d = document;\n      var s = d.createElement('script');\n      s.src = 'https://johnsonsu.disqus.com/embed.js';\n      s.id = DISQUS_SCRIPT;\n      s.async = true;\n      s.setAttribute('data-timestamp', +new Date());\n      d.body.appendChild(s);\n    } else {\n      window.DISQUS.reset({\n        reload: true,\n        config: disqus_config\n      });\n    }\n  }, []);\n  return __jsx(\"div\", {\n    id: \"disqus_thread\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 10\n    }\n  });\n};\n\n_s(Comments, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n\n_c = Comments;\nComments.propTypes = {\n  fullUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,\n  id: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comments);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comments\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Db21tZW50cy5qcz83MzIwIl0sIm5hbWVzIjpbIkRJU1FVU19TQ1JJUFQiLCJDb21tZW50cyIsImZ1bGxVcmwiLCJpZCIsInVzZUVmZmVjdCIsInNkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRpc3F1c19jb25maWciLCJwYWdlIiwidXJsIiwiaWRlbnRpZmllciIsImQiLCJzIiwiY3JlYXRlRWxlbWVudCIsInNyYyIsImFzeW5jIiwic2V0QXR0cmlidXRlIiwiRGF0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIndpbmRvdyIsIkRJU1FVUyIsInJlc2V0IiwicmVsb2FkIiwiY29uZmlnIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUcsYUFBdEI7O0FBRUEsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBcUI7QUFBQTs7QUFBQSxNQUFsQkMsT0FBa0IsUUFBbEJBLE9BQWtCO0FBQUEsTUFBVEMsRUFBUyxRQUFUQSxFQUFTO0FBQ3BDQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QlAsYUFBeEIsQ0FBWDs7QUFDQSxRQUFNUSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQU07QUFDMUIsV0FBSSxDQUFDQyxJQUFMLENBQVVDLEdBQVYsR0FBZ0JSLE9BQWhCO0FBQ0EsV0FBSSxDQUFDTyxJQUFMLENBQVVFLFVBQVYsR0FBdUJSLEVBQXZCO0FBQ0QsS0FIRDs7QUFJQSxRQUFJLENBQUNFLEVBQUwsRUFBUztBQUNQLFVBQU1PLENBQUMsR0FBR04sUUFBVjtBQUNBLFVBQU1PLENBQUMsR0FBR0QsQ0FBQyxDQUFDRSxhQUFGLENBQWdCLFFBQWhCLENBQVY7QUFDQUQsT0FBQyxDQUFDRSxHQUFGLEdBQVEsdUNBQVI7QUFDQUYsT0FBQyxDQUFDVixFQUFGLEdBQU9ILGFBQVA7QUFDQWEsT0FBQyxDQUFDRyxLQUFGLEdBQVUsSUFBVjtBQUNBSCxPQUFDLENBQUNJLFlBQUYsQ0FBZSxnQkFBZixFQUFpQyxDQUFDLElBQUlDLElBQUosRUFBbEM7QUFFQU4sT0FBQyxDQUFDTyxJQUFGLENBQU9DLFdBQVAsQ0FBbUJQLENBQW5CO0FBQ0QsS0FURCxNQVNPO0FBQ0xRLFlBQU0sQ0FBQ0MsTUFBUCxDQUFjQyxLQUFkLENBQW9CO0FBQ2xCQyxjQUFNLEVBQUUsSUFEVTtBQUVsQkMsY0FBTSxFQUFFakI7QUFGVSxPQUFwQjtBQUlEO0FBQ0YsR0FyQlEsRUFxQk4sRUFyQk0sQ0FBVDtBQXNCQSxTQUFPO0FBQUssTUFBRSxFQUFDLGVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFQO0FBQ0QsQ0F4QkQ7O0dBQU1QLFE7O0tBQUFBLFE7QUEwQk5BLFFBQVEsQ0FBQ3lCLFNBQVQsR0FBcUI7QUFDbkJ4QixTQUFPLEVBQUV5QixpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURQO0FBRW5CMUIsSUFBRSxFQUFFd0IsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkM7QUFGRixDQUFyQjtBQUtlNUIsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NvbW1lbnRzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBESVNRVVNfU0NSSVBUID0gJ2Rpc3Ffc2NyaXB0J1xuXG5jb25zdCBDb21tZW50cyA9ICh7IGZ1bGxVcmwsIGlkIH0pID0+IHtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKERJU1FVU19TQ1JJUFQpXG4gICAgY29uc3QgZGlzcXVzX2NvbmZpZyA9ICgpID0+IHtcbiAgICAgIHRoaXMucGFnZS51cmwgPSBmdWxsVXJsXG4gICAgICB0aGlzLnBhZ2UuaWRlbnRpZmllciA9IGlkXG4gICAgfVxuICAgIGlmICghc2QpIHtcbiAgICAgIGNvbnN0IGQgPSBkb2N1bWVudFxuICAgICAgY29uc3QgcyA9IGQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgICAgIHMuc3JjID0gJ2h0dHBzOi8vam9obnNvbnN1LmRpc3F1cy5jb20vZW1iZWQuanMnXG4gICAgICBzLmlkID0gRElTUVVTX1NDUklQVFxuICAgICAgcy5hc3luYyA9IHRydWVcbiAgICAgIHMuc2V0QXR0cmlidXRlKCdkYXRhLXRpbWVzdGFtcCcsICtuZXcgRGF0ZSgpKVxuXG4gICAgICBkLmJvZHkuYXBwZW5kQ2hpbGQocylcbiAgICB9IGVsc2Uge1xuICAgICAgd2luZG93LkRJU1FVUy5yZXNldCh7XG4gICAgICAgIHJlbG9hZDogdHJ1ZSxcbiAgICAgICAgY29uZmlnOiBkaXNxdXNfY29uZmlnLFxuICAgICAgfSlcbiAgICB9XG4gIH0sIFtdKVxuICByZXR1cm4gPGRpdiBpZD1cImRpc3F1c190aHJlYWRcIj48L2Rpdj5cbn1cblxuQ29tbWVudHMucHJvcFR5cGVzID0ge1xuICBmdWxsVXJsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRzXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Comments.js\n");

/***/ })

})