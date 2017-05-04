<template>
  <div class="router-box">
    <div class="router-box-header">
      报表管理
    </div>
    <div class="router-box-body">
      <el-button type="primary" @click="exportExcel">
        导出Excel
      </el-button>
    </div>
  </div>
</template>

<script>
  import { export_json_to_excel } from '@/service/excel/Export2Excel'
  export default {
    name: "report-manager",
    methods: {
      exportExcel() {
        export_json_to_excel();
      }
    }
  }
</script>

<style scoped>
  
</style>