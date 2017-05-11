<template>
  <div class="router-box">
    <div class="router-box-header">
      权限管理
    </div>
    <div class="router-box-body">
      <el-button type="primary" style="margin-bottom: 20px;">
        <i class="fa fa-pencil" aria-hidden="true"></i>编辑权限
      </el-button>
      <el-table :data="tableData" border style="width: 100%;" stripe="true">
        <el-table-column label="角色" prop="role" width="110"></el-table-column>
        <el-table-column label="系统概览"  align="center">
          <template scope="scope">
            <el-tag :type="scope.row.systemOverview.tag">
              <i :class="scope.row.systemOverview.icon" aria-hidden="true"></i>
            </el-tag>            
          </template>
        </el-table-column>
        <el-table-column label="会话管理" align="center">
          <template scope="scope">
            <el-tag :type="scope.row.sessionManagement.tag">
              <i :class="scope.row.sessionManagement.icon" aria-hidden="true"></i>
            </el-tag>            
          </template>
        </el-table-column>
        <el-table-column label="策略管理" align="center">
          <template scope="scope">
            <el-tag :type="scope.row.strategyManagement.tag">
              <i :class="scope.row.strategyManagement.icon" aria-hidden="true"></i>
            </el-tag>            
          </template>
        </el-table-column>
        <el-table-column label="作业管理" align="center">
          <template scope="scope">
            <el-tag :type="scope.row.taskManagement.tag">
              <i :class="scope.row.taskManagement.icon" aria-hidden="true"></i>
            </el-tag>            
          </template>
        </el-table-column>
        <el-table-column label="节点管理" align="center">
          <template scope="scope">
            <el-tag :type="scope.row.nodeManagement.tag">
              <i :class="scope.row.nodeManagement.icon" aria-hidden="true"></i>
            </el-tag>            
          </template>
        </el-table-column>
        <el-table-column label="存储管理" align="center">
          <template scope="scope">
            <el-tag :type="scope.row.storageManagement.tag">
              <i :class="scope.row.storageManagement.icon" aria-hidden="true"></i>
            </el-tag>            
          </template>
        </el-table-column>
        <el-table-column label="用户管理" align="center">
          <template scope="scope">
            <el-tag :type="scope.row.userManagement.tag">
              <i :class="scope.row.userManagement.icon" aria-hidden="true"></i>
            </el-tag>            
          </template>
        </el-table-column>
        <el-table-column label="角色管理" align="center">
          <template scope="scope">
            <el-tag :type="scope.row.roleManagement.tag">
              <i :class="scope.row.roleManagement.icon" aria-hidden="true"></i>
            </el-tag>            
          </template>
        </el-table-column>
        <el-table-column label="权限管理" align="center">
          <template scope="scope">
            <el-tag :type="scope.row.permissionManagement.tag">
              <i :class="scope.row.permissionManagement.icon" aria-hidden="true"></i>
            </el-tag>            
          </template>
        </el-table-column>
        <el-table-column label="日志管理" align="center">
          <template scope="scope">
            <el-tag :type="scope.row.logManagement.tag">
              <i :class="scope.row.logManagement.icon" aria-hidden="true"></i>
            </el-tag>            
          </template>
        </el-table-column>
        <el-table-column label="报表管理" align="center">
          <template scope="scope">
            <el-tag :type="scope.row.reportManagement.tag">
              <i :class="scope.row.reportManagement.icon" aria-hidden="true"></i>
            </el-tag>            
          </template>
        </el-table-column>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "permission-manager",
    data() {
      return {
        tableData: [{
          role: "普通管理员",
          systemOverview: { permission: true, tag: "success", icon: "fa fa-check" },
          sessionManagement: { permission: true, tag: "success", icon: "fa fa-check" },
          strategyManagement: { permission: true, tag: "success", icon: "fa fa-check" },
          taskManagement: { permission: true, tag: "success", icon: "fa fa-check" },
          nodeManagement: { permission: true, tag: "success", icon: "fa fa-check" },
          storageManagement: { permission: true, tag: "success", icon: "fa fa-check" },
          userManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
          roleManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
          permissionManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
          logManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
          reportManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
        },{
          role: "系统管理员",
          systemOverview: { permission: true, tag: "success", icon: "fa fa-check" },
          sessionManagement: { permission: true, tag: "success", icon: "fa fa-check" },
          strategyManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
          taskManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
          nodeManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
          storageManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
          userManagement: { permission: true, tag: "success", icon: "fa fa-check" },
          roleManagement: { permission: true, tag: "success", icon: "fa fa-check" },
          permissionManagement: { permission: true, tag: "success", icon: "fa fa-check" },
          logManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
          reportManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
        },{
          role: "审计管理员",
          systemOverview: { permission: true, tag: "success", icon: "fa fa-check" },
          sessionManagement: { permission: true, tag: "success", icon: "fa fa-check" },
          strategyManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
          taskManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
          nodeManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
          storageManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
          userManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
          roleManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
          permissionManagement: { permission: false, tag: "danger", icon: "fa fa-close" },
          logManagement: { permission: true, tag: "success", icon: "fa fa-check" },
          reportManagement: { permission: true, tag: "success", icon: "fa fa-check" },
        }]
      }
    }
  }
</script>

<style scoped>
  i {
    margin-right: 5px;
  }
</style>