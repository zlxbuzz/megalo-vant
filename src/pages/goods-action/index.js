import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    usingComponents: {
      'van-goods-action': '/static/vant/goods-action/index',
      'van-goods-action-icon': '/static/vant/goods-action-icon/index',
      'van-goods-action-button': '/static/vant/goods-action-button/index',
      'van-toast': '/static/vant/toast/index',
    },
  },
};
