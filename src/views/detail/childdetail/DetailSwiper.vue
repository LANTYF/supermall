<!--  -->
<template>
  <Swiper class="detailSwiper" ref="swiper">
    <SwiperItem v-for="(item,index) in topImages" :key="index" ref="swiperitem">
      <img :src="item" alt />
    </SwiperItem>
  </Swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "DetailSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    topImages:{
      type:Array,
      default() {
        return []
      }
    }
  },
};
</script>

<style scoped>
.detailSwiper {
  height: 300px;
}
</style>