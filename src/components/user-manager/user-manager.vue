<template>
  <div class="router-box">
    <div class="router-box-header">
      用户管理
    </div>
    <div class="router-box-body">
      <div style="text-align: right">
        <el-input type="text" style="width: 20%;" placeholder="搜索"></el-input>
      </div>
      <el-table :data="tableData" border style="width: 100%; margin-top: 20px;">
        <el-table-column label="用户名" prop="name"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="用户组" prop="group"></el-table-column>
        <el-table-column label="权限" prop="permission"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "user-manager",
    data () {
      return {
        tableData: []
      }
    }
  }
</script>

<style scoped>
  
</style>