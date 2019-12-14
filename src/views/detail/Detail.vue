<!--  -->
<template>
  <div id="detail">
    <DetailNavBar class="navbar" @itemClick="itemClick" ref="navbar"></DetailNavBar>
    <Scroll class="wrapper" ref="scroll" :click="true" :probeType="3" @scroll="scroll">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailMessage :goods="goods"></DetailMessage>
      <DetailShop :shop="shop"></DetailShop>
      <DetailInfo :detailInfo="detailInfo" @imgLoad="imgLoad"></DetailInfo>
      <DetailParams :paramsInfo="paramsInfo" ref="params"></DetailParams>
      <DetailComments :comments="comments" ref="comments"></DetailComments>
      <GoodsList :goods="recommends" ref="recommends"></GoodsList>
    </Scroll>
    <BackTop @click.native="topClick" v-show="isShow" />
    <DetailTabBar></DetailTabBar>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import DetailNavBar from "./childdetail/DetailNavBar";
import DetailSwiper from "./childdetail/DetailSwiper";
import DetailMessage from "./childdetail/DetailMessage";
import DetailShop from "./childdetail/DetailShop";
import DetailInfo from "./childdetail/DetailInfo";
import DetailParams from "./childdetail/DetailParams";
import DetailComments from "./childdetail/DetailComments";
import DetailTabBar from "./childdetail/DetailTabBar"
import GoodsList from "components/content/goods/GoodsList";
import {
  getDetailData,
  Goods,
  Shop,
  ParamsInfo,
  Comments,
  getRecommend
} from "network/detail.js";
import { itemLoadMixin , backTopMixin} from "common/mixin";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramsInfo: {},
      comments: {},
      recommends: [],
      positionY: [],
      currentIndex: 0
    };
  },
  components: {
    Scroll,

    DetailNavBar,
    DetailSwiper,
    DetailMessage,
    DetailShop,
    DetailInfo,
    DetailParams,
    DetailComments,
    DetailTabBar,
    GoodsList,
  },
  created() {
    //保存传入的iid
    this.iid = this.$route.params.iid;
    getDetailData(this.iid).then(res => {
      //获取轮播图的图片
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      //获取商品信息相关
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      //获取商家信息
      this.shop = new Shop(data.shopInfo);
      //获取商品详细信息
      this.detailInfo = data.detailInfo;
      //获取尺寸参数
      this.paramsInfo = new ParamsInfo(
        data.itemParams.info,
        data.itemParams.rule
      );
      //获取评论信息
      this.comments = new Comments(data.rate.list);
      //获取推荐数据
      getRecommend().then(res => {
        this.recommends = res.data.list;
      });
    });
  },
  mixins: [itemLoadMixin,backTopMixin],
  destroyed() {
    this.$bus.$off("itemLoad", this.itemListener);
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
      this.positionY.push(0);
      this.positionY.push(this.$refs.params.$el.offsetTop);
      this.positionY.push(this.$refs.comments.$el.offsetTop);
      this.positionY.push(this.$refs.recommends.$el.offsetTop);
      this.positionY.push(Number.MAX_VALUE);
    },
    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.positionY[index], 200);
    },
    scroll(position) {
      for (let i = 0; i < this.positionY.length - 1; i++) {
        if (
          this.currentIndex !== i &&
          -position.y > this.positionY[i] &&
          -position.y < this.positionY[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.navbar.currentIndex = this.currentIndex;
        }
      }
      this.isShow = -position.y > 1000
    }
  }
};
</script>

<style scoped>
#detail {
  height: 100vh;
  position: relative;
}
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
  z-index: 9;
  background-color: #ffffff;
}
</style>