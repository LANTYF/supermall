<!--  -->
<template>
  <div class="cart-tab-bar">
    <CartButton class="cart-button" @click.native="totalClick" :class="{checked:isChecked}" />
    <div>全选</div>
    <div class="total">合计:</div>
    <div>{{totalPrice | showPrice}}</div>
    <div class="calc" @click="calcClick">去结算:{{checkedLength}}</div>
  </div>
</template>

<script>
import CartButton from "components/content/button/CartButton";

export default {
  name: "CartTabBar",
  data() {
    return {};
  },
  components: {
    CartButton
  },
  computed: {
    totalPrice() {
      return this.$store.state.cartList
        .filter(item => item.checked)
        .reduce((preValue, item) => {
          return preValue + item.price * item.count;
        }, 0);
    },
    checkedLength() {
      return this.$store.state.cartList.filter(item => item.checked).length;
    },
    isChecked() {
      if (this.$store.state.cartList.length === 0) return false;
      else {
        return !this.$store.state.cartList.find(item => !item.checked);
      }
    }
  },
  methods: {
    totalClick() {
      if (this.isChecked) {
        for (let i of this.$store.state.cartList) {
          i.checked = false;
        }
      } else {
        for (let i of this.$store.state.cartList) {
          i.checked = true;
        }
      }
    },
    calcClick() {
      if(!this.$store.state.cartList.find(item => item.checked)){
        this.$toast.show("请选择商品",2000)
      }
    }
  },
  filters: {
      showPrice(value) {
        return "￥" + value.toFixed(2);
      }
    }
};
</script>

<style scoped>
.cart-tab-bar {
  position: relative;
  z-index: 9;
  display: flex;
  height: 44px;
  background-color: #aaaa;
  line-height: 44px;
}
.choice {
  height: 25px;
  width: 25px;
  border: 2px solid #aaaaaa;
  border-radius: 50%;
  background-image: url("~assets/img/cart/tick.svg");
  background-size: 100%;
  align-self: center;
  margin-left: 10px;
}
.total {
  margin-left: 15px;
}
.calc {
  width: 100px;
  background-color: red;
  margin-left: auto;
  text-align: center;
  color: #ffffff;
}
.checked {
  background-color: red;
  border-color: #aaaaaa;
}
</style>