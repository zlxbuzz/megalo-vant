<template>
  <div class="app">
    <wrap title="基础用法">
      <van-switch :checked="checked" @change="onChange" />
    </wrap>

    <wrap title="禁用状态">
      <van-switch :checked="checked" :disabled="true" @change="onChange" />
    </wrap>

    <wrap title="加载状态">
      <van-switch :checked="checked" :loading="true" @change="onChange" />
    </wrap>

    <wrap title="高级用法">
      <van-switch
        :checked="checked2"
        size="36px"
        active-color="#4b0"
        inactive-color="#f44"
        @change="onChange2"
      />
    </wrap>
    <wrap title="基础用法">
      <van-cell-group>
        <van-switch-cell title="标题" :checked="checked" @change="onChange" />
      </van-cell-group>
    </wrap>

    <wrap title="禁用状态">
      <van-cell-group>
        <van-switch-cell
          :disabled="true"
          title="标题"
          :checked="checked"
          @change="onChange"
        />
      </van-cell-group>
    </wrap>

    <wrap title="加载状态">
      <van-cell-group>
        <van-switch-cell
          :loading="true"
          title="标题"
          :checked="checked"
          @change="onChange"
        />
      </van-cell-group>
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
      checked: true,
      checked2: true,
    };
  },
  methods: {
    onChange({detail}) {
      this.checked = detail;
    },
    onChange2({detail}) {
      this.checked2 = detail;
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
