import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-tabs': '/static/vant/tabs/index',
      'van-tab': '/static/vant/tab/index',
      'van-col': '/static/vant/col/index',
      'van-icon': '/static/vant/icon/index',
      'van-toast': '/static/vant/toast/index',
    },
  },
};
