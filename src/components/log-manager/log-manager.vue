<template>
  <div class="router-box">
    <div class="router-box-header">
      日志管理
    </div>
    <div class="router-box-body">
      <el-date-picker
        v-model="startTime"
        type="datetime"
        placeholder="选择起始时间"
      ></el-date-picker>
      <span>---</span>
      <el-date-picker
        v-model="endTime"
        type="datetime"
        placeholder="选择结束时间"
      ></el-date-picker>
      <el-button type="primary" style="margin-left: 20px" icon="search">查询</el-button>
      <el-table :data="tableData" border style="width: 100%; margin-top: 20px;''">
        <el-table-column prop="time" label="时间"></el-table-column>
        <el-table-column prop="action" label="操作"></el-table-column>
        <el-table-column prop="message" label="详情"></el-table-column>
        <el-table-column prop="result" label="操作结果"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "log-manager",
    data () {
      return {
        tableData: [],
        startTime: "",
        endTime: ""
      }
    }
  }
</script>

<style scoped>
  
</style>