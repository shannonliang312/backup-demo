<template>
  <div class="router-box">
    <div class="router-box-header">
      备份作业管理
    </div>
    <div class="router-box-body">
      <el-button type="primary" style="margin-bottom: 20px;" @click="showDialog">
        <i class="fa fa-plus" aria-hidden="true"></i>添加新作业
      </el-button>
      <el-input type="text" style="width: 20%;float: right" placeholder="搜索"></el-input>
      <el-table :data="tableData" style="width: 100%; height: 100%">
        <el-table-column prop="name" label="作业名称"></el-table-column>
        <el-table-column prop="state" label="作业状态">
          <template scope="scope"> 
            <el-tag :type="scope.row.stateTag">
              <i :class="scope.row.stateIcon" aria-hidden="true"></i>{{ scope.row.state }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="strategy" label="策略"></el-table-column>
        <el-table-column prop="node" label="备份节点"></el-table-column>        
        <el-table-column prop="action" label="操作">
          <template scope="scope">
            <el-button size="small">编辑</el-button>
            <el-button size="small" type="primary" @click="excuteTask">执行</el-button>
            <el-button size="small" type="danger" @click="deleteTask">删除</el-button>              
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
    <el-dialog title="添加新备份作业" v-model="dialogVisible">
      <el-form ref="taskForm" :model="taskForm" label-width="100px">
        <el-form-item label="作业名称：">
          <el-input v-model="taskForm.name"></el-input>
        </el-form-item>
        <el-form-item label="策略选择：">
          <el-select v-model="taskForm.strategy">
            <el-option label="策略一" value="strategy1"></el-option>
            <el-option label="策略二" value="strategy2"></el-option>
            <el-option label="策略三" value="strategy3"></el-option>
            <el-option label="策略四" value="strategy4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="工作机IP：">
          <el-input v-model="taskForm.ip"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
          <el-button type="warning" @click="hideDialog">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="删除备份作业" v-model="deleteDialogVisible">
      <h4 style="margin-bottom: 30px">确定删除作业一？此操作不可逆</h4>
      <el-button type="danger">确定</el-button>
      <el-button type="warning" @click="hideDialog">取消</el-button>
    </el-dialog>
    <el-dialog title="执行备份作业" v-model="excuteDialogVisible">
      <h4 style="margin-bottom: 30px">确定执行作业一？</h4>
      <el-button type="primary">确定</el-button>
      <el-button type="warning" @click="hideDialog">取消</el-button>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'backup-manager',
    data () {
      return {
        excuteDialogVisible: false,
        deleteDialogVisible: false,
        dialogVisible: false,
        taskForm: {},
        tableData: [{
          name: '作业一',
          state: '执行中',
          stateTag: 'success',
          stateIcon: 'fa fa-check',
          strategy: '策略一',
          node: '173.43.26.86'
        }, {
          name: '作业二',
          state: '未执行',
          stateTag: 'danger',
          stateIcon: 'fa fa-close',
          strategy: '策略五',
          node: '173.43.26.186'
        }, {
          name: '作业三',
          state: '执行中',
          stateTag: 'success',
          stateIcon: 'fa fa-check',
          strategy: '策略三',
          node: '173.43.26.26'
        }, {
          name: '作业四',
          state: '执行中',
          stateTag: 'success',
          stateIcon: 'fa fa-check',
          strategy: '策略四',
          node: '173.43.26.66'
        }, {
          name: '作业五',
          state: '未执行',
          stateTag: 'danger',
          stateIcon: 'fa fa-close',
          strategy: '策略二',
          node: '173.43.126.86'
        }, {
          name: '作业一',
          state: '执行中',
          stateTag: 'success',
          stateIcon: 'fa fa-check',
          strategy: '策略一',
          node: '173.43.26.86'
        }, {
          name: '作业二',
          state: '未执行',
          stateTag: 'danger',
          stateIcon: 'fa fa-close',
          strategy: '策略五',
          node: '173.43.26.186'
        }, {
          name: '作业三',
          state: '执行中',
          stateTag: 'success',
          stateIcon: 'fa fa-check',
          strategy: '策略三',
          node: '173.43.26.26'
        }, {
          name: '作业四',
          state: '执行中',
          stateTag: 'success',
          stateIcon: 'fa fa-check',
          strategy: '策略四',
          node: '173.43.26.66'
        }, {
          name: '作业五',
          state: '未执行',
          stateTag: 'danger',
          stateIcon: 'fa fa-close',
          strategy: '策略二',
          node: '173.43.126.86'
        }]
      }
    },
    methods: {
      showDialog () {
        this.dialogVisible = true
      },
      hideDialog () {
        this.dialogVisible = false
      },
      deleteTask () {
        this.deleteDialogVisible = true
      },
      excuteTask () {
        this.excuteDialogVisible = true
      }
    }
  }
</script>

<style scoped>
  i {
    margin-right: 5px;
  }
</style>
