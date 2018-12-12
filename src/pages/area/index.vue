<template>
  <div class="app">
    <wrap title="基础用法">
      <van-area :area-list="areaList" />
    </wrap>
    <wrap title="选中省市区">
      <van-area :area-list="areaList" value="110101"/>
    </wrap>
    <wrap title="配置显示列">
      <van-area :area-list="areaList" columns-num="2" title="标题"/>
    </wrap>
  </div>
</template>
<script>
import wrap from '@/components/wrap';
export default {
  data() {
    return {
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市'
        },
        city_list: {
          110100: '北京市',
          110200: '县',
          120100: '天津市',
          120200: '县'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区',
          // ....
        }
      },
    };
  },
  components: {
    wrap
  }
};
</script>
