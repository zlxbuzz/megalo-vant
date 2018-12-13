<template>
  <div class="app">
    <wrap title="消息提示">
      <van-button
        :plain="true"
        type="primary"
        class="demo-margin-right"
        @click="onClickAlert"
      >
        消息提示
      </van-button>
      <van-button :plain="true" type="primary" @click="onClickAlert2">
        无标题提示
      </van-button>
    </wrap>

    <wrap title="消息确认">
      <van-button :plain="true" type="primary" @click="onClickConfirm">
        消息确认
      </van-button>
    </wrap>

    <van-button :plain="true" type="danger" @click="showCustomDialog">
      组件调用
    </van-button>
    <van-dialog
      :use-slot="true"
      :async-close="true"
      :show="show"
      :show-cancel-button="true"
      @close="onClose"
      confirm-button-open-type="getUserInfo"
      @getuserinfo="getUserInfo"
    >
      <van-field :value="username" label="用户名" placeholder="请输入用户名" />
      <van-field
        :value="password"
        type="password"
        label="密码"
        :border="false"
        placeholder="请输入密码"
      />
    </van-dialog>

    <van-dialog id="van-dialog" />
  </div>
</template>

<script>
import wrap from '@/components/wrap';
import Dialog from '@/static/vant/dialog/dialog';
const message = '哈哈';
export default {
  data() {
    return {
      show: false,
      username: '',
      password: '',
    };
  },
  methods: {
    showCustomDialog() {
      this.show = true;
    },

    onClickAlert() {
      Dialog.alert({
        title: '标题',
        message,
      });
    },

    getUserInfo(event) {
      console.log(event.detail);
    },

    onClickAlert2() {
      Dialog.alert({
        message,
      });
    },

    onClickConfirm() {
      Dialog.confirm({
        title: '标题',
        message,
      })
        .then(() => {
          console.log('confirm');
        })
        .catch(() => {
          console.log('cancel');
        });
    },

    onClose(event) {
      if (event.detail === 'confirm') {
        setTimeout(() => {
          this.show = false;
        }, 1000);
      } else {
        this.show = false;
      }
    },
  },
  components: {
    wrap,
  },
};
</script>

<style lang="less">
.van-button {
  margin: 5px;
}
</style>
