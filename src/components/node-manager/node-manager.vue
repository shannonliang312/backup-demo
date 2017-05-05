<template>
  <div class="router-box">
    <div class="router-box-header">
      节点管理
    </div>
    <div class="router-box-body">
      <el-button type="primary" style="margin-bottom: 30px;" @click="showDialog">
        <i class="fa fa-plus" aria-hidden="true"></i>添加新节点
      </el-button>
      <el-input type="text" style="width: 20%;float: right" placeholder="搜索"></el-input>
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="ip" label="IP地址"></el-table-column>
        <el-table-column prop="systemInfo" label="系统信息"></el-table-column>
        <el-table-column prop="diskInfo" label="磁盘信息"></el-table-column>
        <el-table-column prop="action" label="操作"></el-table-column>
      </el-table>
    </div>
    <el-dialog title="新增节点" v-model="dialogVisible" size="small"> 
      <el-form ref="newNodeForm" :model="newNodeForm" label-width="120px" style="width: 80%">
        <el-form-item label="名称:">
          <el-input v-model="newNodeForm.name"></el-input>
        </el-form-item>
        <el-form-item label="IP地址:">
          <el-input v-model="newNodeForm.serverIP"></el-input>
        </el-form-item>
        <el-form-item label="系统信息:">
          <el-input v-model="newNodeForm.systemInfo"></el-input>
        </el-form-item>
        <el-form-item label="磁盘信息:">
          <el-input v-model="newNodeForm.diskInfo"></el-input>
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
    name: "node-manager",
    data () {
      return {
        tableData: [],
        dialogVisible: false,
        newNodeForm: {}
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
  i {
    margin-right: 5px;
  }
</style>