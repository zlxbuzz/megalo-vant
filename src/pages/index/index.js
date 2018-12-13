import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-collapse': '/static/vant/collapse/index',
      'van-collapse-item': '/static/vant/collapse-item/index',
      'van-cell': '/static/vant/cell/index',
    },
  },
};
