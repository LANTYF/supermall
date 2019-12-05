<!--  -->
<template>
  <div class="swiperitem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'SwiperItem'
}

</script>

<style scoped>
.swiperitem{
  flex-shrink: 0;
  width: 100%
}
.swiperitem img{
  width: 100%
}
</style>