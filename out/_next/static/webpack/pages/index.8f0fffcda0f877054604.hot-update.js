self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./styles/Header.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[2]!./node_modules/next/dist/compiled/resolve-url-loader/index.js??ruleSet[1].rules[2].oneOf[3].use[3]!./node_modules/next/dist/compiled/sass-loader/cjs.js??ruleSet[1].rules[2].oneOf[3].use[4]!./styles/Header.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".Header_container__13qZs {\n  background-color: #eee;\n  width: 31.25%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n@media screen and (max-width: 1000px) {\n  .Header_container__13qZs {\n    left: -100%;\n    width: 100%;\n    z-index: 400;\n  }\n}\n\n.Header_button__1qllZ {\n  background-color: #ccc;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  position: fixed;\n  top: 20px;\n  left: 20px;\n  z-index: 600;\n  padding: 12px;\n}\n.Header_button__1qllZ > img {\n  width: 100%;\n}\n@media screen and (min-width: 1001px) {\n  .Header_button__1qllZ {\n    display: none;\n  }\n}\n@media screen and (max-width: 1000px) {\n  .Header_button__1qllZ {\n    display: block;\n  }\n}\n\n.Header_wrap__33215 {\n  width: 40%;\n}\n\n.Header_image__2WTF7 {\n  width: 100%;\n}\n.Header_image__2WTF7 > img {\n  width: 100%;\n}\n\n.Header_name__3ESFm {\n  font-weight: 600;\n  margin-top: 10px;\n}\n\n.Header_text__sa6Z0 {\n  margin-top: 10px;\n}\n\n.Header_sns__3GRcg {\n  display: flex;\n  list-style: none;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 15px;\n}\n\n.Header_icon__jRDJb {\n  width: 30px;\n}\n.Header_icon__jRDJb img {\n  width: 100%;\n}", "",{"version":3,"sources":["webpack://Header.module.scss","webpack://_config.scss"],"names":[],"mappings":"AAEA;EACE,sBAAA;EACA,aAAA;EACA,aAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,eAAA;EACA,MAAA;EACA,OAAA;AADF;ACII;EDZJ;IAWI,WAAA;IACA,WAAA;IACA,YAAA;EACF;AACF;;AAEA;EACE,sBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,eAAA;EACA,SAAA;EACA,UAAA;EACA,YAAA;EACA,aAAA;AACF;AAAE;EACI,WAAA;AAEN;ACxBI;EDWJ;IAcM,aAAA;EAGJ;AACF;ACvBI;EDKJ;IAiBM,cAAA;EAKJ;AACF;;AAFA;EACE,UAAA;AAKF;;AAFA;EACE,WAAA;AAKF;AAJE;EACE,WAAA;AAMJ;;AAFA;EACE,gBAAA;EACA,gBAAA;AAKF;;AAFA;EACE,gBAAA;AAKF;;AAFA;EACE,aAAA;EACA,gBAAA;EACA,8BAAA;EACA,mBAAA;EACA,gBAAA;AAKF;;AAFA;EACE,WAAA;AAKF;AAJE;EACE,WAAA;AAMJ","sourcesContent":["@import '_config';\r\n\r\n.container {\r\n  background-color: #eee;\r\n  width: 31.25%;\r\n  height: 100vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  @include media-sp {\r\n    left: -100%;\r\n    width: 100%;\r\n    z-index: 400;\r\n  }\r\n}\r\n\r\n.button {\r\n  background-color: $border-Color;\r\n  width: 50px;\r\n  height: 50px;\r\n  border-radius: 50%;\r\n  position: fixed;\r\n  top: 20px;\r\n  left: 20px;\r\n  z-index: 600;\r\n  padding: 12px;\r\n  & > img {\r\n      width: 100%;\r\n  }\r\n  @include media-pc {\r\n      display: none;\r\n  }\r\n  @include media-sp {\r\n      display: block;\r\n  }\r\n}\r\n\r\n.wrap {\r\n  width: 40%;\r\n}\r\n\r\n.image {\r\n  width: 100%;\r\n  & > img {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n.name {\r\n  font-weight: 600;\r\n  margin-top: 10px;\r\n}\r\n\r\n.text {\r\n  margin-top: 10px;\r\n}\r\n\r\n.sns {\r\n  display: flex;\r\n  list-style: none;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 15px;\r\n}\r\n\r\n.icon {\r\n  width: 30px;\r\n  img {\r\n    width: 100%;\r\n  }\r\n}\r\n","// media-query\r\n$breakpoint: 1000px;\r\n/// @group media-query\r\n$media-pc: 'screen and (min-width: #{$breakpoint + 1px})';\r\n/// @group media-query\r\n$media-sp: 'screen and (max-width: #{$breakpoint})';\r\n\r\n@mixin media-pc {\r\n    @media #{$media-pc} {\r\n        @content;\r\n    }\r\n}\r\n\r\n@mixin media-sp {\r\n    @media #{$media-sp} {\r\n        @content;\r\n    }\r\n}\r\n\r\n// color\r\n$border-Color: #ccc;"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Header_container__13qZs",
	"button": "Header_button__1qllZ",
	"wrap": "Header_wrap__33215",
	"image": "Header_image__2WTF7",
	"name": "Header_name__3ESFm",
	"text": "Header_text__sa6Z0",
	"sns": "Header_sns__3GRcg",
	"icon": "Header_icon__jRDJb"
};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL0hlYWRlci5tb2R1bGUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsaUhBQXNEO0FBQ2hHO0FBQ0E7QUFDQSxvRUFBb0UsMkJBQTJCLGtCQUFrQixrQkFBa0Isa0JBQWtCLDRCQUE0Qix3QkFBd0Isb0JBQW9CLFdBQVcsWUFBWSxHQUFHLHlDQUF5Qyw4QkFBOEIsa0JBQWtCLGtCQUFrQixtQkFBbUIsS0FBSyxHQUFHLDJCQUEyQiwyQkFBMkIsZ0JBQWdCLGlCQUFpQix1QkFBdUIsb0JBQW9CLGNBQWMsZUFBZSxpQkFBaUIsa0JBQWtCLEdBQUcsK0JBQStCLGdCQUFnQixHQUFHLHlDQUF5QywyQkFBMkIsb0JBQW9CLEtBQUssR0FBRyx5Q0FBeUMsMkJBQTJCLHFCQUFxQixLQUFLLEdBQUcseUJBQXlCLGVBQWUsR0FBRywwQkFBMEIsZ0JBQWdCLEdBQUcsOEJBQThCLGdCQUFnQixHQUFHLHlCQUF5QixxQkFBcUIscUJBQXFCLEdBQUcseUJBQXlCLHFCQUFxQixHQUFHLHdCQUF3QixrQkFBa0IscUJBQXFCLG1DQUFtQyx3QkFBd0IscUJBQXFCLEdBQUcseUJBQXlCLGdCQUFnQixHQUFHLDJCQUEyQixnQkFBZ0IsR0FBRyxPQUFPLDRHQUE0RyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxNQUFNLEtBQUssV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSwyQ0FBMkMsb0JBQW9CLDZCQUE2QixvQkFBb0Isb0JBQW9CLG9CQUFvQiw4QkFBOEIsMEJBQTBCLHNCQUFzQixhQUFhLGNBQWMseUJBQXlCLG9CQUFvQixvQkFBb0IscUJBQXFCLE9BQU8sS0FBSyxpQkFBaUIsc0NBQXNDLGtCQUFrQixtQkFBbUIseUJBQXlCLHNCQUFzQixnQkFBZ0IsaUJBQWlCLG1CQUFtQixvQkFBb0IsZUFBZSxzQkFBc0IsT0FBTyx5QkFBeUIsd0JBQXdCLE9BQU8seUJBQXlCLHlCQUF5QixPQUFPLEtBQUssZUFBZSxpQkFBaUIsS0FBSyxnQkFBZ0Isa0JBQWtCLGVBQWUsb0JBQW9CLE9BQU8sS0FBSyxlQUFlLHVCQUF1Qix1QkFBdUIsS0FBSyxlQUFlLHVCQUF1QixLQUFLLGNBQWMsb0JBQW9CLHVCQUF1QixxQ0FBcUMsMEJBQTBCLHVCQUF1QixLQUFLLGVBQWUsa0JBQWtCLFdBQVcsb0JBQW9CLE9BQU8sS0FBSyw2Q0FBNkMsbUVBQW1FLGtCQUFrQixHQUFHLG1FQUFtRSxZQUFZLEdBQUcseUJBQXlCLGlCQUFpQixVQUFVLEVBQUUscUJBQXFCLFNBQVMsS0FBSyx5QkFBeUIsaUJBQWlCLFVBQVUsRUFBRSxxQkFBcUIsU0FBUyxLQUFLLHdDQUF3QyxtQkFBbUI7QUFDM2hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44ZjBmZmZjZGEwZjg3NzA1NDYwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkhlYWRlcl9jb250YWluZXJfXzEzcVpzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxuICB3aWR0aDogMzEuMjUlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5IZWFkZXJfY29udGFpbmVyX18xM3FacyB7XFxuICAgIGxlZnQ6IC0xMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogNDAwO1xcbiAgfVxcbn1cXG5cXG4uSGVhZGVyX2J1dHRvbl9fMXFsbFoge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAyMHB4O1xcbiAgbGVmdDogMjBweDtcXG4gIHotaW5kZXg6IDYwMDtcXG4gIHBhZGRpbmc6IDEycHg7XFxufVxcbi5IZWFkZXJfYnV0dG9uX18xcWxsWiA+IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMXB4KSB7XFxuICAuSGVhZGVyX2J1dHRvbl9fMXFsbFoge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIC5IZWFkZXJfYnV0dG9uX18xcWxsWiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgfVxcbn1cXG5cXG4uSGVhZGVyX3dyYXBfXzMzMjE1IHtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblxcbi5IZWFkZXJfaW1hZ2VfXzJXVEY3IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uSGVhZGVyX2ltYWdlX18yV1RGNyA+IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLkhlYWRlcl9uYW1lX18zRVNGbSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLkhlYWRlcl90ZXh0X19zYTZaMCB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uSGVhZGVyX3Nuc19fM0dSY2cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLkhlYWRlcl9pY29uX19qUkRKYiB7XFxuICB3aWR0aDogMzBweDtcXG59XFxuLkhlYWRlcl9pY29uX19qUkRKYiBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9IZWFkZXIubW9kdWxlLnNjc3NcIixcIndlYnBhY2s6Ly9fY29uZmlnLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFERjtBQ0lJO0VEWko7SUFXSSxXQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUFDRjtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFDRjtBQUFFO0VBQ0ksV0FBQTtBQUVOO0FDeEJJO0VEV0o7SUFjTSxhQUFBO0VBR0o7QUFDRjtBQ3ZCSTtFREtKO0lBaUJNLGNBQUE7RUFLSjtBQUNGOztBQUZBO0VBQ0UsVUFBQTtBQUtGOztBQUZBO0VBQ0UsV0FBQTtBQUtGO0FBSkU7RUFDRSxXQUFBO0FBTUo7O0FBRkE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBRkE7RUFDRSxnQkFBQTtBQUtGOztBQUZBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBS0Y7O0FBRkE7RUFDRSxXQUFBO0FBS0Y7QUFKRTtFQUNFLFdBQUE7QUFNSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdfY29uZmlnJztcXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XFxyXFxuICB3aWR0aDogMzEuMjUlO1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgQGluY2x1ZGUgbWVkaWEtc3Age1xcclxcbiAgICBsZWZ0OiAtMTAwJTtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIHotaW5kZXg6IDQwMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJ1dHRvbiB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyLUNvbG9yO1xcclxcbiAgd2lkdGg6IDUwcHg7XFxyXFxuICBoZWlnaHQ6IDUwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxuICBsZWZ0OiAyMHB4O1xcclxcbiAgei1pbmRleDogNjAwO1xcclxcbiAgcGFkZGluZzogMTJweDtcXHJcXG4gICYgPiBpbWcge1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgQGluY2x1ZGUgbWVkaWEtcGMge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBAaW5jbHVkZSBtZWRpYS1zcCB7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi53cmFwIHtcXHJcXG4gIHdpZHRoOiA0MCU7XFxyXFxufVxcclxcblxcclxcbi5pbWFnZSB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gICYgPiBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLm5hbWUge1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0IHtcXHJcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi5zbnMge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLmljb24ge1xcclxcbiAgd2lkdGg6IDMwcHg7XFxyXFxuICBpbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIvLyBtZWRpYS1xdWVyeVxcclxcbiRicmVha3BvaW50OiAxMDAwcHg7XFxyXFxuLy8vIEBncm91cCBtZWRpYS1xdWVyeVxcclxcbiRtZWRpYS1wYzogJ3NjcmVlbiBhbmQgKG1pbi13aWR0aDogI3skYnJlYWtwb2ludCArIDFweH0pJztcXHJcXG4vLy8gQGdyb3VwIG1lZGlhLXF1ZXJ5XFxyXFxuJG1lZGlhLXNwOiAnc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAjeyRicmVha3BvaW50fSknO1xcclxcblxcclxcbkBtaXhpbiBtZWRpYS1wYyB7XFxyXFxuICAgIEBtZWRpYSAjeyRtZWRpYS1wY30ge1xcclxcbiAgICAgICAgQGNvbnRlbnQ7XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1peGluIG1lZGlhLXNwIHtcXHJcXG4gICAgQG1lZGlhICN7JG1lZGlhLXNwfSB7XFxyXFxuICAgICAgICBAY29udGVudDtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyBjb2xvclxcclxcbiRib3JkZXItQ29sb3I6ICNjY2M7XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSGVhZGVyX2NvbnRhaW5lcl9fMTNxWnNcIixcblx0XCJidXR0b25cIjogXCJIZWFkZXJfYnV0dG9uX18xcWxsWlwiLFxuXHRcIndyYXBcIjogXCJIZWFkZXJfd3JhcF9fMzMyMTVcIixcblx0XCJpbWFnZVwiOiBcIkhlYWRlcl9pbWFnZV9fMldURjdcIixcblx0XCJuYW1lXCI6IFwiSGVhZGVyX25hbWVfXzNFU0ZtXCIsXG5cdFwidGV4dFwiOiBcIkhlYWRlcl90ZXh0X19zYTZaMFwiLFxuXHRcInNuc1wiOiBcIkhlYWRlcl9zbnNfXzNHUmNnXCIsXG5cdFwiaWNvblwiOiBcIkhlYWRlcl9pY29uX19qUkRKYlwiXG59O1xubW9kdWxlLmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJzb3VyY2VSb290IjoiIn0=