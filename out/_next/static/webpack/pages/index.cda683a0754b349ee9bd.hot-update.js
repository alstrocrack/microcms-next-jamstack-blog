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

  function noScroll(e) {
    e.preventDefault();
    document.addEventListener('touchmove', noScroll, {
      passive: false
    });
  }

  function openProfile() {
    var profile = document.getElementById('profile');
    gsap__WEBPACK_IMPORTED_MODULE_2__.default.to(profile, {
      left: 0
    });
    noScroll(e);
  }

  function closeProfile() {
    var profile = document.getElementById('profile');
    gsap__WEBPACK_IMPORTED_MODULE_2__.default.to(profile, {
      left: '-100%'
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Layout_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),
      id: "profile",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().button),
        onClick: closeProfile,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
          src: "./b-close-icon.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
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
            lineNumber: 38,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().name),
          children: "\u6F06\u5CF6\u88D5\u4EBA"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
          className: (_styles_Header_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text),
          children: ["\u798F\u5CA1\u770C\u5317\u4E5D\u5DDE\u5E02\u51FA\u8EAB\u300196\u5E74\u751F\u307E\u308C\u306E24\u6B73\u3001\u5C04\u624B\u5EA7\u3002\u798F\u5CA1\u770C\u7ACB\u6771\u7B51\u9AD8\u7B49\u9AD8\u6821\u30011\u6D6A\u3092\u7D4C\u3066\u4E5D\u5DDE\u5927\u5B66\u5DE5\u5B66\u90E8\u5EFA\u7BC9\u5B66\u79D1\u5352\u696D\u3002", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 66
          }, this), "\u5C0F\u5B66\u6821\u9AD8\u5B66\u5E74\u304B\u3089\u9AD8\u6821\u5352\u696D\u307E\u3067\u90E8\u6D3B\u52D5\u3067\u30B5\u30C3\u30AB\u30FC\u3092\u3057\u3066\u3044\u307E\u3057\u305F\u3002"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 41,
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
                  lineNumber: 49,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
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
                  lineNumber: 56,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
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
                  lineNumber: 63,
                  columnNumber: 19
                }, this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
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
          lineNumber: 72,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().title),
        children: "Yuto Urushima"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
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
                    lineNumber: 85,
                    columnNumber: 21
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().date),
                  children: blog.updatedAt.slice(0, 10).replace(/-/g, '/')
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 87,
                  columnNumber: 19
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                  className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().content),
                  children: blog.content
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 88,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this)
          }, blog.id, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        className: (_styles_Main_module_scss__WEBPACK_IMPORTED_MODULE_5___default().copyright),
        children: "Copyright \xA92021 YutoUrushima All Rights Reserved."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImJsb2ciLCJub1Njcm9sbCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhc3NpdmUiLCJvcGVuUHJvZmlsZSIsInByb2ZpbGUiLCJnZXRFbGVtZW50QnlJZCIsImdzYXAiLCJsZWZ0IiwiY2xvc2VQcm9maWxlIiwibGF5b3V0IiwiaGVhZGVyIiwibWFpbiIsIm1hcCIsImlkIiwidGl0bGUiLCJjYXRlZ29yeSIsIm5hbWUiLCJ1cGRhdGVkQXQiLCJzbGljZSIsInJlcGxhY2UiLCJjb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLFNBQVNBLElBQVQsT0FBd0I7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBRXJDLFdBQVNDLFFBQVQsQ0FBa0JDLENBQWxCLEVBQXFCO0FBQ25CQSxLQUFDLENBQUNDLGNBQUY7QUFDQUMsWUFBUSxDQUFDQyxnQkFBVCxDQUEwQixXQUExQixFQUF1Q0osUUFBdkMsRUFBaUQ7QUFBQ0ssYUFBTyxFQUFFO0FBQVYsS0FBakQ7QUFDRDs7QUFFRCxXQUFTQyxXQUFULEdBQXVCO0FBQ3JCLFFBQU1DLE9BQU8sR0FBR0osUUFBUSxDQUFDSyxjQUFULENBQXdCLFNBQXhCLENBQWhCO0FBQ0FDLGdEQUFBLENBQVFGLE9BQVIsRUFBaUI7QUFDZkcsVUFBSSxFQUFFO0FBRFMsS0FBakI7QUFHQVYsWUFBUSxDQUFDQyxDQUFELENBQVI7QUFDRDs7QUFFRCxXQUFTVSxZQUFULEdBQXdCO0FBQ3RCLFFBQU1KLE9BQU8sR0FBR0osUUFBUSxDQUFDSyxjQUFULENBQXdCLFNBQXhCLENBQWhCO0FBQ0FDLGdEQUFBLENBQVFGLE9BQVIsRUFBaUI7QUFDZkcsVUFBSSxFQUFFO0FBRFMsS0FBakI7QUFHRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBRUUsNkVBQWhCO0FBQUEsNEJBQ0U7QUFBUSxlQUFTLEVBQUVDLDZFQUFuQjtBQUFxQyxRQUFFLEVBQUMsU0FBeEM7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVBLDBFQUFoQjtBQUErQixlQUFPLEVBQUVGLFlBQXhDO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSyxpQkFBUyxFQUFFRSx3RUFBaEI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVBLHlFQUFoQjtBQUFBLGlDQUNFO0FBQUssZUFBRyxFQUFDLHNCQUFUO0FBQWdDLGVBQUcsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUlFO0FBQUcsbUJBQVMsRUFBRUEsd0VBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFLRTtBQUFHLG1CQUFTLEVBQUVBLHdFQUFkO0FBQUEsdVZBQ3VEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBRHZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFMRixlQVNFO0FBQUksbUJBQVMsRUFBRUEsdUVBQWY7QUFBQSxrQ0FDRTtBQUFJLHFCQUFTLEVBQUVBLHdFQUFmO0FBQUEsbUNBQ0UsOERBQUMsa0RBQUQ7QUFBTSxrQkFBSSxFQUFDLG1DQUFYO0FBQUEscUNBQ0U7QUFBRyxzQkFBTSxFQUFDLFFBQVY7QUFBQSx1Q0FDRTtBQUFLLHFCQUFHLEVBQUMsc0JBQVQ7QUFBZ0MscUJBQUcsRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBUUU7QUFBSSxxQkFBUyxFQUFFQSx3RUFBZjtBQUFBLG1DQUNFLDhEQUFDLGtEQUFEO0FBQU0sa0JBQUksRUFBQyx5REFBWDtBQUFBLHFDQUNFO0FBQUcsc0JBQU0sRUFBQyxRQUFWO0FBQUEsdUNBQ0U7QUFBSyxxQkFBRyxFQUFDLHVCQUFUO0FBQWlDLHFCQUFHLEVBQUM7QUFBckM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSRixlQWVFO0FBQUkscUJBQVMsRUFBRUEsd0VBQWY7QUFBQSxtQ0FDRSw4REFBQyxrREFBRDtBQUFNLGtCQUFJLEVBQUMsaUNBQVg7QUFBQSxxQ0FDRTtBQUFHLHNCQUFNLEVBQUMsUUFBVjtBQUFBLHVDQUNFO0FBQUsscUJBQUcsRUFBQyxxQkFBVDtBQUErQixxQkFBRyxFQUFDO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBZkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQVRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBdUNFO0FBQU0sZUFBUyxFQUFFQywyRUFBakI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVBLHdFQUFoQjtBQUE2QixlQUFPLEVBQUVSLFdBQXRDO0FBQUEsK0JBQ0U7QUFBSyxhQUFHLEVBQUM7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBSUU7QUFBSSxpQkFBUyxFQUFFUSx1RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFBSSxpQkFBUyxFQUFFQSwwRUFBZjtBQUFBLGtCQUlHZixJQUFJLENBQUNnQixHQUFMLENBQVMsVUFBQWhCLElBQUk7QUFBQSw4QkFDWjtBQUFrQixxQkFBUyxFQUFFZSxzRUFBN0I7QUFBQSxtQ0FDRSw4REFBQyxrREFBRDtBQUFNLGtCQUFJLGtCQUFXZixJQUFJLENBQUNpQixFQUFoQixDQUFWO0FBQUEscUNBQ0U7QUFBRyx5QkFBUyxFQUFFRixzRUFBZDtBQUFBLHdDQUNFO0FBQUksMkJBQVMsRUFBRUEsMkVBQWY7QUFBQSw2QkFDR2YsSUFBSSxDQUFDa0IsS0FEUixlQUVFO0FBQU0sNkJBQVMsRUFBRUgsMEVBQWpCO0FBQUEsOEJBQWlDZixJQUFJLENBQUNtQixRQUFMLENBQWNDO0FBQS9DO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBS0U7QUFBRywyQkFBUyxFQUFFTCxzRUFBZDtBQUFBLDRCQUEwQmYsSUFBSSxDQUFDcUIsU0FBTCxDQUFlQyxLQUFmLENBQXFCLENBQXJCLEVBQXdCLEVBQXhCLEVBQTRCQyxPQUE1QixDQUFvQyxJQUFwQyxFQUEwQyxHQUExQztBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGLGVBTUU7QUFBRywyQkFBUyxFQUFFUix5RUFBZDtBQUFBLDRCQUE2QmYsSUFBSSxDQUFDd0I7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsYUFBU3hCLElBQUksQ0FBQ2lCLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEWTtBQUFBLFNBQWI7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEYsZUF3QkU7QUFBRyxpQkFBUyxFQUFFRiwyRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF2Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvRUQsQyxDQUdEOztLQTdGd0JoQixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNkYTY4M2EwNzU0YjM0OWVlOWJkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9pbmRleC5qc1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgaGVhZGVyIGZyb20gJy4uL3N0eWxlcy9IZWFkZXIubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBsYXlvdXQgZnJvbSAnLi4vc3R5bGVzL0xheW91dC5tb2R1bGUuc2NzcydcclxuaW1wb3J0IG1haW4gZnJvbSAnLi4vc3R5bGVzL01haW4ubW9kdWxlLnNjc3MnXHJcbmltcG9ydCBnc2FwIGZyb20gJ2dzYXAnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgYmxvZyB9KSB7XHJcblxyXG4gIGZ1bmN0aW9uIG5vU2Nyb2xsKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG5vU2Nyb2xsLCB7cGFzc2l2ZTogZmFsc2V9KTtcclxuICB9IFxyXG5cclxuICBmdW5jdGlvbiBvcGVuUHJvZmlsZSgpIHtcclxuICAgIGNvbnN0IHByb2ZpbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZmlsZScpO1xyXG4gICAgZ3NhcC50byhwcm9maWxlLCB7XHJcbiAgICAgIGxlZnQ6IDBcclxuICAgIH0pO1xyXG4gICAgbm9TY3JvbGwoZSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjbG9zZVByb2ZpbGUoKSB7XHJcbiAgICBjb25zdCBwcm9maWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2ZpbGUnKTtcclxuICAgIGdzYXAudG8ocHJvZmlsZSwge1xyXG4gICAgICBsZWZ0OiAnLTEwMCUnXHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17bGF5b3V0LmNvbnRhaW5lcn0+XHJcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtoZWFkZXIuY29udGFpbmVyfSBpZD1cInByb2ZpbGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aGVhZGVyLmJ1dHRvbn0gb25DbGljaz17Y2xvc2VQcm9maWxlfT5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi9iLWNsb3NlLWljb24uc3ZnXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtoZWFkZXIud3JhcH0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17aGVhZGVyLmltYWdlfT5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ItaGVhZGVyLWltYWdlLmpwZ1wiIGFsdD1cInl1dG8gdXJ1c2hpbWFcIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17aGVhZGVyLm5hbWV9Pua8huWztuijleS6ujwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17aGVhZGVyLnRleHR9PlxyXG4gICAgICAgICAg56aP5bKh55yM5YyX5Lmd5bee5biC5Ye66Lqr44CBOTblubTnlJ/jgb7jgozjga4yNOats+OAgeWwhOaJi+W6p+OAguemj+WyoeecjOeri+adseetkemrmOetiemrmOagoeOAgTHmtarjgpLntYzjgabkuZ3lt57lpKflrablt6Xlrabpg6jlu7rnr4nlrabnp5HljZLmpa3jgII8YnIvPlxyXG4gICAgICAgICAg5bCP5a2m5qCh6auY5a2m5bm044GL44KJ6auY5qCh5Y2S5qWt44G+44Gn6YOo5rS75YuV44Gn44K144OD44Kr44O844KS44GX44Gm44GE44G+44GX44Gf44CCXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtoZWFkZXIuc25zfT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17aGVhZGVyLmljb259PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL0Zyb250ZW5kXzEyMjBcIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYi10d2l0dGVyLWljb24ucG5nXCIgYWx0PVwidHdpdHRlclwiLz5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2hlYWRlci5pY29ufT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3Byb2ZpbGUucGhwP2lkPTEwMDAzNjE1MzM2MTg0MVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi9iLWZhY2Vib29rLWljb24ucG5nXCIgYWx0PVwiZmFjZWJvb2tcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtoZWFkZXIuaWNvbn0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ZdXRvVXJ1c2hpbWFcIj5cclxuICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4vYi1naXRodWItaWNvbi5wbmdcIiBhbHQ9XCJnaXRodWJcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT17bWFpbi5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXttYWluLmJ1dHRvbn0gb25DbGljaz17b3BlblByb2ZpbGV9PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIuL2ItYnV0dG9uLWljb24uc3ZnXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9e21haW4udGl0bGV9Pll1dG8gVXJ1c2hpbWE8L2gxPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e21haW4uYmxvZ0xpc3R9PlxyXG4gICAgICAgICAgey8qIOODh+ODkOODg+OCsOeUqCAqL31cclxuICAgICAgICAgIHsvKiB7Y29uc29sZS5sb2coYmxvZyl9ICovfVxyXG4gICAgICAgICAgey8qIOODh+ODkOODg+OCsOeUqCAqL31cclxuICAgICAgICAgIHtibG9nLm1hcChibG9nID0+IChcclxuICAgICAgICAgICAgPGxpIGtleT17YmxvZy5pZH0gY2xhc3NOYW1lPXttYWluLmNhcmR9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy8ke2Jsb2cuaWR9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e21haW4ubGlua30+XHJcbiAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9e21haW4uYmxvZ1RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICB7YmxvZy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e21haW4uY2F0ZWdvcnl9PntibG9nLmNhdGVnb3J5Lm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e21haW4uZGF0ZX0+e2Jsb2cudXBkYXRlZEF0LnNsaWNlKDAsIDEwKS5yZXBsYWNlKC8tL2csICcvJyl9PC9wPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e21haW4uY29udGVudH0+e2Jsb2cuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgICA8cCBjbGFzc05hbWU9e21haW4uY29weXJpZ2h0fT5Db3B5cmlnaHQgwqkyMDIxIFl1dG9VcnVzaGltYSBBbGwgUmlnaHRzIFJlc2VydmVkLjwvcD5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuXHJcbi8vIOODh+ODvOOCv+OCkuODhuODs+ODl+ODrOODvOODiOOBq+WPl+OBkea4oeOBmemDqOWIhuOBruWHpueQhuOCkuiomOi/sOOBl+OBvuOBmVxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3Qga2V5ID0ge1xyXG4gICAgaGVhZGVyczogeydYLUFQSS1LRVknOiBwcm9jZXNzLmVudi5BUElfS0VZfSxcclxuICB9O1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly95dXRvdXJ1c2hpbWEubWljcm9jbXMuaW8vYXBpL3YxL25ld3MnLCBrZXkpXHJcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcclxuICAgIC5jYXRjaCgoKSA9PiBudWxsKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgYmxvZzogZGF0YS5jb250ZW50cyxcclxuICAgIH0sXHJcbiAgfTtcclxufTsiXSwic291cmNlUm9vdCI6IiJ9