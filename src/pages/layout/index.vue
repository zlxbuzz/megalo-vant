<template>
  <div class="app">
    <wrap title="基础用法">
      <van-row>
        <van-col span="8" custom-class="dark">span: 8</van-col>
        <van-col span="8" custom-class="light">span: 8</van-col>
        <van-col span="8" custom-class="dark">span: 8</van-col>
      </van-row>

      <van-row>
        <van-col span="4" custom-class="dark">span: 4</van-col>
        <van-col span="10" offset="4" custom-class="light"
          >offset: 4, span: 10</van-col
        >
      </van-row>

      <van-row>
        <van-col offset="12" span="12" custom-class="dark"
          >offset: 12, span: 12</van-col
        >
      </van-row>
    </wrap>
    <wrap title="在列元素之间增加间距">
      <van-row gutter="20">
        <van-col span="8" custom-class="dark">span: 8</van-col>
        <van-col span="8" custom-class="light">span: 8</van-col>
        <van-col span="8" custom-class="dark">span: 8</van-col>
      </van-row>
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
.dark,
.light {
  color: #fff;
  font-size: 13px;
  line-height: 30px;
  text-align: center;
  margin-bottom: 10px;
  background-clip: content-box;
}

.dark {
  background-color: #39a9ed;
}

.light {
  background-color: #66c6f2;
}
</style>
