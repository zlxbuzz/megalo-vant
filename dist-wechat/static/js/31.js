(global.webpackJsonp=global.webpackJsonp||[]).push([[31],{0:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e.default=c.a},1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:{default:""}}}},129:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{_hid:0}},[n("wrap",{attrs:{title:"基础用法",_hid:1,_cid:0}},[n("van-switch",{attrs:{checked:t.checked,_hid:3,_batrs:"checked",_cid:1},on:{change:t.onChange}})],1),n("wrap",{attrs:{title:"禁用状态",_hid:6,_cid:2}},[n("van-switch",{attrs:{checked:t.checked,disabled:!0,_hid:8,_batrs:"checked,disabled",_cid:3},on:{change:t.onChange}})],1),n("wrap",{attrs:{title:"加载状态",_hid:11,_cid:4}},[n("van-switch",{attrs:{checked:t.checked,loading:!0,_hid:13,_batrs:"checked,loading",_cid:5},on:{change:t.onChange}})],1),n("wrap",{attrs:{title:"高级用法",_hid:16,_cid:6}},[n("van-switch",{attrs:{checked:t.checked2,size:"36px","active-color":"#4b0","inactive-color":"#f44",_hid:18,_batrs:"checked",_cid:7},on:{change:t.onChange2}})],1),n("wrap",{attrs:{title:"基础用法",_hid:21,_cid:8}},[n("van-cell-group",{attrs:{_hid:23,_cid:9}},[n("van-switch-cell",{attrs:{title:"标题",checked:t.checked,_hid:25,_batrs:"checked",_cid:10},on:{change:t.onChange}})],1)],1),n("wrap",{attrs:{title:"禁用状态",_hid:28,_cid:11}},[n("van-cell-group",{attrs:{_hid:30,_cid:12}},[n("van-switch-cell",{attrs:{disabled:!0,title:"标题",checked:t.checked,_hid:32,_batrs:"disabled,checked",_cid:13},on:{change:t.onChange}})],1)],1),n("wrap",{attrs:{title:"加载状态",_hid:35,_cid:14}},[n("van-cell-group",{attrs:{_hid:37,_cid:15}},[n("van-switch-cell",{attrs:{loading:!0,title:"标题",checked:t.checked,_hid:39,_batrs:"loading,checked",_cid:16},on:{change:t.onChange}})],1)],1),n("van-toast",{attrs:{id:"van-toast",_hid:42,_cid:17}})],1)},c=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return c})},2:function(t,e,n){},209:function(t,e,n){"use strict";var i=a(n(210)),c=a(n(9));function a(t){return t&&t.__esModule?t:{default:t}}i.default.mpType="page",new c.default(i.default).$mount()},210:function(t,e,n){"use strict";n.r(e);var i=n(129),c=n(67);for(var a in c)"default"!==a&&function(t){n.d(e,t,function(){return c[t]})}(a);n(211);var r=n(3),o=Object(r.a)(c.default,i.a,i.b,!1,null,null,null);o.options.__file="index.vue",e.default=o.exports},211:function(t,e,n){"use strict";var i=n(69);n.n(i).a},4:function(t,e,n){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrap",attrs:{_hid:0}},[this._ri(!!this.title,1)?e("div",{staticClass:"title",attrs:{_hid:1}},[this._v(this._s(this.title),2)]):this._e(),this._t("default",null,{_hid:4,_cid:0})],1)},c=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return c})},5:function(t,e,n){"use strict";n.r(e);var i=n(4),c=n(0);for(var a in c)"default"!==a&&function(t){n.d(e,t,function(){return c[t]})}(a);n(6);var r=n(3),o=Object(r.a)(c.default,i.a,i.b,!1,null,"570f1fcc",null);o.options.__file="wrap.vue",e.default=o.exports},6:function(t,e,n){"use strict";var i=n(2);n.n(i).a},67:function(t,e,n){"use strict";n.r(e);var i=n(68),c=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e.default=c.a},68:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=c(n(5));c(n(8));function c(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{checked:!0,checked2:!0}},methods:{onChange:function(t){var e=t.detail;this.checked=e},onChange2:function(t){var e=t.detail;this.checked2=e}},components:{wrap:i.default}}},69:function(t,e,n){},7:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};e.isObj=function(t){var e=void 0===t?"undefined":i(t);return null!==t&&("object"===e||"function"===e)},e.isDef=function(t){return null!=t},e.isNumber=function(t){return/^\d+$/.test(t)}},8:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(7);function c(){return(c=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}var a={type:"text",mask:!1,message:"",show:!0,zIndex:1e3,duration:3e3,position:"middle",forbidClick:!1,loadingType:"circular",selector:"#van-toast"},r=[],o=c({},a);function u(t){return(0,i.isObj)(t)?t:{message:t}}var s=function(t){void 0===t&&(t={});var e,n=((t=c({},o,u(t))).context||(e=getCurrentPages())[e.length-1]).selectComponent(t.selector);if(n)return delete t.context,delete t.selector,r.push(n),n.set(t),clearTimeout(n.timer),t.duration>0&&(n.timer=setTimeout(function(){n.clear(),r=r.filter(function(t){return t!==n})},t.duration)),n;console.warn("未找到 van-toast 节点，请确认 selector 及 context 是否正确")};["loading","success","fail"].forEach(function(t){var e;s[t]=(e=t,function(t){return s(c({type:e},u(t)))})}),s.clear=function(){r.forEach(function(t){t.clear()}),r=[]},s.setDefaultOptions=function(t){Object.assign(o,t)},s.resetDefaultOptions=function(){o=c({},a)},e.default=s}},[[209,0,1]]]);