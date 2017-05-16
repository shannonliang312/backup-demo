<template>
  <div class="router-box">
    <div class="router-box-header">
      定期备份策略设置
    </div>
    <div class="router-box-body">
      <el-button type="primary" style="margin-bottom: 30px;" @click="showDialog">
        <i class="fa fa-plus" aria-hidden="true"></i>添加新策略
      </el-button>
      <el-button type="primary" style="margin-bottom: 30px;">
        <i class="fa fa-cloud-upload" aria-hidden="true"></i>导入策略
      </el-button>
      <el-button type="primary" style="margin-bottom: 30px;">
        <i class="fa fa-download" aria-hidden="true"></i>导出策略
      </el-button>
      <el-input type="text" style="width: 20%;float: right" placeholder="搜索"></el-input>
      <el-table :data="tableData" border style="width: 100%; height: 100%">
        <el-table-column prop="name" label="名称" ></el-table-column>
        <el-table-column prop="object" label="备份对象" ></el-table-column>
        <el-table-column prop="media" label="备份介质" width="120"></el-table-column>        
        <el-table-column prop="storageIP" label="存储IP地址"></el-table-column>
        <el-table-column prop="timeInterval" label="备份时间间隔"></el-table-column>
        <el-table-column prop="method" label="备份方式"></el-table-column>
        <el-table-column prop="action" label="操作" width="180">
          <template scope="scope">
            <el-button size="small">编辑</el-button>
            <el-button size="small" type="danger" @click="deleteStrategy">删除</el-button>              
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
    <el-dialog title="编辑策略" v-model="dialogVisible" size="small"> 
      <el-form ref="newPolicyForm" :model="newPolicyForm" label-width="120px" style="width: 80%">
        <el-form-item label="名称:">
          <el-input v-model="newPolicyForm.name"></el-input>
        </el-form-item>
        <el-form-item label="备份对象:">
          <el-select v-model="newPolicyForm.object">
            <el-option label="操作系统" value="os"></el-option>
            <el-option label="数据卷" value="volume"></el-option>
            <el-option label="数据库" value="database"></el-option>
            <el-option label="文件" value="file"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="备份介质:">
          <el-input v-model="newPolicyForm.media"></el-input>
        </el-form-item>
        <el-form-item label="存储IP地址:">
          <el-input v-model="newPolicyForm.serverIP"></el-input>
        </el-form-item>
        <el-form-item label="备份保存时间:">
          <el-input v-model="newPolicyForm.keepTime"></el-input>
        </el-form-item>
        <el-form-item label="备份时间间隔:">
          <el-select v-model="newPolicyForm.timeInterval">
            <el-option label="5分钟" value="5min"></el-option>
            <el-option label="30分钟" value="30min"></el-option>
            <el-option label="1小时" value="1hour"></el-option>
            <el-option label="24小时" value="24hour"></el-option>
            <el-option label="1周" value="1week"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">提交</el-button>
          <el-button type="warning" @click="hideDialog">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog title="删除策略" v-model="deleteDialogVisible">
      <h4 style="margin-bottom: 30px">确定删除策略一？此操作不可逆</h4>
      <el-button type="danger">确定</el-button>
      <el-button type="warning" @click="hideDialog">取消</el-button>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: 'strategy-configure',
    data () {
      return {
        deleteDialogVisible: false,
        tableData: [{
          name: '策略一',
          object: '操作系统',
          media: 'Disk',
          storageIP: '1.2.3.4',
          timeInterval: '10分钟',
          method: '全备份'
        }, {
          name: '策略二',
          object: '数据卷',
          media: 'Disk',
          storageIP: '1.2.3.4',
          timeInterval: '半小时',
          method: '差分增量备份'
        }, {
          name: '策略三',
          object: '数据库',
          media: 'Disk',
          storageIP: '1.2.3.4',
          timeInterval: '12小时',
          method: '累计增量备份'
        }, {
          name: '策略四',
          object: '文件',
          media: 'Disk',
          storageIP: '1.2.3.4',
          timeInterval: '24小时',
          method: '全备份'
        }],
        dialogVisible: false,
        newPolicyForm: {
          object: '',
          timeInterval: ''
        }
      }
    },
    methods: {
      showDialog () {
        this.dialogVisible = true
      },
      hideDialog () {
        this.dialogVisible = false
      },
      deleteStrategy () {
        this.deleteDialogVisible = true
      }
    }
  }
</script>

<style scoped>
  i {
    margin-right: 5px;
  }
</style>
