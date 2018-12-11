import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-tabs': '/static/vant/dist/tabs/index',
      'van-tab': '/static/vant/dist/tab/index',
      'van-col': '/static/vant/dist/col/index',
      'van-icon': '/static/vant/dist/icon/index',
      'van-toast': '/static/vant/dist/toast/index',
    },
  },
};
