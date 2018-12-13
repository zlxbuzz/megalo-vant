import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-submit-bar': '/static/vant/submit-bar/index',
      'van-tag': '/static/vant/tag/index',
      'van-toast': '/static/vant/toast/index',
    },
  },
};
