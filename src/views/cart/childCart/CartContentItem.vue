<!--  -->
<template>
  <div class="cart-content-item">
    <CartButton class="cart-button" @click.native="choiceClick" :class="{checked:info.checked}"/>
    <img :src="info.image" alt="">
    <div class="message">
      <div class="title">{{info.title}}</div>
      <div class="desc">{{info.desc}}</div>
      <span class="price">{{info.price | showPrice}}</span>
      <span class="count">{{info.count | showCount}}</span>
    </div>
  </div>
</template>

<script>
import CartButton from 'components/content/button/CartButton'
import { mapGetters } from 'vuex'
export default {
  name:'CartContentItem',
  components:{
    CartButton
  },
  props:{
    info:{}
  },
  computed:{
    ...mapGetters(['cartList'])
  },
  methods:{
    choiceClick() {
      this.info.checked = !this.info.checked
    }
  },
  filters:{
    showPrice(value) {
      return '￥' + parseFloat(value).toFixed(2)
    },
    showCount(value) {
      return 'x' + value
    }
  }
}

</script>

<style scoped>
.cart-content-item{
  display: flex;
  height: 100px;
  width: 100%;
  padding: 5px 0;
  border-bottom: 1px solid black
}
.cart-button{
  align-self: center
}
img{
  height: 100%;
  border-radius: 4px
}
.title,.desc{
  width: 200px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis
}
.title{
  font-weight:600;
  margin-bottom: 8px
}
.message{
  margin-left: 10px
}
.desc{
  font-size: 14px;
  margin-bottom: 20px
}
.price{
  color: orange;
  margin-right: 120px
}
.checked{
  background-color: red;
  border-color: #ffffff
}
</style>