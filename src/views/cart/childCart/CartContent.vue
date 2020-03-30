<!--  -->
<template>
  <Scroll class="wrapper" ref="scroll" :click="true">
    <div class="cart-content">
      <CartContentItem v-for="(item,index) in cartList" :key="index" :info="item" />
    </div>
  </Scroll>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";
import CartContentItem from "./CartContentItem";
import { mapGetters } from "vuex";
export default {
  name: "CartContent",
  components: {
    Scroll,
    CartContentItem
  },
  computed: {
    ...mapGetters(["cartList"])
  }
};
</script>

<style scoped>
.cart-content {
  width: 100%;
}
.wrapper{
  height: calc(100% - 44px - 49px - 44px);
  overflow: hidden;
}
</style>