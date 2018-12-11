import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-cell': '/static/vant/dist/cell/index',
      'van-tag': '/static/vant/dist/tag/index',
      'van-icon': '/static/vant/dist/icon/index',
      'van-cell-group': '/static/vant/dist/cell-group/index',
      'van-toast': '/static/vant/dist/toast/index',
    },
  },
};
