<!--  -->
<template>
  <div class="tabbaritem" @click="itemclick">
    <div v-if="!isShow">
      <slot name="img"></slot>
    </div>
    <div v-else>
      <slot name="img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  data() {
    return {
      
    }
  },
  props:{
    path:{
      type:String,
      default:''
    },
    activeColor:{
      type:String,
      default:'pink'
    }
  },
  computed: {
    isShow() {
      return this.$route.path === this.path
    },
    activeStyle() {
      return this.isShow ? {color:this.activeColor} : {}
    }
  },
  methods:{
    itemclick() {
      this.$router.replace(this.path)
    }
  }
}

</script>

<style scoped>
.tabbaritem {
  flex: 1;
  font-size: 12px;
}
.tabbaritem img {
  width: 20px;
  height: 20px;
  margin-top: 3px;
}
</style>