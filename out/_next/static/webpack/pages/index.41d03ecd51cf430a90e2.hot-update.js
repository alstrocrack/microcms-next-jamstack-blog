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

  function toggleProfile() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImJsb2ciLCJ0b2dnbGVQcm9maWxlIiwicHJvZmlsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpc09wZW4iLCJnc2FwIiwibGVmdCIsImxheW91dCIsImhlYWRlciIsIm1haW4iLCJvcGVuUHJvZmlsZSIsIm1hcCIsImlkIiwidGl0bGUiLCJjYXRlZ29yeSIsIm5hbWUiLCJ1cGRhdGVkQXQiLCJzbGljZSIsInJlcGxhY2UiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLElBQVQsT0FBd0I7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBRXJDLFdBQVNDLGFBQVQsR0FBeUI7QUFDdkIsUUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FBaEI7QUFDQSxRQUFJQyxNQUFNLEdBQUcsS0FBYjs7QUFDQSxRQUFHLENBQUNBLE1BQUosRUFBWTtBQUNWQyxrREFBQSxDQUFRSixPQUFSLEVBQWlCO0FBQ2ZLLFlBQUksRUFBRTtBQURTLE9BQWpCO0FBR0FGLFlBQU0sR0FBRyxDQUFDQSxNQUFWO0FBQ0QsS0FMRCxNQUtPO0FBQ0xDLGtEQUFBLENBQVFKLE9BQVIsRUFBaUI7QUFDZkssWUFBSSxFQUFFO0FBRFMsT0FBakI7QUFHQUYsWUFBTSxHQUFHLENBQUNBLE1BQVY7QUFDRDtBQUNGOztBQUVELHNCQUNFO0FBQUssYUFBUyxFQUFFRyw2RUFBaEI7QUFBQSw0QkFDRTtBQUFRLGVBQVMsRUFBRUMsNkVBQW5CO0FBQXFDLFFBQUUsRUFBQyxTQUF4QztBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUEsMEVBQWhCO0FBQStCLGVBQU8sRUFBRVIsYUFBeEM7QUFBQSwrQkFDRTtBQUFLLGFBQUcsRUFB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RTtBQUFNLDZCQUFTLEVBQUVKLDBFQUFqQjtBQUFBLDhCQUFpQ1YsSUFBSSxDQUFDZSxRQUFMLENBQWNDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBS0U7QUFBRywyQkFBUyxFQUFFTixzRUFBZDtBQUFBLDRCQUEwQlYsSUFBSSxDQUFDaUIsU0FBTCxDQUFlQyxLQUFmLENBQXFCLENBQXJCLEVBQXdCLEVBQXhCLEVBQTRCQyxPQUE1QixDQUFvQyxJQUFwQyxFQUEwQyxHQUExQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGLGVBTUU7QUFBRywyQkFBUyxFQUFFVCx5RUFBZDtBQUFBLDRCQUE2QlYsSUFBSSxDQUFDb0I7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBU3BCLElBQUksQ0FBQ2EsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURZO0FBQUEsU0FBYjtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMRixlQXdCRTtBQUFHLGlCQUFTLEVBQUVILDJFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9FRCxDLENBR0Q7O0tBekZ3QlgsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40MWQwM2VjZDUxY2Y0MzBhOTBlMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvaW5kZXguanNcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IGhlYWRlciBmcm9tICcuLi9zdHlsZXMvSGVhZGVyLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgbGF5b3V0IGZyb20gJy4uL3N0eWxlcy9MYXlvdXQubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBtYWluIGZyb20gJy4uL3N0eWxlcy9NYWluLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgZ3NhcCBmcm9tICdnc2FwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IGJsb2cgfSkge1xyXG5cclxuICBmdW5jdGlvbiB0b2dnbGVQcm9maWxlKCkge1xyXG4gICAgY29uc3QgcHJvZmlsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9maWxlJyk7XHJcbiAgICBsZXQgaXNPcGVuID0gZmFsc2U7XHJcbiAgICBpZighaXNPcGVuKSB7XHJcbiAgICAgIGdzYXAudG8ocHJvZmlsZSwge1xyXG4gICAgICAgIGxlZnQ6IDBcclxuICAgICAgfSk7XHJcbiAgICAgIGlzT3BlbiA9ICFpc09wZW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnc2FwLnRvKHByb2ZpbGUsIHtcclxuICAgICAgICBsZWZ0OiAnLTEwMCUnXHJcbiAgICAgIH0pO1xyXG4gICAgICBpc09wZW4gPSAhaXNPcGVuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtsYXlvdXQuY29udGFpbmVyfT5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e2hlYWRlci5jb250YWluZXJ9IGlkPVwicHJvZmlsZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtoZWFkZXIuYnV0dG9ufSBvbkNsaWNrPXt0b2dnbGVQcm9maWxlfT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9iLWNsb3NlLWljb24uc3ZnXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtoZWFkZXIud3JhcH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aGVhZGVyLmltYWdlfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ItaGVhZGVyLWltYWdlLmpwZ1wiIGFsdD1cInl1dG8gdXJ1c2hpbWFcIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17aGVhZGVyLm5hbWV9Pua8huWztuijleS6ujwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17aGVhZGVyLnRleHR9PlxyXG4gICAgICAgICAg56aP5bKh55yM5YyX5Lmd5bee5biC5Ye66Lqr44CBOTblubTnlJ/jgb7jgozjga4yNOats+OAgeWwhOaJi+W6p+OAguemj+WyoeecjOeri+adseetkemrmOetiemrmOagoeOAgTHmtarjgpLntYzjgabkuZ3lt57lpKflrablt6Xlrabpg6jlu7rnr4nlrabnp5HljZLmpa3jgII8YnIvPlxyXG4gICAgICAgICAg5bCP5a2m5qCh6auY5a2m5bm044GL44KJ6auY5qCh5Y2S5qWt44G+44Gn6YOo5rS75YuV44Gn44K144OD44Kr44O844KS44GX44Gm44GE44G+44GX44Gf44CCXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtoZWFkZXIuc25zfT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17aGVhZGVyLmljb259PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL0Zyb250ZW5kXzEyMjBcIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYi10d2l0dGVyLWljb24ucG5nXCIgYWx0PVwidHdpdHRlclwiLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2hlYWRlci5pY29ufT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Byb2ZpbGUucGhwP2lkPTEwMDAzNjE1MzM2MTg0MVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9iLWZhY2Vib29rLWljb24ucG5nXCIgYWx0PVwiZmFjZWJvb2tcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtoZWFkZXIuaWNvbn0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ZdXRvVXJ1c2hpbWFcIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYi1naXRodWItaWNvbi5wbmdcIiBhbHQ9XCJnaXRodWJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17bWFpbi5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluLmJ1dHRvbn0gb25DbGljaz17b3BlblByb2ZpbGV9PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2ItYnV0dG9uLWljb24uc3ZnXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e21haW4udGl0bGV9Pll1dG8gVXJ1c2hpbWE8L2gxPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e21haW4uYmxvZ0xpc3R9PlxyXG4gICAgICAgICAgey8qIOODh+ODkOODg+OCsOeUqCAqL31cclxuICAgICAgICAgIHsvKiB7Y29uc29sZS5sb2coYmxvZyl9ICovfVxyXG4gICAgICAgICAgey8qIOODh+ODkOODg+OCsOeUqCAqL31cclxuICAgICAgICAgIHtibG9nLm1hcChibG9nID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17YmxvZy5pZH0gY2xhc3NOYW1lPXttYWluLmNhcmR9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy8ke2Jsb2cuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e21haW4ubGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e21haW4uYmxvZ1RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7YmxvZy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e21haW4uY2F0ZWdvcnl9PntibG9nLmNhdGVnb3J5Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e21haW4uZGF0ZX0+e2Jsb2cudXBkYXRlZEF0LnNsaWNlKDAsIDEwKS5yZXBsYWNlKC8tL2csICcvJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e21haW4uY29udGVudH0+e2Jsb2cuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e21haW4uY29weXJpZ2h0fT5Db3B5cmlnaHQgwqkyMDIxIFl1dG9VcnVzaGltYSBBbGwgUmlnaHRzIFJlc2VydmVkLjwvcD5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbi8vIOODh+ODvOOCv+OCkuODhuODs+ODl+ODrOODvOODiOOBq+WPl+OBkea4oeOBmemDqOWIhuOBruWHpueQhuOCkuiomOi/sOOBl+OBvuOBmVxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3Qga2V5ID0ge1xyXG4gICAgaGVhZGVyczogeydYLUFQSS1LRVknOiBwcm9jZXNzLmVudi5BUElfS0VZfSxcclxuICB9O1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly95dXRvdXJ1c2hpbWEubWljcm9jbXMuaW8vYXBpL3YxL25ld3MnLCBrZXkpXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC5jYXRjaCgoKSA9PiBudWxsKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgYmxvZzogZGF0YS5jb250ZW50cyxcclxuICAgIH0sXHJcbiAgfTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9