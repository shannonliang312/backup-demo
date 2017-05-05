<template>
  <div class="router-box">
    <div class="router-box-header">
      用户组管理
    </div>
    <div class="router-box-body">
      <el-button type="primary" style="margin-bottom: 30px;" @click="showDialog">
        <i class="fa fa-plus" aria-hidden="true"></i>添加用户组
      </el-button>
      <el-input type="text" style="width: 20%;float: right" placeholder="搜索"></el-input>
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="roles" label="角色"></el-table-column>
        <el-table-column prop="permission" label="权限"></el-table-column>        
        <el-table-column prop="action" label="操作"></el-table-column>
      </el-table>
    </div>
    <el-dialog title="新增用户组" v-model="dialogVisible" size="small"> 
      <el-form ref="newGroupForm" :model="newGroupForm" label-width="120px" style="width: 80%">
        <el-form-item label="名称:">
          <el-input v-model="newGroupForm.name"></el-input>
        </el-form-item>
        <el-form-item label="角色:">
          <el-input v-model="newGroupForm.media"></el-input>
        </el-form-item>
        <el-form-item label="权限:">
          <el-input v-model="newGroupForm.serverIP"></el-input>
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
    name: "group-manager",
    data () {
      return {
        tableData: [],
        dialogVisible: false,
        newGroupForm: {}
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