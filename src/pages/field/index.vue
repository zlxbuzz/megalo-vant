<template>
  <div class="app">
    {{ value }}
    <wrap title="基用法">
      <van-cell-group>
        <van-field
          :value="value"
          placeholder="请输入用户名"
          :border="false"
          :clearable="true"
          @input="change"
        />
      </van-cell-group>
    </wrap>
    <wrap title="自定义类型">
      <van-cell-group>
        <van-field
          @clickIcon="onClickIcon"
          :value="username"
          label="用户名"
          placeholder="请输入用户名"
          icon="question"
          icon-class="icon"
        />
        <van-field
          :value="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
          :border="false"
        />
      </van-cell-group>
    </wrap>
    <wrap title="禁用输入框">
      <van-cell-group>
        <van-field
          value="输入框已禁用"
          label="用户名"
          left-icon="contact"
          disabled
          :border="false"
        />
      </van-cell-group>
    </wrap>
    <wrap title="错误提示">
      <van-cell-group>
        <van-field
          :value="username2"
          label="用户名"
          placeholder="请输入用户名"
          error
        />
        <van-field
          :value="phone"
          label="手机号"
          placeholder="请输入手机号"
          error-message="手机号格式错误"
          :border="false"
        />
      </van-cell-group>
    </wrap>
    <wrap title="高度自适应">
      <van-cell-group>
        <van-field
          :value="message"
          label="留言"
          type="textarea"
          placeholder="请输入留言"
          rows="1"
          autosize
          :border="false"
        />
      </van-cell-group>
    </wrap>
    <van-field
      :value="sms"
      center
      clearable
      label="短信验证码"
      placeholder="请输入短信验证码"
      :use-button-slot="true"
      :border="false"
    >
      <van-button
        slot="button"
        size="small"
        type="primary"
        custom-class="button"
        @click="send"
        >发送验证码</van-button
      >
    </van-field>
    <van-toast id="van-toast" />
  </div>
</template>

<script>
import wrap from '@/components/wrap';
import Toast from '@/static/vant/toast/toast';
export default {
  data() {
    return {
      value: '哈哈',
      username: '',
      password: '',
      username2: '',
      phone: '',
      message: '',
      sms: '',
    };
  },
  methods: {
    change({detail}) {
      this.value = detail;
    },
    onClickIcon() {
      Toast('haha');
    },
    send() {
      Toast('暂不支持多重slot');
    },
  },
  components: {
    wrap,
  },
};
</script>

<style lang="less"></style>
