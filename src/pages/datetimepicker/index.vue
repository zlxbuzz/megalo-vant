<template>
  <div class="app">
    <wrap title="获取时间">
      <van-button @click="getTime">获取时间{{ currentDate }}</van-button>
      <van-popup
        position="bottom"
        :show="show"
        custom-class="center"
        @close="show = false;"
      >
        <van-datetime-picker
          type="datetime"
          :value="currentDate"
          :min-date="minDate"
          :max-date="maxDate"
          @cancel="show = false;"
          @confirm="confirm"
        />
      </van-popup>
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
      show: false,
      minHour: 10,
      maxHour: 20,
      minDate: new Date().getTime(),
      maxDate: new Date(2019, 10, 1).getTime(),
      currentDate: new Date().getTime(),
    };
  },
  methods: {
    getTime() {
      this.show = true;
    },
    confirm(event) {
      this.currentDate = event.detail;
      this.show = false;
    },
  },
  components: {
    wrap,
  },
};
</script>

<style lang="less"></style>
