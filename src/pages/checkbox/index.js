import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-cell': '/static/vant/cell/index',
      'van-checkbox': '/static/vant/checkbox/index',
      'van-checkbox-group': '/static/vant/checkbox-group/index',
    },
  },
};
