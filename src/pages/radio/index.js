import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-cell': '/static/vant/cell/index',
      'van-cell-group': '/static/vant/cell-group/index',
      'van-radio': '/static/vant/radio/index',
      'van-radio-group': '/static/vant/radio-group/index',
    },
  },
};
