import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-notice-bar': '/static/vant/dist/notice-bar/index',
    },
  },
};
