<template>
  <div class="router-box">
    <div class="router-box-header">
      用户管理
    </div>
    <div class="router-box-body">
      <el-button type="primary" style="margin-bottom: 20px;">
        <i class="fa fa-plus" aria-hidden="true"></i>添加新用户
      </el-button>
      <el-input type="text" style="width: 20%;float: right" placeholder="搜索"></el-input>
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column label="用户名" prop="name"></el-table-column>
        <el-table-column label="邮箱" prop="email"></el-table-column>
        <el-table-column label="角色" prop="role"></el-table-column>
        <el-table-column prop="action" label="操作">
          <template scope="scope">
            <el-button size="small">编辑</el-button>
            <el-button size="small" type="danger">删除</el-button>              
          </template>
        </el-table-column>
      </el-table>
      <el-pagination 
        small layout="prev, pager, next"
        :total="50"
        style="text-align: right; margin-top: 10px;"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: "user-manager",
    data () {
      return {
        tableData: [{
          name: "admin1",
          email: "aaa@aaa.com",
          role: "普通管理员"
        },{
          name: "admin2",
          email: "bbb@bbb.com",
          role: "系统管理员"
        },{
          name: "admin3",
          email: "ccc@ccc.com",
          role: "审计管理员"
        }]
      }
    }
  }
</script>

<style scoped>
  
</style>