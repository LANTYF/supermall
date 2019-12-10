<!--  -->
<template>
  <div class="HomeSwiper">
    <Swiper>
      <SwiperItem v-for="(item,index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title" @load="imgLoad" />
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index.js";

export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      imgladed: true
    };
  },
  methods: {
    imgLoad() {
      if (this.imgladed) {
        this.$emit("imgLoad");
        this.imgladed = false;
      }
    }
  }
};
</script>

<style scoped>
</style>