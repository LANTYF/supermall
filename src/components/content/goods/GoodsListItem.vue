<!--  -->
<template>
  <div class="goodslistitem" @click="toDetail">
    <img :src="showImage" alt @load="itemLoad" />
    <div class="goods-info">
      <p class="titile">{{goodsitem.title}}</p>
      <span class="price">{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsitem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    itemLoad() {
      this.$bus.$emit("itemLoad");
    },
    toDetail() {
      this.$router.push('/detail' + this.goodsitem.iid)
    }
  },
  computed:{
    showImage() {
      return this.goodsitem.image || this.goodsitem.show.img
    }
  }
};
</script>

<style scoped>
.goodslistitem {
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goodslistitem img {
  width: 100%;
  border-radius: 4px
}

.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goods-info .collect {
  position: relative;
}

.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: 0;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>