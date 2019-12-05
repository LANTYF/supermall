<!--  -->
<template>
  <div class="recommendview">
    <ul>
      <li v-for="(item,index) in recommend" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
        <div>{{item.title}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'RecommendView',
  props:{
    recommend:{
      type:Array,
      default() {
        return []
      }
    }
  },
  created() {
    console.log(this.recommend);
  }
}

</script>

<style scoped>
ul{
  display: flex;
  list-style: none;
  text-align: center;
  font-size: 12px;
  padding: 12px 0;
  border-bottom: 8px solid #dddddd
}
li{
  flex:1
}
img{
  width: 69px;
  height: 69px;
  margin-bottom: 10px
}
</style>