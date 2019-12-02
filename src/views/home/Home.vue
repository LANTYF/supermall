<!--  -->
<template>
  <div id="home">
    <NavBar class="homenav">
      <template v-slot:center>
        <h3>购物街</h3>
      </template>
    </NavBar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {gethomemultidata} from 'network/home.js'
export default {
  name:'Home',
  components:{
    NavBar
  },
  data() {
    return {
      banner:[],
      recommend:[]
    }
  },
  created() {
    1.//请求多个数据
    gethomemultidata().then(res=> {
      this.banner = res.data.banner.list;
      this.recommend = res.data.recommend.list
    }).catch((err) => {
      console.log(err);
    });
  }
}

</script>

<style scoped>
.homenav{
  background-color: var(--color-tint);
  color: #ffffff
}
</style>