<template>
  <div class="router-box">
    <div class="router-box-header">
      密码管理
    </div>
    <div class="router-box-body">      
      <h2 style="margin: 20px 0;">密码修改</h2>
      <el-form ref="pswForm" :model="pswForm" label-width="100px" style="width: 60%">
        <el-form-item label="原密码：">
          <el-input v-model="pswForm.originPsw"></el-input>
        </el-form-item>
        <el-form-item label="新密码：">
          <el-input v-model="pswForm.newPsw"></el-input>
        </el-form-item>
        <el-form-item label="确认新密码：">
          <el-input v-model="pswForm.confirmPsw"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
        </el-form-item>
          
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'admin-panel',
    data () {
      return {
        adminForm: {
          user: '',
          email: '',
          group: '',
          role: '',
          permission: ''
        },
        pswForm: {
          originPsw: '',
          newPsw: '',
          confirmPsw: ''
        }
      }
    }
  }
</script>

<style scoped>
  
</style>
