<!--  -->
<template>
  <div v-if="Object.keys(goods).length !== 0" class="info">
    <p class="title">{{goods.title}}</p>
    <div class="price">
      <span class="now-price">{{goods.price}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="column">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name:'DetailMessage',
  props:{
    goods:{
      type:Object,
      default() {
        return {}
      }
    }
  }
}

</script>

<style scoped>
.info{
  margin: 0 6px
}
.title{
  margin-top: 10px;
  font-size: 15px
}
.price{
  margin-top: 15px;
}
.now-price{
  color: var(--color-high-text);
  font-size: 18px
}
.old-price{
  font-size: 10px;
  margin-left: 5px;
  text-decoration: line-through
}
.discount{
  background-color: var(--color-high-text);
  font-size: 12px;
  padding: 0 4px;
  border-radius: 8px;
  color: #ffffff;
  position: relative;
  margin-left: 5px;
  bottom: 8px;
}
.column{
  display: flex;
  justify-content: space-around;
  font-size: 12px;
  margin-top: 15px;
  width: 100%;
  justify-content: space-between
}
hr{
  margin-top: 10px;
  opacity: 0.4
}
</style>