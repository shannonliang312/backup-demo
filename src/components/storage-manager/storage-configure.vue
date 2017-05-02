<template>
  <div class="router-box">
    <div class="router-box-header">
      网络存储设置
    </div>
    <div class="router-box-body">
      <el-button type="primary" style="margin-bottom: 30px;" @click="showDialog">添加备份服务器</el-button>
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="ip" label="IP地址"></el-table-column>
        <el-table-column prop="systemInfo" label="系统信息"></el-table-column>
        <el-table-column prop="diskInfo" label="磁盘信息"></el-table-column>
        <el-table-column prop="action" label="操作"></el-table-column>
      </el-table>
    </div>
    <el-dialog title="新增备份服务器" v-model="dialogVisible" size="small"> 
      <el-form ref="newServerForm" :model="newServerForm" label-width="120px" style="width: 80%">
        <el-form-item label="名称:">
          <el-input v-model="newServerForm.name"></el-input>
        </el-form-item>
        <el-form-item label="IP地址:">
          <el-input v-model="newServerForm.serverIP"></el-input>
        </el-form-item>
        <el-form-item label="系统信息:">
          <el-input v-model="newServerForm.systemInfo"></el-input>
        </el-form-item>
        <el-form-item label="磁盘信息:">
          <el-input v-model="newServerForm.diskInfo"></el-input>
        </el-form-item>        
        <el-form-item>
          <el-button type="primary">提交</el-button>
          <el-button type="warning" @click="hideDialog">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "storage-configure",
    data () {
      return {
        tableData: [],
        dialogVisible: false,
        newServerForm: {}
      }
    },
    methods: {
      showDialog() {
        this.dialogVisible = true;
      },
      hideDialog() {
        this.dialogVisible = false;
      }
    }
  }
</script>

<style scoped>
  
</style>