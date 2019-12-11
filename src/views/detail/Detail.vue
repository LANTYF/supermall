<!--  -->
<template>
  <div id="detail">
    <DetailNavBar class="navbar"></DetailNavBar>
    <Scroll class="wrapper" ref="scroll" :click="true">
      <DetailSwiper :topImages="topImages"></DetailSwiper>
      <DetailMessage :goods="goods"></DetailMessage>
      <DetailShop :shop="shop"></DetailShop>
      <DetailInfo :detailInfo="detailInfo" @imgLoad="imgLoad"></DetailInfo>
      <DetailParams :paramsInfo="paramsInfo"></DetailParams>
    </Scroll>
  </div>
</template>

<script>
import Scroll from "components/common/scroll/Scroll";

import DetailNavBar from "./childdetail/DetailNavBar";
import DetailSwiper from "./childdetail/DetailSwiper";
import DetailMessage from "./childdetail/DetailMessage";
import DetailShop from "./childdetail/DetailShop";
import DetailInfo from './childdetail/DetailInfo'
import DetailParams from './childdetail/DetailParams'

import { getDetailData, Goods, Shop , ParamsInfo} from "network/detail.js";

export default {
  name: "Detail",
  data() {
    return {
      iid: null,
      topImages: [],
      goods: {},
      shop: {},
      detailInfo:{},
      paramsInfo:{}
    }
  },
  components: {
    Scroll,

    DetailNavBar,
    DetailSwiper,
    DetailMessage,
    DetailShop,
    DetailInfo,
    DetailParams
  },
  created() {
    //保存传入的iid
    this.iid = this.$route.params.iid;
    getDetailData(this.iid).then(res => {
      console.log(res);
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
      this.detailInfo = data.detailInfo
      //获取尺寸参数
      this.paramsInfo = new ParamsInfo(data.itemParams.info,data.itemParams.rule)
    });
  },
  methods:{
    imgLoad() {
      this.$refs.scroll.refresh()
    }
  }
};
</script>

<style scoped>
#detail{
  height: 100vh;
  position: relative;
}
.wrapper{
 position: absolute;
 top: 44px;
 bottom: 0;
 overflow: hidden;
 z-index: 9;
 background-color: #ffffff
}
</style>