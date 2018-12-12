import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-icon': '/static/vant/dist/icon/index',
      'van-collapse': '/static/vant/dist/collapse/index',
      'van-collapse-item': '/static/vant/dist/collapse-item/index',
    },
  },
};
