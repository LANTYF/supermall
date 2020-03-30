<!--  -->
<template>
  <NavBar class="navbar">
    <template v-slot:center>
      <div>购物车({{cartLength}})</div>
    </template>
  </NavBar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { mapGetters } from "vuex";

export default {
  name: "CartNavBar",
  components: {
    NavBar
  },
  computed: {
    ...mapGetters(["cartLength"])
  }
};
</script>

<style scoped>
.navbar {
  background-color: var(--color-tint);
  color: #ffffff;
}
</style>