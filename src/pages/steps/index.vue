<template>
  <div class="app">
    <wrap title="基础用法">
      <van-steps
        :steps="steps"
        :active="active"
        custom-class="demo-margin-bottom"
      />

      <van-button custom-class="demo-margin-left" @click="nextStep"
        >下一步</van-button
      >
    </wrap>

    <wrap title="竖向步骤条">
      <van-steps
        :steps="steps"
        :active="active"
        direction="vertical"
        active-color="#f44"
      />
    </wrap>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import wrap from '@/components/wrap';
import Toast from '@/static/vant/dist/toast/toast';
export default {
  data() {
    return {
      active: 0,
      steps: [
        {
          text: '步骤一',
          desc: '描述信息',
        },
        {
          text: '步骤二',
          desc: '描述信息',
        },
        {
          text: '步骤三',
          desc: '描述信息',
        },
        {
          text: '步骤四',
          desc: '描述信息',
        },
      ],
    };
  },
  methods: {
    nextStep() {
      this.active = ++this.active % 4;
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
