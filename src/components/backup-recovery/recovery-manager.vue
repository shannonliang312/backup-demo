<template>
  <div class="router-box">
    <div class="router-box-header">
      系统恢复管理
    </div>
    <div class="router-box-body">
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column prop="time" label="创建时间"></el-table-column>
        <el-table-column prop="task" label="任务名称"></el-table-column>
        <el-table-column prop="serverMachine" label="从备份服务器"></el-table-column>
        <el-table-column prop="workMachine" label="恢复到工作机"></el-table-column>
        <el-table-column prop="progress" label="进度"></el-table-column>
        <el-table-column prop="acion" label="操作"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "recovery-manager",
    data () {
      return {
        tableData: [],
        dialogVisible: false,
        newPolicyForm: {}
      }
    },
  }
</script>

<style scoped>
  
</style>