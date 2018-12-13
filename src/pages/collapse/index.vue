<template>
  <div class="app">
    <wrap title="基础用法">
      <van-collapse :value="active1" data-key="active1" @change="onChange">
        <van-collapse-item
          :title="title1"
          content-class="van-collapse-item__content"
          >{{ content1 }}</van-collapse-item
        >
        <van-collapse-item
          :title="title2"
          content-class="van-collapse-item__content"
          >{{ content2 }}</van-collapse-item
        >
        <van-collapse-item
          :title="title3"
          content-class="van-collapse-item__content"
          :disabled="true"
        >
          {{ content3 }}
        </van-collapse-item>
      </van-collapse>
    </wrap>

    <wrap title="手风琴">
      <van-collapse
        :value="active2"
        data-key="active2"
        :accordion="true"
        @change="onChange"
      >
        <van-collapse-item
          :title="title1"
          content-class="van-collapse-item__content"
          >{{ content1 }}</van-collapse-item
        >
        <van-collapse-item
          :title="title2"
          content-class="van-collapse-item__content"
          >{{ content2 }}</van-collapse-item
        >
        <van-collapse-item
          :title="title3"
          content-class="van-collapse-item__content"
          >{{ content3 }}</van-collapse-item
        >
      </van-collapse>
    </wrap>

    <van-collapse :value="active3" data-key="active3" @change="onChange">
      <van-collapse-item content-class="van-collapse-item__content">
        <view slot="title"
          >{{ title1
          }}<van-icon name="question" custom-class="van-icon-question"
        /></view>
        {{ content1 }}
      </van-collapse-item>
      <van-collapse-item
        :title="title2"
        content-class="van-collapse-item__content"
        value="内容"
        icon="shop"
        >{{ content2 }}</van-collapse-item
      >
      <van-collapse-item
        :title="title3"
        content-class="van-collapse-item__content"
        >{{ content3 }}</van-collapse-item
      >
    </van-collapse>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import wrap from '@/components/wrap';
import Toast from '@/static/vant/toast/toast';
export default {
  data() {
    return {
      active1: [0],
      active2: 0,
      active3: [],
      title1: '有赞微商城',
      title2: '有赞零售',
      title3: '有赞美业',
      content1: '提供多样店铺模板，快速搭建网上商城',
      content2:
        '网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失',
      content3: '线上拓客，随时预约，贴心顺手的开单收银',
    };
  },
  methods: {
    onChange({currentTarget, detail}) {
      const {key} = currentTarget.dataset;
      this[key] = detail;
    },
  },
  components: {
    wrap,
  },
};
</script>

<style lang="less">
.van-collapse-item__content {
  font-size: 13px;
  line-height: 1.5;
  color: #666;
}

.van-icon-question {
  margin-left: 5px;
  font-size: 15px !important;
  color: #1989fa;
  vertical-align: -3px;
}
</style>
