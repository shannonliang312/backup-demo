import { Pie } from 'vue-chartjs'

export default Pie.extend({
  props: ["pieData"],
  data () {
    return {
      datacollection: {
        labels: ['数据库', '数据卷', '文件', '操作系统'],
        datasets: [
          {
            // label: this.pieData.title,
            data: [40, 20, 100, 60],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
          }
        ]
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, {})
  }
})