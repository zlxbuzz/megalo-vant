import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-row': '/static/vant/row/index',
      'van-col': '/static/vant/col/index',
    },
  },
};
