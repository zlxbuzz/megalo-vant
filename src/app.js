import App from './App';
import Vue from 'vue';
import VHtmlPlugin from '@megalo/vhtml-plugin';

Vue.use(VHtmlPlugin);

const app = new Vue(App);

app.$mount();

export default {
  config: {
    // pages 的首个页面会被编译成首页
    pages: [
      'pages/index/index',
      'pages/my/index',
      'pages/button/index',
      'pages/cell/index',
      'pages/icon/index',
      'pages/layout/index',
      'pages/popup/index',
      'pages/transition/index',

      'pages/checkbox/index',
      'pages/datetimepicker/index',
    ],
    tabBar: {
      color: '#333',
      selectedColor: '#007d37',
      list: [
        {
          pagePath: 'pages/index/index',
          text: 'home',
          iconPath: 'static/imgs/home.png',
          selectedIconPath: 'static/imgs/home_on.png',
        },
        {
          pagePath: 'pages/my/index',
          text: 'my',
          iconPath: 'static/imgs/mine.png',
          selectedIconPath: 'static/imgs/mine_on.png',
        },
      ],
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'megalo-vant',
      navigationBarTextStyle: 'black',
    },
  },
};
