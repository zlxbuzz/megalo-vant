<template>
  <div class="app">
    <wrap title="基础用法">
      <van-button @click="toggleActionSheet1">弹出 ActionSheet</van-button>
      <van-action-sheet
        :show="show1"
        :actions="actions"
        @close="toggleActionSheet1"
        @select="toggleActionSheet1"
      />
    </wrap>

    <wrap title="带取消按钮的 ActionSheet">
      <van-button @click="toggleActionSheet2"
        >弹出带取消按钮的 ActionSheet</van-button
      >
      <van-action-sheet
        :show="show2"
        :actions="actions"
        cancel-text="取消"
        @close="toggleActionSheet2"
        @cancel="toggleActionSheet2"
        @select="toggleActionSheet2"
      />
    </wrap>

    <wrap title="带标题的 ActionSheet">
      <van-button @click="toggleActionSheet3"
        >弹出带标题的 ActionSheet</van-button
      >
      <van-action-sheet :show="show3" title="标题" @close="toggleActionSheet3">
        <view class="content">内容</view>
      </van-action-sheet>
    </wrap>
  </div>
</template>

<script>
import wrap from '@/components/wrap';
export default {
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      actions: [
        {name: '选项'},
        {name: '分享', subname: '描述信息', openType: 'share'},
        {loading: true},
        {name: '禁用选项', disabled: true},
      ],
    };
  },
  methods: {
    toggle(type) {
      this[type] = !this[type];
    },

    toggleActionSheet1() {
      this.toggle('show1');
    },

    toggleActionSheet2() {
      this.toggle('show2');
    },

    toggleActionSheet3() {
      this.toggle('show3');
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
