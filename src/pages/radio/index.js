import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-cell': '/static/vant/dist/cell/index',
      'van-cell-group': '/static/vant/dist/cell-group/index',
      'van-radio': '/static/vant/dist/radio/index',
      'van-radio-group': '/static/vant/dist/radio-group/index',
    },
  },
};
