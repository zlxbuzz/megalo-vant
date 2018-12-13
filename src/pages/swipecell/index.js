import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-cell-group': '/static/vant/cell-group/index',
      'van-cell': '/static/vant/cell/index',
      'van-swipe-cell': '/static/vant/swipe-cell/index',
      'van-dialog': '/static/vant/dialog/index',
    },
  },
};
