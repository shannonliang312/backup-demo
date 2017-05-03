<template>
  <div>
    <h1 style="margin: 20px 0;">Dashboard</h1>   
    <!--<el-row :gutter="20">
      <el-col :span="6">
        <div class="node-box">
          <h4>节点1</h4>
          <code>13.22.42.46</code>
          <div>状态： 已备份</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="node-box">
          <h4>节点2</h4>
          <code>13.22.42.46</code>
          <div>状态： 未备份</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="node-box">
          <h4>节点3</h4>
          <code>13.22.42.46</code>
          <div>状态： 已备份</div>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="node-box">
          <h4>节点4</h4>
          <code>13.22.42.46</code>
          <div>状态： 未备份</div>
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="30">
      <el-col :span="12">
        <div class="chart-box">
          <line-chart :height="200"></line-chart>
        </div>        
      </el-col>
      <el-col :span="12">
        <div class="chart-box">
          <bar-chart :height="200"></bar-chart>
        </div>        
      </el-col>
    </el-row>    
    <el-row :gutter="30">
      <el-col :span="12">
        <div class="table-box">
          <h2 style="margin-bottom: 20px;">存储信息</h2>
          <el-table border style="width: 100%">
            <el-table-column prop="IP" label="IP地址">
            </el-table-column>
            <el-table-column prop="name" label="名称">
            </el-table-column>
            <el-table-column prop="space" label="磁盘空间">
            </el-table-column>
            <el-table-column prop="state" label="状态">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="table-box">
          <h2 style="margin-bottom: 20px;">日志信息</h2>
          <el-table border style="width: 100%;" :data="logData">
            <el-table-column prop="time" label="时间">
            </el-table-column>
            <el-table-column prop="action" label="操作" width="80">
            </el-table-column>
            <el-table-column prop="message" label="详情">
            </el-table-column>
            <el-table-column prop="result" label="操作结果" width="100">
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>-->
  </div>
</template>

<script>

  import LineChart from './line-chart'
  import BarChart from './bar-chart'

  export default {
    name: "dashboard",
    data() {
      return {
        logData: [{
          time: "2017-04-27 15:10:36",
          action: "登录",
          message: "登录成功, 登录客户端IP地址为:100.97.88.177 LOGIN DIRECTLY.",
          result: "成功"
        }]
      }
    },
    components: {
      LineChart,
      BarChart
    }
  }
</script>

<style>
  .node-box {
    padding: 10px;
    background: #fff;
    height: 60px;
    border-radius: 4px;
    box-shadow: 0 1px 5px grey;
  }
  
  code {
    padding: 2px 4px;
    margin: 20px 0;
    font-size: 90%;
    color: #c7254e;
    background-color: #f9f2f4;
    border-radius: 1px;
  }

  .chart-box {
    margin-top: 30px;
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 5px grey;
  }

  .table-box {
    margin-top: 30px;
    padding: 10px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 1px 5px grey;
  }
</style>