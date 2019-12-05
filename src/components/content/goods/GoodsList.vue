<!--  -->
<template>
  <div class="goodslist">
    <GoodsListItem v-for="(item,index) in goods" :key="index" :goodsitem="item">
      <div>{{item}}</div>
    </GoodsListItem>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem'

export default {
  name:'GoodsList',
  components:{
    GoodsListItem
  },
  props:{
    goods:{
      type:Array,
      dedfault() {
        return []
      }
    }
  }
}

</script>

<style scoped>
.goodslist{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly
}
</style>