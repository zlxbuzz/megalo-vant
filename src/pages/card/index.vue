<template>
  <div class="app">
    <wrap title="基础用法">
      <van-card
        num="2"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
      />
    </wrap>
    <wrap title="高级用法">
      <van-card
        num="2"
        tag="标签"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="//img.yzcdn.cn/upload_files/2017/07/02/af5b9f44deaeb68000d7e4a711160c53.jpg"
      >
      <view slot="footer">
        <van-button size="mini">按钮</van-button>
        <van-button size="mini">按钮</van-button>
      </view>
    </van-card>
    </wrap>
  </div>
</template>
<script>
import wrap from '@/components/wrap';
export default {
  components: {
    wrap
  }
};
</script>
