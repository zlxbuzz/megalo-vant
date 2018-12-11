import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-collapse': '/static/vant/dist/collapse/index',
      'van-collapse-item': '/static/vant/dist/collapse-item/index',
      'van-cell': '/static/vant/dist/cell/index',
    },
  },
};
