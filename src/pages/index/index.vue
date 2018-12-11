<template>
  <div class="app">
    <van-collapse :value="activeNames" @input="change">
      <van-collapse-item title="基础组件" name="1">
        <van-cell title="button 按钮" is-link url="/pages/button/index" />
        <van-cell title="cell 单元格" is-link url="/pages/cell/index" />
        <van-cell title="icon 图标" is-link url="/pages/icon/index" />
        <van-cell title="layout 布局" is-link url="/pages/layout/index" />
        <van-cell title="popup 弹出" is-link url="/pages/popup/index" />
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['3'],
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
