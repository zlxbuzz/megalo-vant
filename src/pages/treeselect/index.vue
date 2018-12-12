<template>
  <div class="app">
    <wrap title="基础用法">
      <van-tree-select
        :items="items"
        :main-active-index="mainActiveIndex"
        :active-id="activeId"
        @clickItem="onClickItem"
        @clickNav="onClickNav"
      ></van-tree-select>
    </wrap>
  </div>
</template>

<script>
import wrap from '@/components/wrap';
import Toast from '@/static/vant/dist/toast/toast';
import config from './config';
export default {
  data() {
    return {
      items: [
        {
          // 导航名称
          text: '所有城市',
          // 该导航下所有的可选项
          children: [...config.pro1, ...config.pro2],
        },
        {
          // 导航名称
          text: config.pro1Name,
          // 该导航下所有的可选项
          children: config.pro1,
        },
        {
          text: config.pro2Name,
          children: config.pro2,
        },
      ],
      mainActiveIndex: 0,
      activeId: 1,
    };
  },
  methods: {
    onClickNav({detail}) {
      this.mainActiveIndex = detail.index || 0;
    },
    onClickItem({detail}) {
      this.activeId = detail.id;
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
