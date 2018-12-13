<template>
  <div class="app">
    <van-tabs :active="active" @change="onSwitch">
      <van-tab title="基础图标">
        <van-col
          v-for="(v, key) in basic"
          :key="key"
          custom-class="col"
          span="8"
        >
          <van-icon :name="v" size="32px" custom-class="icon" />
          <view class="text">{{ v }}</view>
        </van-col>
      </van-tab>
      <van-tab title="线框风格">
        <van-col
          v-for="(v, key) in outline"
          :key="key"
          custom-class="col"
          span="8"
        >
          <van-icon :name="v" size="32px" custom-class="icon" />
          <view class="text">{{ v }}</view>
        </van-col>
      </van-tab>
      <van-tab title="实底风格" custom-class="demo-tab-pane">
        <van-col
          v-for="(v, key) in filled"
          :key="key"
          custom-class="col"
          span="8"
        >
          <van-icon :name="v" size="32px" custom-class="icon" />
          <view class="text">{{ v }}</view>
        </van-col>
      </van-tab>
    </van-tabs>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import wrap from '@/components/wrap';
import Toast from '@/static/vant/toast/toast';
import config from './config';

const basic = config.basic.map(item => item.css);
const outline = config.outline.map(item => item.css);
const filled = config.filled.map(item => item.css);
export default {
  data() {
    return {
      basic,
      outline,
      filled,
      active: 0,
    };
  },
  methods: {
    onSwitch(event) {
      this.active = event.detail.index;
    },
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
.col {
  text-align: center;
  height: 100px;
  float: none;
  display: inline-block;
  vertical-align: middle;
}

.icon {
  display: block;
  margin: 15px 0;
  color: rgba(69, 90, 100, 0.8);
}

.text {
  font-size: 14px;
}

.demo-tab-pane {
  padding-top: 10px;
}
</style>
