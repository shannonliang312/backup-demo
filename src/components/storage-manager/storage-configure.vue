<template>
  <div class="router-box">
    <div class="router-box-header">
      存储管理
    </div>
    <div class="router-box-body">
      <el-button type="primary" style="margin-bottom: 20px;" @click="showDialog">
        <i class="fa fa-plus" aria-hidden="true"></i>添加存储服务器
      </el-button>
      <el-input type="text" style="width: 20%;float: right" placeholder="搜索"></el-input>
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column label="状态">
          <template scope="scope">
            <el-tag :type="scope.row.stateTag">
              <i :class="scope.row.stateIcon" aria-hidden="true"></i>{{ scope.row.state }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="名称"></el-table-column>
        <el-table-column prop="ip" label="IP地址"></el-table-column>
        <el-table-column prop="media" label="存储介质"></el-table-column>
        <el-table-column prop="space" label="存储空间"></el-table-column>
        <el-table-column prop="diskInfo" label="存储空间使用">
          <template scope="scope">
            <el-progress :percentage="scope.row.spaceUsed * 100">
            </el-progress>
          </template>
        </el-table-column>
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
    <el-dialog title="编辑存储服务器" v-model="dialogVisible" size="small"> 
      <el-form ref="newServerForm" :model="newServerForm" label-width="120px" style="width: 80%">
        <el-form-item label="状态:">
          <el-select v-model="newServerForm.state" placeholder="请选择存储服务器状态">
            <el-option label="在线" value="online"></el-option>
            <el-option label="离线" value="offline"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="名称:">
          <el-input v-model="newServerForm.name"></el-input>
        </el-form-item>
        <el-form-item label="IP地址:">
          <el-input v-model="newServerForm.serverIP"></el-input>
        </el-form-item>
        <el-form-item label="存储介质:">
          <el-select v-model="newServerForm.media" placeholder="请选择存储介质">
            <el-option label="NTFS" value="ntfs"></el-option>
            <el-option label="磁带" value="tape"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="存储空间:">
          <el-input v-model="newServerForm.diskInfo"></el-input>
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
    name: 'storage-configure',
    data () {
      return {
        tableData: [{
          state: '在线',
          stateTag: 'success',
          stateIcon: 'fa fa-check',
          name: '存储一',
          ip: '1.2.3.4',
          media: 'NTFS',
          space: '500G',
          spaceUsed: '0.5'
        }, {
          state: '离线',
          stateTag: 'danger',
          stateIcon: 'fa fa-close',
          name: '存储二',
          ip: '1.2.3.5',
          media: 'NTFS',
          space: '1000G',
          spaceUsed: '0.72'
        }, {
          state: '在线',
          stateTag: 'success',
          stateIcon: 'fa fa-check',
          name: '存储一',
          ip: '1.2.3.22',
          media: 'NTFS',
          space: '500G',
          spaceUsed: '0.5'
        }, {
          state: '离线',
          stateTag: 'danger',
          stateIcon: 'fa fa-close',
          name: '存储二',
          ip: '1.2.3.23',
          media: 'NTFS',
          space: '1000G',
          spaceUsed: '0.72'
        }, {
          state: '在线',
          stateTag: 'success',
          stateIcon: 'fa fa-check',
          name: '存储一',
          ip: '1.2.3.40',
          media: 'NTFS',
          space: '500G',
          spaceUsed: '0.5'
        }, {
          state: '离线',
          stateTag: 'danger',
          stateIcon: 'fa fa-close',
          name: '存储二',
          ip: '1.2.44.4',
          media: 'NTFS',
          space: '1000G',
          spaceUsed: '0.72'
        }],
        dialogVisible: false,
        newServerForm: {
          state: '',
          media: ''
        }
      }
    },
    methods: {
      showDialog () {
        this.dialogVisible = true
      },
      hideDialog () {
        this.dialogVisible = false
      }
    }
  }
</script>

<style scoped>
  i {
    margin-right: 5px;
  }
</style>
