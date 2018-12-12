<template>
  <div class="app">
    <div title="基础用法">
      <van-panel title="标题" desc="描述信息" status="状态">
        <div class="content">内容</div>
      </van-panel>
    </div>

    <van-panel
      title="标题"
      desc="描述信息"
      status="状态"
      :use-footer-slot="true"
    >
      <div class="content">内容</div>
      <div slot="footer" class="footer">
        <van-button size="small" class="demo-margin-right">按钮</van-button>
        <van-button size="small" type="danger">按钮</van-button>
      </div>
    </van-panel>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import wrap from '@/components/wrap';
import Toast from '@/static/vant/dist/toast/toast';
export default {
  components: {
    wrap,
  },
};
</script>

<style lang="less">
.content {
  padding: 20px;
  font-size: 16px;
}

.footer {
  text-align: right;
}
</style>
