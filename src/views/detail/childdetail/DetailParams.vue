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
  padding: 0 10px;
  padding-bottom: 30px;
  border-bottom: 6px solid #dddddd
}
table tr{
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
table{
  width:100%
}
table tr td{
  padding:20px 2px;
  font-size: 14px;
}
.table1 td:first-child{
  padding-right: 50px;
  white-space: nowrap;
}
.table2 td:first-child{
  padding-right: 70px;
  white-space: nowrap;
}
.table2 td:last-child{
  color: red
}
</style>