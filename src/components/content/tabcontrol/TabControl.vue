<!--  -->
<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" :key="index" :class="{active:index === currentIndex}" @click="tabClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  props:{
    titles:{
      type:Array,
      default() {
        return[]
      }
    }
  },
  methods:{
    tabClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    }
  }
}

</script>

<style scoped>
.tabcontrol{
  width: 100%;
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 15px;
  background-color: #ffffff
}
.tabcontrol div{
  flex: 1
}
.active{
  color: var(--color-high-text);
}
.active span{
  border-bottom: 1.5px solid var(--color-high-text);
  padding: 0 2px
}
</style>