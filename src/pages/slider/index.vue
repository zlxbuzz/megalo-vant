<template>
  <div class="app">
    <wrap title="基础用法">
      <van-slider custom-class="slider" value="50" @change="onChange" />
    </wrap>

    <wrap title="指定选择范围">
      <van-slider
        custom-class="slider"
        value="50"
        min="10"
        max="90"
        @change="onChange"
      />
    </wrap>

    <wrap title="禁用">
      <van-slider custom-class="slider" value="50" :disabled="true" />
    </wrap>

    <wrap title="指定步长">
      <van-slider
        custom-class="slider"
        value="50"
        step="10"
        bar-height="4px"
        @change="onChange"
      />
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
      value: '',
    };
  },
  methods: {
    onChange(event) {
      wx.showToast({
        icon: 'none',
        title: `当前值：${event.detail}`,
      });
    },
  },
  components: {
    wrap,
  },
};
</script>

<style lang="less">
.demo-radio-group {
  padding: 0 17px;
}

.demo-radio {
  margin-bottom: 10px;
}
</style>
