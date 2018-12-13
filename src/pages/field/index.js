import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-field': '/static/vant/field/index',
      'van-toast': '/static/vant/toast/index',
      'van-button': '/static/vant/button/index',
      'van-cell-group': '/static/vant/cell-group/index',
    },
  },
};
