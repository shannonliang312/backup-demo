<template>
  <div class="router-box">
    <div class="router-box-header">
      日志管理
    </div>
    <div class="router-box-body">
      <el-date-picker
        v-model="startTime"
        type="datetime"
        placeholder="选择起始时间"
      ></el-date-picker>
      <span>---</span>
      <el-date-picker
        v-model="endTime"
        type="datetime"
        placeholder="选择结束时间"
      ></el-date-picker>
      <el-button type="primary" style="margin-left: 20px" icon="search">查询</el-button>
      <el-table :data="tableData" border style="width: 100%; margin-top: 20px;''">
        <el-table-column prop="time" label="时间" width="200"></el-table-column>
        <el-table-column prop="action" label="操作" width="150"></el-table-column>
        <el-table-column prop="message" label="详情"></el-table-column>
        <el-table-column  label="操作结果" width="150">
          <template scope="scope">
            <el-tag type="success">
              <i class="fa fa-check" aria-hidden="true"></i>{{ scope.row.result }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  export default {
    name: "log-manager",
    data () {
      return {
        tableData: [{
          time: "2017-05-05 22:22:22",
          action: "登录",
          message: "用户admin1进行登录操作，登录IP：22.33.44.55",
          result: "成功"
        },{
          time: "2017-05-05 22:22:33",
          action: "登出",
          message: "用户admin2进行登出操作",
          result: "成功"
        }],
        startTime: "",
        endTime: ""
      }
    }
  }
</script>

<style scoped>
  i {
    margin-right: 5px;
  }
</style>