import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-cell': '/static/vant/cell/index',
      'van-transition': '/static/vant/transition/index',
      'van-toast': '/static/vant/toast/index',
    },
  },
};
