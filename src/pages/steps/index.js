import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-steps': '/static/vant/steps/index',
      'van-button': '/static/vant/button/index',
    },
  },
};
