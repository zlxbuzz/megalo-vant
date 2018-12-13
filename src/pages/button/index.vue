<template>
  <div class="app">
    <wrap title="按钮类型">
      <van-button @click="show" type="primary">主要按钮</van-button>
      <van-button @click="show" type="danger">危险按钮</van-button>
      <van-button>默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>
      <van-button type="primary" plain>朴素按钮</van-button>
      <van-button type="danger" plain>朴素按钮</van-button>
    </wrap>
    <wrap title="特殊类型">
      <van-button type="primary" disabled>禁用状态</van-button>
      <van-button type="danger" disabled>禁用状态</van-button>
      <van-button
        loading
        type="primary"
        class="demo-margin-right"
        loading-class="loading"
      />
      <van-button loading type="danger" loading-class="loading" />
      <van-button type="primary" square>方形按钮</van-button>
      <van-button @click="show" type="danger" :round="true"
        >圆形按钮</van-button
      >
      <van-button @click="show" size="large" :block="true"
        >大号按钮,点我试试</van-button
      >
      <van-button>普通按钮</van-button>
      <van-button size="small">小型按钮</van-button>
      <van-button size="mini">迷你按钮</van-button>
    </wrap>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import wrap from '@/components/wrap';
import Toast from '@/static/vant/toast/toast';
export default {
  methods: {
    show() {
      Toast('我是弹窗哈哈');
    },
  },
  components: {
    wrap,
  },
};
</script>

<style lang="less">
.loading {
  margin: 0 18px;
}

.row {
  height: 44px;
  margin-bottom: 15px;
}
.van-button {
  margin: 5px;
}
</style>
