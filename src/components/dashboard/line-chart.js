import { Line } from 'vue-chartjs'

export default Line.extend({
  data() {
    return {
      datacollection: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [
          {
            backgroundColor: '#2b3942',
            data: [40, 20, 30, 28, 11]
          }
        ]
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, {})
  }
})