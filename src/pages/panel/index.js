import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-panel': '/static/vant/dist/panel/index',
      'van-button': '/static/vant/dist/button/index',
    },
  },
};
