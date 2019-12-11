<!--  -->
<template>
  <div v-if="Object.keys(paramsInfo).length !== 0" class="paramsInfo">
    <table class="table1">
      <tr v-for="(item,index) in paramsInfo.tables[0]" :key="index">
        <td v-for="(a,index) in item" :key="index">{{a}}</td>
      </tr>
    </table>
    <table class="table2">
        <tr v-for="(item,index) in paramsInfo.set" :key="'set'+index" class="set">
          <td>{{item.key}}</td>
          <td>{{item.value}}</td>
        </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailParams",
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.paramsInfo{
  margin: 0 10px
}
table tr{
  border-bottom: 1px solid black;
}
table{
  width:100%
}
table tr td{
  padding:20px 10px;
  font-size: 14px;
}
.table1 td:first-child{
  padding-right: 80px
}
.table2 td:first-child{
  padding-right: 70px
}
.table2 td:last-child{
  color: red
}
</style>