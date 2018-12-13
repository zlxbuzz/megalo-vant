<template>
  <div class="app">
    <wrap title="基础用法">
      <van-notice-bar
        :text="text"
        left-icon="//img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png"
      />
    </wrap>

    <wrap title="禁用滚动">
      <van-notice-bar :scrollable="false" :text="text" />
    </wrap>

    <wrap title="通告栏模式">
      <van-notice-bar
        mode="closeable"
        :text="text"
        custom-class="demo-margin-bottom"
      />
      <van-notice-bar mode="link" :text="text" />
    </wrap>

    <van-toast id="van-toast" />
  </div>
</template>

<script>
import wrap from '@/components/wrap';
import Toast from '@/static/vant/toast/toast';
export default {
  data() {
    return {
      text:
        '足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力',
    };
  },
  components: {
    wrap,
  },
};
</script>
