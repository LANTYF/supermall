<!--  -->
<template>
  <div id="cart">
    <CartNavBar/>
    <CartContent ref="CartContent"/>
    <CartTabBar></CartTabBar>
  </div>
</template>

<script>
import CartNavBar from './childCart/CartNavBar'
import CartContent from './childCart/CartContent'
import CartTabBar from './childCart/CartTabBar'
export default {
  name:'Cart',
  components:{
    CartNavBar,
    CartContent,
    CartTabBar
  },
  activated() {
    this.$refs.CartContent.$refs.scroll.refresh()
  }
}

</script>

<style scoped>
#cart{
  width: 100vw;
  height: 100vh;
}
</style>