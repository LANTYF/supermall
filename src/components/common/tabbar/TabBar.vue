<!--  -->
<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name:'TabBar'
}

</script>

<style scoped>
.tabbar{
  height: 49px;
  background-color: #f6f6f6;
  position:fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  text-align: center;
  box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2)
}
</style>