<template>
  <div class="router-box">
    <div class="router-box-header">
      网络存储设置
    </div>
    <div class="router-box-body">
      <el-button type="primary" style="margin-bottom: 30px;">添加备份服务器</el-button>
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="ip" label="IP地址"></el-table-column>
        <el-table-column prop="systemInfo" label="系统信息"></el-table-column>
        <el-table-column prop="diskInfo" label="磁盘信息"></el-table-column>
        <el-table-column prop="action" label="操作"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "storage-configure",
    data () {
      return {
        tableData: [
          
        ]
      }
    }
  }
</script>

<style scoped>
  
</style>