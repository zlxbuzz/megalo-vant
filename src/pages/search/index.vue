<template>
  <div class="app">
    <wrap title="基本用法">
      <van-search
        :value="value"
        placeholder="请输入搜索关键词"
        @change="onChange"
      />
    </wrap>

    <wrap title="监听对应事件">
      <van-search
        :value="value"
        show-action
        placeholder="请输入搜索关键词"
        @change="onChange"
        @search="onSearch"
        @cancel="onCancel"
        @clear="onClear"
      />
    </wrap>

    <van-search
      :value="value"
      placeholder="请输入搜索关键词"
      :use-action-slot="true"
      @change="onChange"
      @search="onSearch"
    >
      <view slot="action" @tap="onSearch">搜索</view>
    </van-search>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import wrap from '@/components/wrap';
import Toast from '@/static/vant/dist/toast/toast';
export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onChange(event) {
      this.value = event.detail;
    },
    onSearch(event) {
      if (this.value) {
        wx.showToast({
          title: '搜索：' + this.value,
          icon: 'none',
        });
      }
    },

    onCancel() {
      wx.showToast({
        title: '取消',
        icon: 'none',
      });
    },

    onClear() {
      wx.showToast({
        title: '清空',
        icon: 'none',
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
