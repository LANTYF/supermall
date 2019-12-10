<!--  -->
<template>
  <NavBar>
    <template v-slot:left>
      <div class="back" @click="backClick">
        <img src="~assets/img/common/back.svg" alt />
      </div>
    </template>
    <template v-slot:center>
      <div class="center">
        <span
          v-for="(item,index) in titles"
          :key="index"
          @click="itemClick(index)"
          :class="{active:index === currentIndex}"
        >{{item}}</span>
      </div>
    </template>
  </NavBar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "DeatilNavBar",
  data() {
    return{
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    }
  },
  components: {
    NavBar
  },
  methods: {
    backClick() {
      this.$router.go(-1);
    },
    itemClick(index) {
      this.currentIndex = index;
    }
  }
};
</script>

<style scoped>
.back img {
  margin-top: 10px;
  margin-left: 10px;
}
.center {
  display: flex;
}
.center span {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>