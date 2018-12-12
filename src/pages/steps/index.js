import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-steps': '/static/vant/dist/steps/index',
      'van-button': '/static/vant/dist/button/index',
    },
  },
};
