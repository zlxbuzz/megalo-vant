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
      'pages/field/index',
      'pages/radio/index',
      'pages/rate/index',
      'pages/search/index',
      'pages/slider/index',
      'pages/stepper/index',
      'pages/switch/index',

      'pages/collapse/index',
      'pages/noticebar/index',
      'pages/panel/index',
      'pages/progress/index',
      'pages/steps/index',
      'pages/tag/index',
      'pages/treeselect/index',

      'pages/actionsheet/index',
      'pages/dialog/index',
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
