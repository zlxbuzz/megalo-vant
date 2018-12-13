<template>
  <div class="app">
    <wrap title="基础用法">
      <van-stepper @change="onChange1" :value="value1" /> {{ value1 }}</wrap
    >

    <wrap title="禁用状态">
      <van-stepper :value="value1" :disabled="true" />
    </wrap>

    <wrap title="高级用法">
      <van-stepper
        :value="value2"
        @change="onChange2"
        integer
        min="5"
        max="40"
        step="2"
      />
      {{ value2 }}
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
      value1: 1,
      value2: 5,
    };
  },
  methods: {
    onChange1(event) {
      this.value1 = event.detail;
    },
    onChange2(event) {
      this.value2 = event.detail;
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
