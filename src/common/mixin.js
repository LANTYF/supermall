import { debounce } from './utils'
import BackTop from "components/content/backtop/BackTop";

export const itemLoadMixin = {
  data() {
    return {
      itemListener: null
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.itemListener = () => {
      refresh()
    }
    this.$bus.$on("itemLoad",this.itemListener);
  }
}

export const backTopMixin = {
  data() {
    return {
      isShow: false,
    }
  },
  components:{
    BackTop
  },
  methods:{
    topClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },
  }
}
