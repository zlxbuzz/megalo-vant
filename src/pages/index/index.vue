<template>
  <div class="app">
    <van-collapse :value="activeNames" @input="change">
      <van-collapse-item title="基础组件" name="1">
        <van-cell title="button 按钮" is-link url="/pages/button/index" />
        <van-cell title="cell 单元格" is-link url="/pages/cell/index" />
        <van-cell title="icon 图标" is-link url="/pages/icon/index" />
        <van-cell title="layout 布局" is-link url="/pages/layout/index" />
        <van-cell title="popup 弹出" is-link url="/pages/popup/index" />
        <van-cell
          title="transition 动画"
          is-link
          url="/pages/transition/index"
        />
      </van-collapse-item>
      <van-collapse-item title="表单组件" name="2">
        <van-cell title="checkbox" is-link url="/pages/checkbox/index" />
        <van-cell
          title="datetimepicker"
          is-link
          url="/pages/datetimepicker/index"
        />
        <van-cell title="field" is-link url="/pages/field/index" />
        <van-cell title="radio" is-link url="/pages/radio/index" />
        <van-cell title="rate" is-link url="/pages/rate/index" />
        <van-cell title="search" is-link url="/pages/search/index" />
        <van-cell title="slider" is-link url="/pages/slider/index" />
        <van-cell title="stepper" is-link url="/pages/stepper/index" />
        <van-cell title="switch" is-link url="/pages/switch/index" />
      </van-collapse-item>
      <van-collapse-item title="展示组件" name="3">
        <van-cell
          title="collapse 折叠面板"
          is-link
          url="/pages/collapse/index"
        />
        <van-cell
          title="NoticeBar 通告栏"
          is-link
          url="/pages/noticebar/index"
        />
        <van-cell title="Panel 面板" is-link url="/pages/panel/index" />
        <van-cell title="Progress 进度条" is-link url="/pages/progress/index" />
        <van-cell title="Steps 步骤条" is-link url="/pages/steps/index" />
        <van-cell title="Tag 标签" is-link url="/pages/tag/index" />
        <van-cell
          title="TreeSelect 分类选择"
          is-link
          url="/pages/treeselect/index"
        />
      </van-collapse-item>
      <van-collapse-item title="反馈组件" name="4">
        <van-cell
          title="ActionSheet 上拉菜单"
          is-link
          url="/pages/actionsheet/index"
        />
        <van-cell title="Dialog 弹出框" is-link url="/pages/dialog/index" />
        <van-cell title="Loading 加载" is-link url="/pages/loading/index" />
        <van-cell title="Notify 消息提示" is-link url="/pages/notify/index" />
        <van-cell
          title="SwipeCell 滑动单元格"
          is-link
          url="/pages/swipecell/index"
        />
        <van-cell title="Toast 轻提示" is-link url="/pages/toast/index" />
      </van-collapse-item>
      <van-collapse-item title="业务组件" name="3">
        <van-cell title="Area 省市区选择" is-link url="/pages/area/index" />
        <van-cell title="Card 商品卡片" is-link url="/pages/card/index" />
        <van-cell title="SubmitBar 提交订单栏" is-link url="/pages/submit-bar/index" />
        <van-cell title="GoodsAction 商品导航" is-link url="/pages/goods-action/index" />
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {

      activeNames: [],

    };
  },
  methods: {
    change(e) {
      this.activeNames = e.detail;
    },
  },
};
</script>

<style lang="less" scoped>
.app {
  padding-top: 100px;
  .img {
    display: block;
    height: 120px;
    width: 138px;
    margin: 20px auto;
  }
  .txt {
    color: #567567;
    font-size: 13px;
    text-align: center;
  }
}
</style>
