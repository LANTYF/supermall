<!--  -->
<template>
  <div id="home">
    <NavBar class="homenav">
      <template v-slot:center>
        <h3>购物街</h3>
      </template>
    </NavBar>
    <TabControl
      :titles="['流行','新款','精选']"
      class="tabcontrol"
      @tabClick="tabClick"
      v-show="isFixed"
      ref="tabControl1"
    />
    <Scroll
      class="wrapper"
      :probeType="3"
      :pullUpLoad="true"
      :click="true"
      ref="scroll"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <HomeSwiper :banner="banner" @imgLoad="imgLoad" />
      <RecommendView :recommend="recommend" />
      <FeatureView />
      <TabControl :titles="['流行','新款','精选']" @tabClick="tabClick" ref="tabControl2" />
      <GoodsList :goods="showGoods" />
    </Scroll>
    <BackTop @click.native="topClick" v-show="isShow" />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Scroll from "components/common/scroll/Scroll";
import TabControl from "components/content/tabcontrol/TabControl";
import GoodsList from "components/content/goods/GoodsList";

import HomeSwiper from "./childcomponents/HomeSwiper";
import RecommendView from "./childcomponents/RecommendView";
import FeatureView from "./childcomponents/FeatureView";

import { gethomemultidata, gethomedata } from "network/home";
import { itemLoadMixin , backTopMixin} from "common/mixin";

export default {
  name: "Home",
  components: {
    NavBar,
    Scroll,
    TabControl,
    GoodsList,

    HomeSwiper,
    RecommendView,
    FeatureView
  },
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isFixed: false,
      tabControlHeight: 0,
      saveY: 0
    };
  },
  mixins: [itemLoadMixin,backTopMixin],
  created() {
    //1请求多个数据
    this.gethomemultidata();

    this.gethomedata("pop");
    this.gethomedata("new");
    this.gethomedata("sell");
  },
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.scroll.y;
    this.$bus.$off("itemLoad", this.itemListener);
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
    /**
     * 事件监听相关
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    contentScroll(position) {
      this.isShow = -position.y > 1000;
      this.isFixed = -position.y > this.tabControlHeight;
    },
    loadMore() {
      this.gethomedata(this.currentType);
      this.$refs.scroll.refresh();
    },
    imgLoad() {
      this.tabControlHeight = this.$refs.tabControl2.$el.offsetTop;
    },
    /**
     * 网络请求相关
     */
    gethomemultidata() {
      // gethomemultidata().then(res => {
      //   this.banner = res.data.banner.list;
      //   this.recommend = res.data.recommend.list;
      // });
      ;(async  () => {
        const res = await gethomemultidata()
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      })()
    },
    gethomedata(type) {
      // const page = this.goods[type].page + 1;
      // gethomedata(type, page).then(res => {
      //   this.goods[type].list.push(...res.data.list);
      //   this.goods[type].page += 1;
      //   this.$refs.scroll.finishPullUp();
      // });
      const page = this.goods[type].page + 1
      ;(async () => {
         const res = await gethomedata(type, page)
         this.goods[type].list.push(...res.data.list);
         this.goods[type].page += 1;
         this.$refs.scroll.finishPullUp();
      })()
    }
  }
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}
.homenav {
  background-color: var(--color-tint);
  color: #ffffff;
}
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.tabcontrol {
  position: relative;
  z-index: 9;
}
</style>