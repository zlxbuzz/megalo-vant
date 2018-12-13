(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/index.vue?vue&type=template&id=1badc801&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/index.vue?vue&type=template&id=1badc801&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app", attrs: { _hid: 0 } },
    [
      _c(
        "van-collapse",
        {
          attrs: { value: _vm.activeNames, _hid: 1, _batrs: "value", _cid: 0 },
          on: { input: _vm.change }
        },
        [
          _c(
            "van-collapse-item",
            { attrs: { title: "基础组件", name: "1", _hid: 3, _cid: 1 } },
            [
              _c("van-cell", {
                attrs: {
                  title: "button 按钮",
                  "is-link": "true",
                  url: "/pages/button/index",
                  _hid: 5,
                  _cid: 2
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "cell 单元格",
                  "is-link": "true",
                  url: "/pages/cell/index",
                  _hid: 8,
                  _cid: 3
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "icon 图标",
                  "is-link": "true",
                  url: "/pages/icon/index",
                  _hid: 11,
                  _cid: 4
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "layout 布局",
                  "is-link": "true",
                  url: "/pages/layout/index",
                  _hid: 14,
                  _cid: 5
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "popup 弹出",
                  "is-link": "true",
                  url: "/pages/popup/index",
                  _hid: 17,
                  _cid: 6
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "transition 动画",
                  "is-link": "true",
                  url: "/pages/transition/index",
                  _hid: 20,
                  _cid: 7
                }
              })
            ],
            1
          ),
          _c(
            "van-collapse-item",
            { attrs: { title: "表单组件", name: "2", _hid: 23, _cid: 8 } },
            [
              _c("van-cell", {
                attrs: {
                  title: "checkbox",
                  "is-link": "true",
                  url: "/pages/checkbox/index",
                  _hid: 25,
                  _cid: 9
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "datetimepicker",
                  "is-link": "true",
                  url: "/pages/datetimepicker/index",
                  _hid: 28,
                  _cid: 10
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "field",
                  "is-link": "true",
                  url: "/pages/field/index",
                  _hid: 31,
                  _cid: 11
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "radio",
                  "is-link": "true",
                  url: "/pages/radio/index",
                  _hid: 34,
                  _cid: 12
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "rate",
                  "is-link": "true",
                  url: "/pages/rate/index",
                  _hid: 37,
                  _cid: 13
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "search",
                  "is-link": "true",
                  url: "/pages/search/index",
                  _hid: 40,
                  _cid: 14
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "slider",
                  "is-link": "true",
                  url: "/pages/slider/index",
                  _hid: 43,
                  _cid: 15
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "stepper",
                  "is-link": "true",
                  url: "/pages/stepper/index",
                  _hid: 46,
                  _cid: 16
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "switch",
                  "is-link": "true",
                  url: "/pages/switch/index",
                  _hid: 49,
                  _cid: 17
                }
              })
            ],
            1
          ),
          _c(
            "van-collapse-item",
            { attrs: { title: "展示组件", name: "3", _hid: 52, _cid: 18 } },
            [
              _c("van-cell", {
                attrs: {
                  title: "collapse 折叠面板",
                  "is-link": "true",
                  url: "/pages/collapse/index",
                  _hid: 54,
                  _cid: 19
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "NoticeBar 通告栏",
                  "is-link": "true",
                  url: "/pages/noticebar/index",
                  _hid: 57,
                  _cid: 20
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "Panel 面板",
                  "is-link": "true",
                  url: "/pages/panel/index",
                  _hid: 60,
                  _cid: 21
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "Progress 进度条",
                  "is-link": "true",
                  url: "/pages/progress/index",
                  _hid: 63,
                  _cid: 22
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "Steps 步骤条",
                  "is-link": "true",
                  url: "/pages/steps/index",
                  _hid: 66,
                  _cid: 23
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "Tag 标签",
                  "is-link": "true",
                  url: "/pages/tag/index",
                  _hid: 69,
                  _cid: 24
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "TreeSelect 分类选择",
                  "is-link": "true",
                  url: "/pages/treeselect/index",
                  _hid: 72,
                  _cid: 25
                }
              })
            ],
            1
          ),
          _c(
            "van-collapse-item",
            { attrs: { title: "反馈组件", name: "4", _hid: 75, _cid: 26 } },
            [
              _c("van-cell", {
                attrs: {
                  title: "ActionSheet 上拉菜单",
                  "is-link": "true",
                  url: "/pages/actionsheet/index",
                  _hid: 77,
                  _cid: 27
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "Dialog 弹出框",
                  "is-link": "true",
                  url: "/pages/dialog/index",
                  _hid: 80,
                  _cid: 28
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "Loading 加载",
                  "is-link": "true",
                  url: "/pages/loading/index",
                  _hid: 83,
                  _cid: 29
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "Notify 消息提示",
                  "is-link": "true",
                  url: "/pages/notify/index",
                  _hid: 86,
                  _cid: 30
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "SwipeCell 滑动单元格",
                  "is-link": "true",
                  url: "/pages/swipecell/index",
                  _hid: 89,
                  _cid: 31
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "Toast 轻提示",
                  "is-link": "true",
                  url: "/pages/toast/index",
                  _hid: 92,
                  _cid: 32
                }
              })
            ],
            1
          ),
          _c(
            "van-collapse-item",
            { attrs: { title: "业务组件", name: "5", _hid: 95, _cid: 33 } },
            [
              _c("van-cell", {
                attrs: {
                  title: "Area 省市区选择",
                  "is-link": "true",
                  url: "/pages/area/index",
                  _hid: 97,
                  _cid: 34
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "Card 商品卡片",
                  "is-link": "true",
                  url: "/pages/card/index",
                  _hid: 100,
                  _cid: 35
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "SubmitBar 提交订单栏",
                  "is-link": "true",
                  url: "/pages/submit-bar/index",
                  _hid: 103,
                  _cid: 36
                }
              }),
              _c("van-cell", {
                attrs: {
                  title: "GoodsAction 商品导航",
                  "is-link": "true",
                  url: "/pages/goods-action/index",
                  _hid: 106,
                  _cid: 37
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

exports.default = {
  data: function data() {
    return {
      activeNames: []
    };
  },

  methods: {
    change: function change(e) {
      this.activeNames = e.detail;
    }
  }
};

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/@megalo/px2rpx-loader/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=less&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/@megalo/px2rpx-loader??ref--3-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=less&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ./index.vue */ "./src/pages/index/index.vue");

var _index2 = _interopRequireDefault(_index);

var _vue = __webpack_require__(/*! vue */ "./node_modules/megalo/dist/megalo.mp.esm.js");

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

_index2.default.mpType = 'page';

var app = new _vue2.default(_index2.default);

app.$mount();

/***/ }),

/***/ "./src/pages/index/index.vue":
/*!***********************************!*\
  !*** ./src/pages/index/index.vue ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_1badc801_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=1badc801&scoped=true& */ "./src/pages/index/index.vue?vue&type=template&id=1badc801&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/index/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_id_1badc801_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=1badc801&lang=less&scoped=true& */ "./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_1badc801_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_1badc801_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1badc801",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/index/index.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./src/pages/index/index.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=less&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=less&scoped=true& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1badc801_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!../../../node_modules/@megalo/px2rpx-loader??ref--3-2!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=1badc801&lang=less&scoped=true& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/@megalo/px2rpx-loader/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/index/index.vue?vue&type=style&index=0&id=1badc801&lang=less&scoped=true&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1badc801_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1badc801_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1badc801_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1badc801_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_1badc801_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.vue?vue&type=template&id=1badc801&scoped=true&":
/*!******************************************************************************!*\
  !*** ./src/pages/index/index.vue?vue&type=template&id=1badc801&scoped=true& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1badc801_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@megalo/target/lib/frameworks/vue/loader/template.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=1badc801&scoped=true& */ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/index/index.vue?vue&type=template&id=1badc801&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1badc801_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_1badc801_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

},[["./src/pages/index/index.js","runtime","vendor"]]]);