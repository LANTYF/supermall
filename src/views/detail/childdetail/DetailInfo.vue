<!--  -->
<template>
  <div v-if="Object.keys(detailInfo).length !== 0">
    <div class="store">
      <div class="start"></div>
      <div class="desc">{{detailInfo.desc}}</div>
      <div class="end"></div>
      <div class="key">{{detailInfo.detailImage[0].key}}</div>
    </div>
    <div class="imgs">
      <ul>
        <li v-for="(item,index) in detailInfo.detailImage[0].list" :key="index">
          <img :src="item" alt @load="imgLoad"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailInfo",
  data() {
    return {
      counter: 0,
      imageLength:0
    }
  },
  props: {
    detailInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods:{
    imgLoad() {
      if(++this.counter === this.imageLength){
        this.$emit('imgLoad')
      }
    }
  },
  watch:{
    detailInfo() {
      this.imageLength = this.detailInfo.detailImage[0].list.length
    }
  }
};
</script>

<style scoped>
.store {
  padding: 0 10px;
}
.start,
.end {
  border: 0.5px solid black;
  width: 100px;
  margin: 10px 0;
  position: relative;
}
.start::before{
  content: "";
  position: absolute;
  height: 5px;
  width: 5px;
  background-color: black;
  top:-5px
}
.end::before{
  content: "";
  position: absolute;
  height: 5px;
  width: 5px;
  background-color: black;
  right: 0;
  top: -5px
}
.start {
  float: left;
}
.end {
  float: right;
}
.desc {
  font-size: 14px;
  float: left;
  width: 100%;
}
.key {
  font-size: 18px;
  width: 100%;
  float: left;
  margin-bottom: 10px
}
.imgs img {
  width: 100%;
}
</style>