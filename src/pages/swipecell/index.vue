<template>
  <div class="app">
    <van-swipe-cell right-width=" 65 " left-width=" 65 ">
      <view slot="left" class="van-swipe-cell__left">选择</view>
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
      </van-cell-group>
      <view slot="right" class="van-swipe-cell__right">删除</view>
    </van-swipe-cell>

    <van-swipe-cell
      id="swipe-cell"
      right-width=" 65 "
      left-width=" 65 "
      :async-close="true"
      @close="onClose"
    >
      <view slot="left" class="van-swipe-cell__left">选择</view>
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
      </van-cell-group>
      <view slot="right" class="van-swipe-cell__right">删除</view>
    </van-swipe-cell>

    <van-dialog id="van-dialog" />
  </div>
</template>
<script>
import wrap from '@/components/wrap';
import Dialog from '@/static/vant/dialog/dialog';
export default {
  methods: {
    onClose({detail}) {
      const {position, instance} = detail;
      switch (position) {
        case 'left':
        case 'cell':
          instance.close();
          break;
        case 'right':
          Dialog.confirm({
            message: '确定删除吗？',
          }).then(() => {
            console.log('close');
            instance.close();
          });
          break;
      }
    },
  },
  components: {
    wrap,
  },
};
</script>

<style lang="less">
.demo-swipe-cell {
  user-select: none;
}

.van-swipe-cell__left,
.van-swipe-cell__right {
  display: inline-block;
  width: 65px;
  height: 44px;
  font-size: 15px;
  line-height: 44px;
  color: #fff;
  text-align: center;
  background-color: #f44;
}
</style>
