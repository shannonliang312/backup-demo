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
      <el-table :data="tableData" border style="width: 100%;" stripe>
        <el-table-column type="expand">
          <template scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="节点ID：">
                <span>{{ props.row.id }}</span>
              </el-form-item>
              <el-form-item label="节点状态：">
                <el-tag :type="props.row.stateTag"><i :class="props.row.stateIcon" aria-hidden="true"></i>{{ props.row.state }}</el-tag>                
              </el-form-item>
              <el-form-item label="节点IP：">
                <span>{{ props.row.ip }}</span>
              </el-form-item>
              <el-form-item label="系统信息：">
                <span>{{ props.row.os }}</span>
              </el-form-item>
              <el-form-item label="数据库信息：">
                <span>{{ props.row.DBinfo }}</span>
              </el-form-item>
              <el-form-item label="备份策略：">
                <el-tag style="margin-right: 5px;" type="gray" v-for=" strategy in props.row.strategies">
                  <i class="fa fa-file-text" aria-hidden="true"></i>{{ strategy }}
                </el-tag>
              </el-form-item>
              <el-form-item label="上次备份时间：">
                <span>{{ props.row.lastBackupTime }}</span>
              </el-form-item>
              <el-form-item label="上次还原时间：">
                <span>{{ props.row.lastRecoveryTime }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="ID"></el-table-column>
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column prop="ip" label="IP地址"></el-table-column>
        <el-table-column prop="lastBackupTime" label="上次备份时间"></el-table-column>
        <el-table-column prop="action" label="操作" width="180">
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
        <el-form-item label="数据库：">
          <el-radio-group v-model="newNodeForm.database">
            <el-radio :label="true">有</el-radio>
            <el-radio :label="false">无</el-radio>
          </el-radio-group>          
        </el-form-item>
        <el-form-item label="数据库名称:">
          <el-input v-model="newNodeForm.dbName" :disabled="!newNodeForm.database"></el-input>
        </el-form-item>
        <el-form-item label="数据库地址:">
          <el-input v-model="newNodeForm.dbIP" :disabled="!newNodeForm.database"></el-input>
        </el-form-item>
        <el-form-item label="数据库密码:">
          <el-input v-model="newNodeForm.dbPsw" :disabled="!newNodeForm.database"></el-input>
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
        tableData: [{
          id: "11234",
          state: "已备份",
          stateTag: "success",
          stateIcon: "fa fa-check",
          ip: "10.33.125.87",
          os: "CentOS 7.1",
          DBinfo: "Postgres 9",
          strategies: ["策略一", "策略二"],
          lastBackupTime: "2017-05-09 10:44:23",
          lastRecoveryTime: "2017-05-09 16:44:23"
        },{
          id: "44564",
          state: "未备份",
          stateTag: "danger",
          stateIcon: "fa fa-close",
          ip: "104.33.125.87",
          os: "CentOS 7.1",
          DBinfo: "Postgres 9",
          strategies: ["策略一", "策略三"],
          lastBackupTime: "",
          lastRecoveryTime: "2017-05-09 16:44:23"
        },{
          id: "34619",
          state: "已备份",
          stateTag: "success",
          stateIcon: "fa fa-check",
          ip: "10.33.125.87",
          os: "CentOS 7.1",
          DBinfo: "Postgres 9",
          strategies: ["策略一", "策略二"],
          lastBackupTime: "2017-05-09 10:44:23",
          lastRecoveryTime: "2017-05-09 16:44:23"
        },{
          id: "11234",
          state: "已备份",
          stateTag: "success",
          stateIcon: "fa fa-check",
          ip: "10.33.125.87",
          os: "CentOS 7.1",
          DBinfo: "Postgres 9",
          strategies: ["策略一", "策略二"],
          lastBackupTime: "2017-05-09 10:44:23",
          lastRecoveryTime: "2017-05-09 16:44:23"
        },{
          id: "11234",
          state: "已备份",
          stateTag: "success",
          stateIcon: "fa fa-check",
          ip: "10.33.125.87",
          os: "CentOS 7.1",
          DBinfo: "Postgres 9",
          strategies: ["策略一", "策略二"],
          lastBackupTime: "2017-05-09 10:44:23",
          lastRecoveryTime: "2017-05-09 16:44:23"
        }],
        dialogVisible: false,
        newNodeForm: {
          database: ""
        }
      }
    },
    computed: {
      stateTag: function(state) {
        if(state == "已备份") {
          return "success";
        } else if (state == "未备份") {
          return "danger";
        } else {
          return "warning";
        }
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

  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>