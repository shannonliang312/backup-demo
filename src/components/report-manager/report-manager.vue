<template>
  <div class="router-box">
    <div class="router-box-header">
      报表管理
    </div>
    <div class="router-box-body">
      <el-button type="primary" @click="exportExcel" style="margin-bottom: 20px;">
        导出Excel
      </el-button>
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column label="名称" prop="name"></el-table-column>
        <el-table-column label="生成时间" prop="time"></el-table-column>
        <el-table-column prop="action" label="操作">
          <template scope="scope">
            <el-button size="small" type="primary">报表详情</el-button>
            <el-button size="small" type="danger">删除</el-button>              
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import { export_json_to_excel } from '@/service/excel/Export2Excel'
  export default {
    name: "report-manager",
    data() {
      return {
        tableData: [{
          name: "报表一",
          time: "2017-05-04 22:22:22"
        },{
          name: "报表二",
          time: "2017-05-05 11:11:11"
        }]
      }
    },
    methods: {
      exportExcel() {
        export_json_to_excel();
      }
    }
  }
</script>

<style scoped>
  
</style>