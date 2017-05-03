import {Bar} from 'vue-chartjs'

export default Bar.extend({
  data () {
    return {
      datacollection: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#2b3942',
            data: [40, 20, 100, 60, 55]
          }
        ]
      }
    }
  },
  mounted () {
    this.renderChart(this.datacollection, {})
  }
})