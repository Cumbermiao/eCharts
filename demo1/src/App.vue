<template>
  <div id="app">

    <div id="chart1" style="width:600px;height:400px"></div>
    <div id="chart2" style="width:600px;height:400px"></div>
  </div>
</template>

<script>
import router from './route'



export default {

  name: 'app',

  mounted() {
    var echarts = require('echarts');
    var myChart1 = echarts.init(document.getElementById('chart1'));
    var myChart2 = echarts.init(document.getElementById('chart2'));
    myChart1.setOption({
      title: {
        text: '访问',
        subText: '我是副标题',
        subtextStyle: {
          color: 'red',
          fontSize: 16
        }
      },
      tooltip: {},
      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
      },
      yAxis: {},
      series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }]
    });

    myChart2.setOption({
      title: {
        text: '访问',
        subText: 'visit',
        subtextStyle: {
          color: 'red',
          fontSize: 16
        }
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '55%',
          data: [
            { value: 235, name: '视频广告' },
            { value: 274, name: '联盟广告' },
            { value: 310, name: '邮件营销' },
            { value: 335, name: '直接访问' },
            { value: 400, name: '搜索引擎' }
          ]
        }
      ]
    })
  }

}
</script>

<style>
.content {
  border: 1px solid rgb(169, 169, 169);
  margin-top: 50px;
}
</style>
