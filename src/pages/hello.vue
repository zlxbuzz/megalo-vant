<template>
  <div class="app">
    <van-collapse :value="activeNames">
      <van-collapse-item title="有赞微商城" name="1">
        提供多样店铺模板，快速搭建网上商城
      </van-collapse-item>
      <van-collapse-item title="有赞零售" name="2">
        网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
      </van-collapse-item>
      <van-collapse-item title="有赞美业" name="3" disabled>
        线上拓客，随时预约，贴心顺手的开单收银
      </van-collapse-item>
    </van-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ['1'],
    };
  },
  components: {
    /*
    vanCollapse,
    vanCollapseItem,
    */
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
