self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Header.module.scss */ "./styles/Header.module.scss");
/* harmony import */ var _styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Layout.module.scss */ "./styles/Layout.module.scss");
/* harmony import */ var _styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Main.module.scss */ "./styles/Main.module.scss");
/* harmony import */ var _styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\\u88D5\u4EBA\\Desktop\\works\\microcms-next-jamstack-blog\\pages\\index.js";
// pages/index.js





var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var blog = _ref.blog;

  function openProfile() {
    var profile = document.getElementById('profile');
    var isOpen = false;

    if (!isOpen) {
      gsap__WEBPACK_IMPORTED_MODULE_2__.default.to(profile, {
        left: 0
      });
      isOpen = !isOpen;
    } else {
      gsap__WEBPACK_IMPORTED_MODULE_2__.default.to(profile, {
        left: '-100%'
      });
      isOpen = !isOpen;
    }
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
      id: "profile",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button),
        onClick: toggleProfile,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "./b-close-icon.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrap),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().image),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "./b-header-image.jpg",
            alt: "yuto urushima"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().name),
          children: "\u6F06\u5CF6\u88D5\u4EBA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text),
          children: ["\u798F\u5CA1\u770C\u5317\u4E5D\u5DDE\u5E02\u51FA\u8EAB\u300196\u5E74\u751F\u307E\u308C\u306E24\u6B73\u3001\u5C04\u624B\u5EA7\u3002\u798F\u5CA1\u770C\u7ACB\u6771\u7B51\u9AD8\u7B49\u9AD8\u6821\u30011\u6D6A\u3092\u7D4C\u3066\u4E5D\u5DDE\u5927\u5B66\u5DE5\u5B66\u90E8\u5EFA\u7BC9\u5B66\u79D1\u5352\u696D\u3002", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 66
          }, this), "\u5C0F\u5B66\u6821\u9AD8\u5B66\u5E74\u304B\u3089\u9AD8\u6821\u5352\u696D\u307E\u3067\u90E8\u6D3B\u52D5\u3067\u30B5\u30C3\u30AB\u30FC\u3092\u3057\u3066\u3044\u307E\u3057\u305F\u3002"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sns),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "https://twitter.com/Frontend_1220",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "./b-twitter-icon.png",
                  alt: "twitter"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 44,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "https://www.facebook.com/profile.php?id=100036153361841",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "./b-facebook-icon.png",
                  alt: "facebook"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 52,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().icon),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "https://github.com/YutoUrushima",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                target: "_blank",
                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                  src: "./b-github-icon.png",
                  alt: "github"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 59,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().button),
        onClick: openProfile,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "./b-button-icon.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
        children: "Yuto Urushima"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().blogList),
        children: blog.map(function (blog) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().card),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
              href: "/news/".concat(blog.id),
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().link),
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
                  className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().blogTitle),
                  children: [blog.title, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
                    className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().category),
                    children: blog.category.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 79,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().date),
                  children: blog.updatedAt.slice(0, 10).replace(/-/g, '/')
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                  children: blog.content
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 84,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this)
          }, blog.id, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().copyright),
        children: "Copyright \xA92021 YutoUrushima All Rights Reserved."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
} // データをテンプレートに受け渡す部分の処理を記述します

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImJsb2ciLCJvcGVuUHJvZmlsZSIsInByb2ZpbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaXNPcGVuIiwiZ3NhcCIsImxlZnQiLCJsYXlvdXQiLCJoZWFkZXIiLCJ0b2dnbGVQcm9maWxlIiwibWFpbiIsIm1hcCIsImlkIiwidGl0bGUiLCJjYXRlZ29yeSIsIm5hbWUiLCJ1cGRhdGVkQXQiLCJzbGljZSIsInJlcGxhY2UiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLElBQVQsT0FBd0I7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBRXJDLFdBQVNDLFdBQVQsR0FBdUI7QUFDckIsUUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBaEI7QUFDQSxRQUFJQyxNQUFNLEdBQUcsS0FBYjs7QUFDQSxRQUFHLENBQUNBLE1BQUosRUFBWTtBQUNWQyxrREFBQSxDQUFRSixPQUFSLEVBQWlCO0FBQ2ZLLFlBQUksRUFBRTtBQURTLE9BQWpCO0FBR0FGLFlBQU0sR0FBRyxDQUFDQSxNQUFWO0FBQ0QsS0FMRCxNQUtPO0FBQ0xDLGtEQUFBLENBQVFKLE9BQVIsRUFBaUI7QUFDZkssWUFBSSxFQUFFO0FBRFMsT0FBakI7QUFHQUYsWUFBTSxHQUFHLENBQUNBLE1BQVY7QUFDRDtBQUNGOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFFRyw2RUFBaEI7QUFBQSw0QkFDRTtBQUFRLGVBQVMsRUFBRUMsNkVBQW5CO0FBQXFDLFFBQUUsRUFBQyxTQUF4QztBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUEsMEVBQWhCO0FBQStCLGVBQU8sRUFBRUMsYUFBeEM7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFB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RTtBQUFNLDZCQUFTLEVBQUVILDBFQUFqQjtBQUFBLDhCQUFpQ1gsSUFBSSxDQUFDZSxRQUFMLENBQWNDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBS0U7QUFBRywyQkFBUyxFQUFFTCxzRUFBZDtBQUFBLDRCQUEwQlgsSUFBSSxDQUFDaUIsU0FBTCxDQUFlQyxLQUFmLENBQXFCLENBQXJCLEVBQXdCLEVBQXhCLEVBQTRCQyxPQUE1QixDQUFvQyxJQUFwQyxFQUEwQyxHQUExQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGLGVBTUU7QUFBRywyQkFBUyxFQUFFUix5RUFBZDtBQUFBLDRCQUE2QlgsSUFBSSxDQUFDb0I7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBU3BCLElBQUksQ0FBQ2EsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURZO0FBQUEsU0FBYjtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQXdCRTtBQUFHLGlCQUFTLEVBQUVGLDJFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9FRCxDLENBR0Q7O0tBekZ3QlosSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMzFjMmFhNjUwNWJjZjRjMTFhMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXguanNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGhlYWRlciBmcm9tICcuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgbGF5b3V0IGZyb20gJy4uL3N0eWxlcy9MYXlvdXQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBtYWluIGZyb20gJy4uL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGJsb2cgfSkge1xyXG5cclxuICBmdW5jdGlvbiBvcGVuUHJvZmlsZSgpIHtcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZScpO1xyXG4gICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xyXG4gICAgaWYoIWlzT3Blbikge1xyXG4gICAgICBnc2FwLnRvKHByb2ZpbGUsIHtcclxuICAgICAgICBsZWZ0OiAwXHJcbiAgICAgIH0pO1xyXG4gICAgICBpc09wZW4gPSAhaXNPcGVuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ3NhcC50byhwcm9maWxlLCB7XHJcbiAgICAgICAgbGVmdDogJy0xMDAlJ1xyXG4gICAgICB9KTtcclxuICAgICAgaXNPcGVuID0gIWlzT3BlbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17bGF5b3V0LmNvbnRhaW5lcn0+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtoZWFkZXIuY29udGFpbmVyfSBpZD1cInByb2ZpbGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aGVhZGVyLmJ1dHRvbn0gb25DbGljaz17dG9nZ2xlUHJvZmlsZX0+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi4vYi1jbG9zZS1pY29uLnN2Z1wiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aGVhZGVyLndyYXB9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2hlYWRlci5pbWFnZX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9iLWhlYWRlci1pbWFnZS5qcGdcIiBhbHQ9XCJ5dXRvIHVydXNoaW1hXCIvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2hlYWRlci5uYW1lfT7mvIbls7boo5Xkuro8L3A+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e2hlYWRlci50ZXh0fT5cclxuICAgICAgICAgIOemj+WyoeecjOWMl+S5neW3nuW4guWHuui6q+OAgTk25bm055Sf44G+44KM44GuMjTmrbPjgIHlsITmiYvluqfjgILnpo/lsqHnnIznq4vmnbHnrZHpq5jnrYnpq5jmoKHjgIEx5rWq44KS57WM44Gm5Lmd5bee5aSn5a2m5bel5a2m6YOo5bu656+J5a2m56eR5Y2S5qWt44CCPGJyLz5cclxuICAgICAgICAgIOWwj+WtpuagoemrmOWtpuW5tOOBi+OCiemrmOagoeWNkualreOBvuOBp+mDqOa0u+WLleOBp+OCteODg+OCq+ODvOOCkuOBl+OBpuOBhOOBvuOBl+OBn+OAglxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17aGVhZGVyLnNuc30+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2hlYWRlci5pY29ufT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9Gcm9udGVuZF8xMjIwXCI+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ItdHdpdHRlci1pY29uLnBuZ1wiIGFsdD1cInR3aXR0ZXJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtoZWFkZXIuaWNvbn0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9wcm9maWxlLnBocD9pZD0xMDAwMzYxNTMzNjE4NDFcIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYi1mYWNlYm9vay1pY29uLnBuZ1wiIGFsdD1cImZhY2Vib29rXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17aGVhZGVyLmljb259PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vWXV0b1VydXNoaW1hXCI+XHJcbiAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ItZ2l0aHViLWljb24ucG5nXCIgYWx0PVwiZ2l0aHViXCIvPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e21haW4uY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bWFpbi5idXR0b259IG9uQ2xpY2s9e29wZW5Qcm9maWxlfT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9iLWJ1dHRvbi1pY29uLnN2Z1wiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPXttYWluLnRpdGxlfT5ZdXRvIFVydXNoaW1hPC9oMT5cclxuICAgICAgICA8dWwgY2xhc3NOYW1lPXttYWluLmJsb2dMaXN0fT5cclxuICAgICAgICAgIHsvKiDjg4fjg5Djg4PjgrDnlKggKi99XHJcbiAgICAgICAgICB7Lyoge2NvbnNvbGUubG9nKGJsb2cpfSAqL31cclxuICAgICAgICAgIHsvKiDjg4fjg5Djg4PjgrDnlKggKi99XHJcbiAgICAgICAgICB7YmxvZy5tYXAoYmxvZyA9PiAoXHJcbiAgICAgICAgICAgIDxsaSBrZXk9e2Jsb2cuaWR9IGNsYXNzTmFtZT17bWFpbi5jYXJkfT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL25ld3MvJHtibG9nLmlkfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXttYWluLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPXttYWluLmJsb2dUaXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAge2Jsb2cudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXttYWluLmNhdGVnb3J5fT57YmxvZy5jYXRlZ29yeS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXttYWluLmRhdGV9PntibG9nLnVwZGF0ZWRBdC5zbGljZSgwLCAxMCkucmVwbGFjZSgvLS9nLCAnLycpfTwvcD5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXttYWluLmNvbnRlbnR9PntibG9nLmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdWw+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPXttYWluLmNvcHlyaWdodH0+Q29weXJpZ2h0IMKpMjAyMSBZdXRvVXJ1c2hpbWEgQWxsIFJpZ2h0cyBSZXNlcnZlZC48L3A+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblxyXG4vLyDjg4fjg7zjgr/jgpLjg4bjg7Pjg5fjg6zjg7zjg4jjgavlj5fjgZHmuKHjgZnpg6jliIbjga7lh6bnkIbjgpLoqJjov7DjgZfjgb7jgZlcclxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGtleSA9IHtcclxuICAgIGhlYWRlcnM6IHsnWC1BUEktS0VZJzogcHJvY2Vzcy5lbnYuQVBJX0tFWX0sXHJcbiAgfTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8veXV0b3VydXNoaW1hLm1pY3JvY21zLmlvL2FwaS92MS9uZXdzJywga2V5KVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAuY2F0Y2goKCkgPT4gbnVsbCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGJsb2c6IGRhdGEuY29udGVudHMsXHJcbiAgICB9LFxyXG4gIH07XHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==