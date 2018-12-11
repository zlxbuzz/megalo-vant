<template>
  <div class="app">
    <wrap title="基础用法">
      <van-cell title="Fade" @click="onClickFade" :is-link="true" />
      <van-cell title="Fade Up" @click="onClickFadeUp" :is-link="true" />
      <van-cell title="Fade Down" @click="onClickFadeDown" :is-link="true" />
      <van-cell title="Fade Left" @click="onClickFadeLeft" :is-link="true" />
      <van-cell title="Fade Right" @click="onClickFadeRight" :is-link="true" />
      <van-cell title="Slide Up" @click="onClickSlideUp" :is-link="true" />
      <van-cell title="Slide Down" @click="onClickSlideDown" :is-link="true" />
      <van-cell title="Slide Left" @click="onClickSlideLeft" :is-link="true" />
      <van-cell
        title="Slide Right"
        @click="onClickSlideRight"
        :is-link="true"
      />

      <van-transition :show="show" :name="name" custom-class="block" />
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
      show: false,
      name: 'fade',
    };
  },
  methods: {
    trigger(name) {
      this.name = name;
      this.show = true;
      setTimeout(() => {
        this.show = false;
      }, 500);
    },
    onClickFade() {
      console.log(1);
      this.trigger('fade');
    },

    onClickFadeUp() {
      this.trigger('fade-up');
    },

    onClickFadeDown() {
      this.trigger('fade-down');
    },

    onClickFadeLeft() {
      this.trigger('fade-left');
    },

    onClickFadeRight() {
      this.trigger('fade-right');
    },

    onClickSlideUp() {
      this.trigger('slide-up');
    },

    onClickSlideDown() {
      this.trigger('slide-down');
    },

    onClickSlideLeft() {
      this.trigger('slide-left');
    },

    onClickSlideRight() {
      this.trigger('slide-right');
    },
  },
  components: {
    wrap,
  },
};
</script>

<style lang="less">
.block {
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  position: fixed;
  margin: -50px 0 0 -50px;
  background-color: #1989fa;
}
</style>
