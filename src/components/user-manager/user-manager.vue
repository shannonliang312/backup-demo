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
      <el-table :data="tableData" border style="width: 100%;" stripe="true">
        <el-table-column type="expand">
          <template scope="props">
            <h4 style="margin-bottom: 10px;">用户操作历史：</h4>
            <el-card>
              <div id="user-card" v-for="item in props.row.actionData">
                <span>{{ item.time }}</span>
                <span>{{ item.action }}</span>
                <span>{{ item.message }}</span>
              </div>
            </el-card>
          </template>
        </el-table-column>
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
          role: "普通管理员",
          actionData: [{
            time: "2017-05-03 12:12:54",
            action: "登录成功",
            message: "用户admin1以普通管理员身份登录系统，登录地址：10.3.4.53"
          },{
            time: "2017-05-03 12:22:13",
            action: "添加策略",
            message: "用户admin1为node2节点添加一条备份策略：策略一"
          },{
            time: "2017-05-03 14:52:43",
            action: "登出成功",
            message: "用户admin1登出系统"
          }]
        },{
          name: "admin2",
          email: "bbb@bbb.com",
          role: "系统管理员",
          actionData: [{
            time: "2017-05-03 12:12:54",
            action: "登录成功",
            message: "用户admin2以系统管理员身份登录系统，登录地址：10.3.4.53"
          },{
            time: "2017-05-03 12:22:13",
            action: "添加策略",
            message: "用户admin2为node2节点添加一条备份策略：策略一"
          },{
            time: "2017-05-03 14:52:43",
            action: "登出成功",
            message: "用户admin2登出系统"
          }]
        },{
          name: "admin3",
          email: "ccc@ccc.com",
          role: "审计管理员",
          actionData: [{
            time: "2017-05-03 12:12:54",
            action: "登录成功",
            message: "用户admin3以审计管理员身份登录系统，登录地址：10.3.4.53"
          },{
            time: "2017-05-03 12:22:13",
            action: "添加策略",
            message: "用户admin3为node2节点添加一条备份策略：策略一"
          },{
            time: "2017-05-03 14:52:43",
            action: "登出成功",
            message: "用户admin3登出系统"
          }]
        }]
      }
    }
  }
</script>

<style scoped>
  #user-card > span {
    margin-right: 20px;
  }
</style>