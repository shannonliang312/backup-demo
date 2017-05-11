<template>
  <div class="router-box">
    <div class="router-box-header">
      系统还原管理
    </div>
    <div class="router-box-body">
      <el-select v-model="currentNode" placeholder="请选择节点">
        <el-option v-for="item in nodeList" :value="item"></el-option>
      </el-select>
      <el-select v-model="currentBackupType" placeholder="请选择备份类型">
        <el-option v-for="item in backupTypeList" :value="item"></el-option>
      </el-select>
      <el-input type="text" style="width: 20%;float: right; margin-bottom: 20px;" placeholder="搜索"></el-input>
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column prop="time" label="创建时间"></el-table-column>
        <el-table-column prop="task" label="备份名称"></el-table-column>
        <el-table-column prop="backupType" label="类型"></el-table-column>
        <el-table-column prop="node" label="节点"></el-table-column>
        <el-table-column prop="action" label="操作">
          <template scope="scope">
            <el-button size="small" type="primary">恢复</el-button>
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
    <el-dialog></el-dialog>
  </div>
</template>

<script>
  export default {
    name: "recovery-manager",
    data () {
      return {
        tableData: [{
          time: "2017-05-03 22:45:47",
          task: "全备份一",
          backupType: "全备份",
          node: "节点一"
        },{
          time: "2017-05-04 22:45:47",
          task: "差分增量备份三",
          backupType: "差分增量备份",
          node: "节点二"
        },{
          time: "2017-05-03 22:00:47",
          task: "累计增量备份一",
          backupType: "累计增量备份",
          node: "节点四"
        },{
          time: "2017-05-03 22:45:47",
          task: "全备份二",
          backupType: "全备份",
          node: "节点一"
        },{
          time: "2017-05-04 22:45:47",
          task: "差分增量备份二",
          backupType: "差分增量备份",
          node: "节点二"
        },{
          time: "2017-05-03 22:00:47",
          task: "累计增量备份一",
          backupType: "累计增量备份",
          node: "节点五"
        },{
          time: "2017-05-03 22:00:47",
          task: "累计增量备份一",
          backupType: "累计增量备份",
          node: "节点四"
        },{
          time: "2017-05-03 22:45:47",
          task: "全备份二",
          backupType: "全备份",
          node: "节点一"
        },{
          time: "2017-05-04 22:45:47",
          task: "差分增量备份二",
          backupType: "差分增量备份",
          node: "节点二"
        },{
          time: "2017-05-03 22:00:47",
          task: "累计增量备份一",
          backupType: "累计增量备份",
          node: "节点五"
        }],
        dialogVisible: false,
        newPolicyForm: {},
        nodeList: ["全部", "节点一", "节点二", "节点三"],
        backupTypeList: ["全备份", "差分增量备份", "累计增量备份"],
        currentNode: "全部",
        currentBackupType: "全备份",

      }
    },
  }
</script>

<style scoped>
  
</style>