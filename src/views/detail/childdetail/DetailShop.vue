<!--  -->
<template>
  <div v-if="Object.keys(shop).length !== 0">
    <div class="shop">
      <img :src="shop.logo" alt />
      <span>{{shop.name}}</span>
    </div>
    <div class="info">
      <div class="number">
        <div class="sell">
          <div>{{shop.sells | sellFixed}}</div>
          <span>总销量</span>
        </div>
        <div class="goods">
          <div>{{shop.goods}}</div>
          <span>全部宝贝</span>
        </div>
      </div>
      <span class="line"></span>
      <div class="description">
        <ul>
          <li v-for="(item,index) in shop.score" :key="index">
            <span class="name">{{item.name}}</span>
            <div class="score">
              <span :class="{judge1:item.isBetter}">{{item.score}}</span>
            </div>
            <div class="change">
              <span :class="{judge2:item.isBetter}">{{item.isBetter ? '高' : '低'}}</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="wrapper">
      <a :href="shop.url" class="text">进店逛逛</a>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  props: {
    shop: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  filters: {
    sellFixed(value) {
      if (value < 10000) return;
      return (value / 10000).toFixed(1) + "万";
    }
  },
};
</script>

<style scoped>
.shop {
  margin-top: 30px;
  font-size: 12px
}
.shop img,
.shop span {
  display: inline;
  vertical-align: middle;
}
.shop img {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 1px solid gray;
  margin: 0 10px;
}
.number {
  display: flex;
  text-align: center;
  padding-top: 20px;
}
.sell,
.goods {
  flex: 1;
}
.goods {
  margin-top: 3px;
}
.shop span {
  font-size: 14px;
}
.info {
  display: flex;
}
.number,
.description {
  flex: 1;
}
.line {
  height: 60px;
  border: 1px solid #bbbbbb;
  margin-right: 10px;
  margin-top: 15px;
}
.description ul {
  list-style: none;
}
.description ul li {
  margin: 5px 0;
}
.score {
  display: inline-block;
  width: 40px;
  margin-left: 5px;
}
.change {
  display: inline-block;
  background-color: rgb(126, 179, 126);
  color: #ffffff;
}
.change span{
  display: inline-block;
  width: 100%;
  height: 100%;
}
.score {
  color: rgb(126, 179, 126);
}
.judge1 {
  color: #ff5777;
}
.judge2 {
  background-color: #ff5777;
}
.wrapper{
  text-align: center;
  margin-top: 20px;
  width: 100%
}
.text{
  background-color: #dddddd;
  display: inline-block;
  width: 150px;
  height: 30px;
  line-height: 30px;
  border-radius: 15px;
  color: gray;
  text-decoration: none;
}
hr{
  margin: 30px 4px;
  opacity: 0.4;
}
</style>