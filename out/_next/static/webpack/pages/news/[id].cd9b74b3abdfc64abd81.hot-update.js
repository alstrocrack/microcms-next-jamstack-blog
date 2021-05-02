self["webpackHotUpdate_N_E"]("pages/news/[id]",{

/***/ "./pages/news/[id].js":
/*!****************************!*\
  !*** ./pages/news/[id].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ BlogId; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../styles/Single.module.scss */ "./styles/Single.module.scss");
/* harmony import */ var _styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\\u88D5\u4EBA\\Desktop\\works\\microcms-next-jamstack-blog\\pages\\news\\[id].js";
 // pages/news/[id].js

var __N_SSG = true;
function BlogId(_ref) {
  var blog = _ref.blog;
  console.log(blog);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
    className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_1___default().main),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_1___default().title),
      children: blog.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_1___default().date),
      children: blog.updatedAt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_1___default().image),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: blog.image.url
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_1___default().publishedAt),
      children: blog.publishedAt
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      dangerouslySetInnerHTML: {
        __html: "".concat(blog.content)
      },
      className: (_styles_Single_module_scss__WEBPACK_IMPORTED_MODULE_1___default().post)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
} // 静的生成のためのパスを指定します

_c = BlogId;

var _c;

$RefreshReg$(_c, "BlogId");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbmV3cy9baWRdLmpzIl0sIm5hbWVzIjpbIkJsb2dJZCIsImJsb2ciLCJjb25zb2xlIiwibG9nIiwic2luZ2xlIiwidGl0bGUiLCJ1cGRhdGVkQXQiLCJpbWFnZSIsInVybCIsInB1Ymxpc2hlZEF0IiwiX19odG1sIiwiY29udGVudCIsInBvc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUVBOzs7QUFDZSxTQUFTQSxNQUFULE9BQTBCO0FBQUEsTUFBUkMsSUFBUSxRQUFSQSxJQUFRO0FBQ3ZDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLHNCQUNFO0FBQU0sYUFBUyxFQUFFRyx3RUFBakI7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBRUEseUVBQWY7QUFBQSxnQkFBOEJILElBQUksQ0FBQ0k7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBRUU7QUFBRyxlQUFTLEVBQUVELHdFQUFkO0FBQUEsZ0JBQTRCSCxJQUFJLENBQUNLO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUssZUFBUyxFQUFFRix5RUFBaEI7QUFBQSw2QkFDRTtBQUFLLFdBQUcsRUFBRUgsSUFBSSxDQUFDTSxLQUFMLENBQVdDO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFNRTtBQUFHLGVBQVMsRUFBRUosK0VBQWQ7QUFBQSxnQkFBbUNILElBQUksQ0FBQ1E7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5GLGVBT0U7QUFDRSw2QkFBdUIsRUFBRTtBQUN2QkMsY0FBTSxZQUFLVCxJQUFJLENBQUNVLE9BQVY7QUFEaUIsT0FEM0I7QUFJRSxlQUFTLEVBQUVQLHdFQUFXUTtBQUp4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQsQyxDQUVEOztLQXBCd0JaLE0iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbmV3cy9baWRdLmNkOWI3NGIzYWJkZmM2NGFiZDgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc2luZ2xlIGZyb20gJy4uLy4uL3N0eWxlcy9TaW5nbGUubW9kdWxlLnNjc3MnXHJcblxyXG4vLyBwYWdlcy9uZXdzL1tpZF0uanNcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvZ0lkKHsgYmxvZyB9KSB7XHJcbiAgY29uc29sZS5sb2coYmxvZyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT17c2luZ2xlLm1haW59PlxyXG4gICAgICA8aDEgY2xhc3NOYW1lPXtzaW5nbGUudGl0bGV9PntibG9nLnRpdGxlfTwvaDE+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c2luZ2xlLmRhdGV9PntibG9nLnVwZGF0ZWRBdH08L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzaW5nbGUuaW1hZ2V9PlxyXG4gICAgICAgIDxpbWcgc3JjPXtibG9nLmltYWdlLnVybH0gLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxwIGNsYXNzTmFtZT17c2luZ2xlLnB1Ymxpc2hlZEF0fT57YmxvZy5wdWJsaXNoZWRBdH08L3A+XHJcbiAgICAgIDxkaXZcclxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xyXG4gICAgICAgICAgX19odG1sOiBgJHtibG9nLmNvbnRlbnR9YCxcclxuICAgICAgICB9fVxyXG4gICAgICAgIGNsYXNzTmFtZT17c2luZ2xlLnBvc3R9XHJcbiAgICAgIC8+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4gIFxyXG4vLyDpnZnnmoTnlJ/miJDjga7jgZ/jgoHjga7jg5HjgrnjgpLmjIflrprjgZfjgb7jgZlcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1BhdGhzID0gYXN5bmMgKCkgPT4ge1xyXG5jb25zdCBrZXkgPSB7XHJcbiAgICBoZWFkZXJzOiB7J1gtQVBJLUtFWSc6IHByb2Nlc3MuZW52LkFQSV9LRVl9LFxyXG59O1xyXG5jb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8veXV0b3VydXNoaW1hLm1pY3JvY21zLmlvL2FwaS92MS9uZXdzJywga2V5KVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAuY2F0Y2goKCkgPT4gbnVsbCk7XHJcbmNvbnN0IHBhdGhzID0gZGF0YS5jb250ZW50cy5tYXAoY29udGVudCA9PiBgL25ld3MvJHtjb250ZW50LmlkfWApO1xyXG5yZXR1cm4ge3BhdGhzLCBmYWxsYmFjazogZmFsc2V9O1xyXG59O1xyXG5cclxuLy8g44OH44O844K/44KS44OG44Oz44OX44Os44O844OI44Gr5Y+X44GR5rih44GZ6YOo5YiG44Gu5Yem55CG44KS6KiY6L+w44GX44G+44GZXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jIGNvbnRleHQgPT4ge1xyXG5jb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xyXG5jb25zdCBrZXkgPSB7XHJcbiAgICBoZWFkZXJzOiB7J1gtQVBJLUtFWSc6IHByb2Nlc3MuZW52LkFQSV9LRVl9LFxyXG59O1xyXG5jb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXHJcbiAgICAnaHR0cHM6Ly95dXRvdXJ1c2hpbWEubWljcm9jbXMuaW8vYXBpL3YxL25ld3MvJyArIGlkLFxyXG4gICAga2V5LFxyXG4pXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC5jYXRjaCgoKSA9PiBudWxsKTtcclxucmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICBibG9nOiBkYXRhLFxyXG4gICAgfSxcclxufTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9