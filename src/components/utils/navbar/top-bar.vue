<template>
  <el-menu mode="horizontal" class="topbar-box">
    <img src="../../../assets/img/inspur.png" alt="">
    <el-submenu index="4" style="float: right; margin-right: 30px">        
      <template slot="title"><i class="fa fa-user" aria-hidden="true"></i>用户</template>
      <el-menu-item index="/admin/admin-info"><i class="fa fa-info-circle" aria-hidden="true"></i>用户管理</el-menu-item>
      <el-menu-item index="logout"><i class="fa fa-users" aria-hidden="true"></i>用户组管理</el-menu-item>
      <el-menu-item index="logout"><i class="fa fa-cog" aria-hidden="true"></i>权限管理</el-menu-item>
      <el-menu-item index="logout"><i class="fa fa-sign-out" aria-hidden="true"></i>退出</el-menu-item>
    </el-submenu>
    
  </el-menu>
</template>

<script>
  export default {
    name: 'top-bar'
  }
</script>

<style scoped>
  .topbar-box {
    z-index: 999;
    position: fixed;
    width: 100%;
    box-shadow: 1px 1px 5px #888888;
  }

  i {
    margin-right: 5px;
  }

  img {
    position: fixed;
    top: 15px;
    left: 5%;
  }
</style>
