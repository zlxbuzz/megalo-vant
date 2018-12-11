<template>
  <div class="app">
    <wrap title="复选框">
      <van-checkbox
        :value="checkbox1"
        data-key="checkbox1"
        custom-class="demo-checkbox"
        @change="onChange"
      >
        复选框 {{ checkbox1 }}
      </van-checkbox>
    </wrap>
    <wrap title="复选框组">
      <van-checkbox-group :value="result" data-key="result" @change="onChange">
        <van-checkbox
          v-for="(v, key) in list"
          :key="key"
          :name="v"
          custom-class="demo-checkbox"
        >
          复选框 {{ v }}
        </van-checkbox>
      </van-checkbox-group>
      {{ result }}
    </wrap>
    <wrap title="搭配单元格">
      <van-checkbox-group
        :value="result2"
        data-key="result2"
        @change="onChange"
      >
        <van-cell-group>
          <van-cell
            v-for="(v, index) in list"
            :key="key"
            :title="'复选框' + v"
            value-class="value-class"
            clickable
            :data-name="v"
            @click="toggle"
          >
            <van-checkbox :class="'checkboxes-' + v" :name="v" />
          </van-cell>
        </van-cell-group>
        {{ result2 }}
      </van-checkbox-group>
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
      checkbox1: true,
      list: ['a', 'b', 'c'],
      result: ['a', 'b'],
      result2: [],
    };
  },
  methods: {
    onChange(event) {
      const {key} = event.currentTarget.dataset;
      this[key] = event.detail;
    },

    toggle(event) {
      const {name} = event.currentTarget.dataset;
      const checkbox = this.$mp.page.selectComponent(`.checkboxes-${name}`);
      checkbox.toggle();
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
