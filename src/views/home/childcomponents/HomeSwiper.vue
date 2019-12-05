<!--  -->
<template>
  <div class="HomeSwiper">
    <Swiper>
      <SwiperItem v-for="(item,index) in banner" :key="index">
        <a :href="item.link">
          <img :src="item.image" :alt="item.title">
        </a>
      </SwiperItem>
    </Swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper/index.js'

export default {
  name:'HomeSwiper',
  components:{
    Swiper,
    SwiperItem
  },
  props:{
    banner:{
      type:Array,
      default() {
        return []
      }
    }
  },
}

</script>

<style scoped>
</style>