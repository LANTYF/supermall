<!--  -->
<template>
  <div id="app">
    <MainTabBar></MainTabBar>
  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabbar/MainTabBar'

export default {
  name:'app',
  components:{
    MainTabBar
  }
}

</script>

<style scoped>
@import url('assets/css/base.css');
</style>
