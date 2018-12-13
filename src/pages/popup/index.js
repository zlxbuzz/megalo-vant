import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-popup': '/static/vant/popup/index',
      'van-button': '/static/vant/button/index',
    },
  },
};
