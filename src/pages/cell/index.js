import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-cell': '/static/vant/cell/index',
      'van-tag': '/static/vant/tag/index',
      'van-icon': '/static/vant/icon/index',
      'van-cell-group': '/static/vant/cell-group/index',
      'van-toast': '/static/vant/toast/index',
    },
  },
};
