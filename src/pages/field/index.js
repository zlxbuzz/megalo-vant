import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-field': '/static/vant/dist/field/index',
      'van-toast': '/static/vant/dist/toast/index',
      'van-button': '/static/vant/dist/button/index',
      'van-cell-group': '/static/vant/dist/cell-group/index',
    },
  },
};
