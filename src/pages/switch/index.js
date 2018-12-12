import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-cell': '/static/vant/dist/cell/index',
      'van-cell-group': '/static/vant/dist/cell-group/index',
      'van-switch': '/static/vant/dist/switch/index',
      'van-switch-cell': '/static/vant/dist/switch-cell/index',
    },
  },
};
