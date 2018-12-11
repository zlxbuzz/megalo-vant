<template>
  <div class="app">
    <wrap title="基础用法">
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell
          title="单元格"
          value="内容"
          label="描述信息"
          :border="false"
        />
      </van-cell-group>
    </wrap>
    <wrap title="单元格大小">
      <van-cell-group>
        <van-cell title="单元格" value="内容" size="large" />
        <van-cell title="单元格" value="内容" size="large" label="描述信息" />
      </van-cell-group>
    </wrap>
    <wrap title="展示图标">
      <van-cell-group>
        <van-cell title="单元格" icon="location" />
      </van-cell-group>
    </wrap>
    <wrap title="展示箭头">
      <van-cell-group>
        <van-cell title="单元格" is-link />
        <van-cell title="单元格" value="内容" is-link />
        <van-cell
          title="单元格"
          value="内容"
          is-link
          arrow-direction="down"
          url="/pages/button/index"
        />
      </van-cell-group>
    </wrap>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import wrap from '@/components/wrap';
import Toast from '@/static/vant/dist/toast/toast';
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

<style lang="less" scoped></style>
