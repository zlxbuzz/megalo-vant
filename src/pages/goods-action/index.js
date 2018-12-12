import App from './index.vue';
import Vue from 'vue';

const app = new Vue(App);

app.$mount();

export default {
  config: {
    "usingComponents": {
      "van-goods-action": "/static/vant/dist/goods-action/index",
      "van-goods-action-icon": "/static/vant/dist/goods-action-icon/index",
      "van-goods-action-button": "/static/vant/dist/goods-action-button/index",
      "van-toast": "/static/vant/dist/toast/index",
    }
  },
};
