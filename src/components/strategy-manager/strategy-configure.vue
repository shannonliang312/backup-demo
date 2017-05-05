<template>
  <div class="router-box">
    <div class="router-box-header">
      定期备份策略设置
    </div>
    <div class="router-box-body">
      <el-button type="primary" style="margin-bottom: 30px;" @click="showDialog">
        <i class="fa fa-plus" aria-hidden="true"></i>添加新策略
      </el-button>
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="media" label="备份介质"></el-table-column>        
        <el-table-column prop="serverIP" label="工作机IP地址"></el-table-column>
        <el-table-column prop="target" label="复制目录和文件"></el-table-column>
        <el-table-column prop="DR" label="灾备机"></el-table-column>
        <el-table-column prop="acion" label="操作"></el-table-column>
      </el-table>
    </div>
    <el-dialog title="新增策略" v-model="dialogVisible" size="small"> 
      <el-form ref="newPolicyForm" :model="newPolicyForm" label-width="120px" style="width: 80%">
        <el-form-item label="名称:">
          <el-input v-model="newPolicyForm.name"></el-input>
        </el-form-item>
        <el-form-item label="备份介质:">
          <el-input v-model="newPolicyForm.media"></el-input>
        </el-form-item>
        <el-form-item label="工作机IP地址:">
          <el-input v-model="newPolicyForm.serverIP"></el-input>
        </el-form-item>
        <el-form-item label="复制目录和文件:">
          <el-input v-model="newPolicyForm.target"></el-input>
        </el-form-item>
        <el-form-item label="灾备机:">
          <el-input v-model="newPolicyForm.DR"></el-input>
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
    name: "strategy-configure",
    data () {
      return {
        tableData: [],
        dialogVisible: false,
        newPolicyForm: {}
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