<template>
  <div class="app">
    <wrap title="Circular">
      <van-loading custom-class="loading" />
      <van-loading custom-class="loading shadow" color="#fff" />
    </wrap>

    <wrap title="Spinner">
      <van-loading custom-class="loading" type="spinner" />
      <van-loading custom-class="loading shadow" type="spinner" color="#fff" />
    </wrap>
  </div>
</template>
<script>
import wrap from '@/components/wrap';
export default {
  components: {
    wrap,
  },
};
</script>

<style lang="less">
.loading {
  margin-right: 20px;
}

.shadow {
  padding: 10px;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
