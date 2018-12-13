<template>
  <div class="app">
    <wrap title="单选框">
      <van-radio-group :value="radio1" @change="onChange" data-key="radio1">
        <van-radio name="1" custom-class="demo-radio">单选框 1</van-radio>
        <van-radio name="2" custom-class="demo-radio">单选框 2</van-radio>
      </van-radio-group>
      {{ radio1 }}
    </wrap>
    <wrap title="禁用状态">
      <van-radio-group
        :disabled="true"
        :value="radio2"
        data-key="radio2"
        custom-class="demo-radio-group"
        @change="onChange"
      >
        <van-radio name="1" custom-class="demo-radio">单选框 1</van-radio>
        <van-radio name="2" custom-class="demo-radio">单选框 2</van-radio>
      </van-radio-group>
    </wrap>

    <wrap title="自定义颜色">
      <van-radio
        name="1"
        value="1"
        custom-class="demo-radio"
        checked-color="#4b0"
      >
        单选框
      </van-radio>
    </wrap>

    <wrap title="与 Cell 组件一起使用">
      <van-radio-group :value="radio3">
        <van-cell-group>
          <van-cell title="单选框 1" clickable data-value="1" @click="onClick">
            <van-radio name="1" />
          </van-cell>
          <van-cell title="单选框 2" clickable data-value="2" @click="onClick">
            <van-radio name="2" />
          </van-cell>
        </van-cell-group>
      </van-radio-group>
      {{ radio3 }}
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
      radio1: '1',
      radio2: '2',
      radio3: '1',
    };
  },
  methods: {
    onChange(event) {
      const {key} = event.currentTarget.dataset;
      this[key] = event.detail;
    },
    onClick(event) {
      const {value} = event.currentTarget.dataset;
      this.radio3 = value;
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
