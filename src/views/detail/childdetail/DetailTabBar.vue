<!--  -->
<template>
  <div class="tabbar">
    <div class="tabbar-left">
      <div class="customer">
        <i class="icon"></i>
        <span>客服</span>
      </div>
      <div class="shop">
        <i class="icon"></i>
        <span>店铺</span>
      </div>
      <div class="collect">
        <i class="icon"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="tabbar-right">
      <div class="left">加入购物车</div>
      <div class="right">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTabBar"
};
</script>

<style scoped>
.tabbar {
  position: fixed;
  z-index: 9;
  bottom: 0;
  width: 100%;
  background-color: #ffffff;
  height: 49px;
  text-align: center;
  display: flex;
}
.tabbar-left,
.tabbar-right,
.left,
.right {
  flex: 1;
}
.tabbar-left {
  display: flex;
}
.tabbar-right {
  display: flex;
  line-height: 49px;
}
.customer,
.shop,
.collect {
  flex: 1;
  font-size: 13px
}
.icon {
  display: block;
  height: 22px;
  width: 22px;
  background-image: url(~assets/img/detail/detail_bottom.png);
  background-size: 100%;
  margin: 4px 0 2px 16px;
}
.customer i {
  background-position: 0px -52px;
}
.shop i {
  background-position: 0px -98px;
}
.left{
  background-color: #ffe817
}
.right{
  background-color: #f69;
  color: #ffffff
}
.left,.right{
  font-size: 14px
}
</style>