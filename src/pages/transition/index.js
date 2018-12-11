import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-cell': '/static/vant/dist/cell/index',
      'van-transition': '/static/vant/dist/transition/index',
      'van-toast': '/static/vant/dist/toast/index',
    },
  },
};
