<!--  -->
<template>
  <div class="backtop">
    <img src="~assets/img/common/top.png" alt="">
  </div>
</template>

<script>
export default {
  name:'BackTop'
}

</script>

<style scoped>
.backtop{
  position: fixed;
  right: 10px;
  bottom:55px;
  z-index: 9
}
.backtop img{
  width: 43px;
  height: 43px;
}
</style>