<template>
  <div class="goods-action-wrapper">
    <wrap title="基础用法">
      <van-goods-action class="action-wrapper">
        <van-goods-action-icon
          icon="chat"
          text="客服"
          @click="onClickIcon"
        />
        <van-goods-action-icon
          icon="cart"
          text="购物车"
          @click="onClickIcon"
        />
        <van-goods-action-button
          text="加入购物车"
          type="warning"
          @click="onClickButton"
        />
        <van-goods-action-button
          text="立即购买"
          @click="onClickButton"
        />
      </van-goods-action>
    </wrap>
    <wrap title="图标提示">
      <van-goods-action class="action-wrapper">
        <van-goods-action-icon icon="chat" text="客服" />
        <van-goods-action-icon icon="cart" text="购物车" info="5" />
        <van-goods-action-icon icon="shop" text="店铺" />
        <van-goods-action-button text="加入购物车" type="warning" />
        <van-goods-action-button text="立即购买" />
      </van-goods-action>
    </wrap>
    <van-toast id="van-toast" />
  </div>
</template>
<script>
import wrap from '@/components/wrap';
import Toast from '@/static/vant/dist/toast/toast';
export default {
  components: {
    wrap
  },
  methods: {
    onClickIcon() {
      Toast('点击图标');
    },
    onClickButton() {
      Toast('点击按钮');
    }
  }
};
</script>
<style lang="less">
.action-wrapper .van-goods-action {
  position: static;
}
</style>

