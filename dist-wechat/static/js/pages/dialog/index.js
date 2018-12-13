(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/dialog/index"],{

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/vue-loader/lib/index.js?!./src/components/wrap.vue?vue&type=template&id=5646e35a&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/wrap.vue?vue&type=template&id=5646e35a&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "wrap", attrs: { _hid: 0 } },
    [
      _vm._ri(!!_vm.title, 1)
        ? _c("div", { staticClass: "title", attrs: { _hid: 1 } }, [
            _vm._v(_vm._s(_vm.title), 2)
          ])
        : _vm._e(),
      _vm._t("default", null, { _hid: 4, _cid: 0 })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/dialog/index.vue?vue&type=template&id=45c2b362&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/dialog/index.vue?vue&type=template&id=45c2b362& ***!
  \*************************************************************************************************************************************************************************************************************/
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
        "wrap",
        { attrs: { title: "消息提示", _hid: 1, _cid: 0 } },
        [
          _c(
            "van-button",
            {
              staticClass: "demo-margin-right",
              attrs: {
                plain: true,
                type: "primary",
                _hid: 3,
                _batrs: "plain",
                _cid: 1
              },
              on: { click: _vm.onClickAlert }
            },
            []
          ),
          _c(
            "van-button",
            {
              attrs: {
                plain: true,
                type: "primary",
                _hid: 7,
                _batrs: "plain",
                _cid: 2
              },
              on: { click: _vm.onClickAlert2 }
            },
            []
          )
        ],
        1
      ),
      _c(
        "wrap",
        { attrs: { title: "消息确认", _hid: 11, _cid: 3 } },
        [
          _c(
            "van-button",
            {
              attrs: {
                plain: true,
                type: "primary",
                _hid: 13,
                _batrs: "plain",
                _cid: 4
              },
              on: { click: _vm.onClickConfirm }
            },
            []
          )
        ],
        1
      ),
      _c(
        "van-button",
        {
          attrs: {
            plain: true,
            type: "danger",
            _hid: 17,
            _batrs: "plain",
            _cid: 5
          },
          on: { click: _vm.showCustomDialog }
        },
        []
      ),
      _c(
        "van-dialog",
        {
          attrs: {
            "use-slot": true,
            "async-close": true,
            show: _vm.show,
            "show-cancel-button": true,
            "confirm-button-open-type": "getUserInfo",
            _hid: 21,
            _batrs: "use-slot,async-close,show,show-cancel-button",
            _cid: 6
          },
          on: { close: _vm.onClose, getuserinfo: _vm.getUserInfo }
        },
        [
          _c("van-field", {
            attrs: {
              value: _vm.username,
              label: "用户名",
              placeholder: "请输入用户名",
              _hid: 23,
              _batrs: "value",
              _cid: 7
            }
          }),
          _c("van-field", {
            attrs: {
              value: _vm.password,
              type: "password",
              label: "密码",
              border: false,
              placeholder: "请输入密码",
              _hid: 26,
              _batrs: "value,border",
              _cid: 8
            }
          })
        ],
        1
      ),
      _c("van-dialog", { attrs: { id: "van-dialog", _hid: 29, _cid: 9 } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/vue-loader/lib/index.js?!./src/components/wrap.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/vue-loader/lib??vue-loader-options!./src/components/wrap.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
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

exports.default = {
  props: {
    title: {
      default: ''
    }
  }
};

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/vue-loader/lib/index.js?!./src/pages/dialog/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/dialog/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wrap = __webpack_require__(/*! @/components/wrap */ "./src/components/wrap.vue");

var _wrap2 = _interopRequireDefault(_wrap);

var _dialog = __webpack_require__(/*! @/static/vant/dialog/dialog */ "./src/static/vant/dialog/dialog.js");

var _dialog2 = _interopRequireDefault(_dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var message = '哈哈';
exports.default = {
  data: function data() {
    return {
      show: false,
      username: '',
      password: ''
    };
  },

  methods: {
    showCustomDialog: function showCustomDialog() {
      this.show = true;
    },
    onClickAlert: function onClickAlert() {
      _dialog2.default.alert({
        title: '标题',
        message: message
      });
    },
    getUserInfo: function getUserInfo(event) {
      console.log(event.detail);
    },
    onClickAlert2: function onClickAlert2() {
      _dialog2.default.alert({
        message: message
      });
    },
    onClickConfirm: function onClickConfirm() {
      _dialog2.default.confirm({
        title: '标题',
        message: message
      }).then(function () {
        console.log('confirm');
      }).catch(function () {
        console.log('cancel');
      });
    },
    onClose: function onClose(event) {
      var _this = this;

      if (event.detail === 'confirm') {
        setTimeout(function () {
          _this.show = false;
        }, 1000);
      } else {
        this.show = false;
      }
    }
  },
  components: {
    wrap: _wrap2.default
  }
};

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/@megalo/px2rpx-loader/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/dialog/index.vue?vue&type=style&index=0&lang=less&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/@megalo/px2rpx-loader??ref--3-2!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/dialog/index.vue?vue&type=style&index=0&lang=less& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/@megalo/px2rpx-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/wrap.vue?vue&type=style&index=0&id=5646e35a&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/@megalo/px2rpx-loader??ref--2-2!./node_modules/vue-loader/lib??vue-loader-options!./src/components/wrap.vue?vue&type=style&index=0&id=5646e35a&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/wrap.vue":
/*!*********************************!*\
  !*** ./src/components/wrap.vue ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wrap_vue_vue_type_template_id_5646e35a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap.vue?vue&type=template&id=5646e35a&scoped=true& */ "./src/components/wrap.vue?vue&type=template&id=5646e35a&scoped=true&");
/* harmony import */ var _wrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wrap.vue?vue&type=script&lang=js& */ "./src/components/wrap.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _wrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _wrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _wrap_vue_vue_type_style_index_0_id_5646e35a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wrap.vue?vue&type=style&index=0&id=5646e35a&scoped=true&lang=css& */ "./src/components/wrap.vue?vue&type=style&index=0&id=5646e35a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _wrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _wrap_vue_vue_type_template_id_5646e35a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _wrap_vue_vue_type_template_id_5646e35a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5646e35a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/wrap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/wrap.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/components/wrap.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib!../../node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!../../node_modules/vue-loader/lib??vue-loader-options!./wrap.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/vue-loader/lib/index.js?!./src/components/wrap.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_wrap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/wrap.vue?vue&type=style&index=0&id=5646e35a&scoped=true&lang=css&":
/*!******************************************************************************************!*\
  !*** ./src/components/wrap.vue?vue&type=style&index=0&id=5646e35a&scoped=true&lang=css& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_wrap_vue_vue_type_style_index_0_id_5646e35a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader!../../node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!../../node_modules/@megalo/px2rpx-loader??ref--2-2!../../node_modules/vue-loader/lib??vue-loader-options!./wrap.vue?vue&type=style&index=0&id=5646e35a&scoped=true&lang=css& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/@megalo/px2rpx-loader/index.js?!./node_modules/vue-loader/lib/index.js?!./src/components/wrap.vue?vue&type=style&index=0&id=5646e35a&scoped=true&lang=css&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_wrap_vue_vue_type_style_index_0_id_5646e35a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_wrap_vue_vue_type_style_index_0_id_5646e35a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_wrap_vue_vue_type_style_index_0_id_5646e35a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_wrap_vue_vue_type_style_index_0_id_5646e35a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_2_2_node_modules_vue_loader_lib_index_js_vue_loader_options_wrap_vue_vue_type_style_index_0_id_5646e35a_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/wrap.vue?vue&type=template&id=5646e35a&scoped=true&":
/*!****************************************************************************!*\
  !*** ./src/components/wrap.vue?vue&type=template&id=5646e35a&scoped=true& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_wrap_vue_vue_type_template_id_5646e35a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/@megalo/target/lib/frameworks/vue/loader/template.js??vue-loader-options!../../node_modules/vue-loader/lib??vue-loader-options!./wrap.vue?vue&type=template&id=5646e35a&scoped=true& */ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/vue-loader/lib/index.js?!./src/components/wrap.vue?vue&type=template&id=5646e35a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_wrap_vue_vue_type_template_id_5646e35a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_wrap_vue_vue_type_template_id_5646e35a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/pages/dialog/index.js":
/*!***********************************!*\
  !*** ./src/pages/dialog/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(/*! ./index.vue */ "./src/pages/dialog/index.vue");

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

/***/ "./src/pages/dialog/index.vue":
/*!************************************!*\
  !*** ./src/pages/dialog/index.vue ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_45c2b362___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=45c2b362& */ "./src/pages/dialog/index.vue?vue&type=template&id=45c2b362&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/pages/dialog/index.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=less& */ "./src/pages/dialog/index.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_45c2b362___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_45c2b362___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/pages/dialog/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/pages/dialog/index.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/pages/dialog/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib!../../../node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/script.js!./node_modules/vue-loader/lib/index.js?!./src/pages/dialog/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_script_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/dialog/index.vue?vue&type=style&index=0&lang=less&":
/*!**********************************************************************!*\
  !*** ./src/pages/dialog/index.vue?vue&type=style&index=0&lang=less& ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader!../../../node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!../../../node_modules/@megalo/px2rpx-loader??ref--3-2!../../../node_modules/less-loader/dist/cjs.js!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=less& */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/index.js!./node_modules/@megalo/target/lib/frameworks/vue/loader/style.js!./node_modules/@megalo/px2rpx-loader/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./src/pages/dialog/index.vue?vue&type=style&index=0&lang=less&");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_node_modules_megalo_target_lib_frameworks_vue_loader_style_js_node_modules_megalo_px2rpx_loader_index_js_ref_3_2_node_modules_less_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/dialog/index.vue?vue&type=template&id=45c2b362&":
/*!*******************************************************************!*\
  !*** ./src/pages/dialog/index.vue?vue&type=template&id=45c2b362& ***!
  \*******************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45c2b362___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/@megalo/target/lib/frameworks/vue/loader/template.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=45c2b362& */ "./node_modules/@megalo/target/lib/frameworks/vue/loader/template.js?!./node_modules/vue-loader/lib/index.js?!./src/pages/dialog/index.vue?vue&type=template&id=45c2b362&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45c2b362___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_megalo_target_lib_frameworks_vue_loader_template_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_45c2b362___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/static/vant/dialog/dialog.js":
/*!******************************************!*\
  !*** ./src/static/vant/dialog/dialog.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }return target;
  };return _extends.apply(this, arguments);
}

var queue = [];

function getContext() {
  var pages = getCurrentPages();
  return pages[pages.length - 1];
}

var Dialog = function Dialog(options) {
  options = _extends({}, Dialog.currentOptions, options);
  return new Promise(function (resolve, reject) {
    var context = options.context || getContext();
    var dialog = context.selectComponent(options.selector);
    delete options.selector;

    if (dialog) {
      dialog.set(_extends({
        onCancel: reject,
        onConfirm: resolve
      }, options));
      queue.push(dialog);
    } else {
      console.warn('未找到 van-dialog 节点，请确认 selector 及 context 是否正确');
    }
  });
};

Dialog.defaultOptions = {
  show: true,
  title: '',
  message: '',
  zIndex: 100,
  overlay: true,
  asyncClose: false,
  transition: 'scale',
  selector: '#van-dialog',
  confirmButtonText: '确认',
  cancelButtonText: '取消',
  showConfirmButton: true,
  showCancelButton: false,
  closeOnClickOverlay: false,
  confirmButtonOpenType: ''
};
Dialog.alert = Dialog;

Dialog.confirm = function (options) {
  return Dialog(_extends({
    showCancelButton: true
  }, options));
};

Dialog.close = function () {
  queue.forEach(function (dialog) {
    dialog.close();
  });
  queue = [];
};

Dialog.stopLoading = function () {
  queue.forEach(function (dialog) {
    dialog.stopLoading();
  });
};

Dialog.setDefaultOptions = function (options) {
  Object.assign(Dialog.currentOptions, options);
};

Dialog.resetDefaultOptions = function () {
  Dialog.currentOptions = _extends({}, Dialog.defaultOptions);
};

Dialog.resetDefaultOptions();
exports.default = Dialog;

/***/ })

},[["./src/pages/dialog/index.js","runtime","vendor"]]]);