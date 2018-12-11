import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-cell': '/static/vant/dist/cell/index',
      'van-checkbox': '/static/vant/dist/checkbox/index',
      'van-checkbox-group': '/static/vant/dist/checkbox-group/index',
    },
  },
};
