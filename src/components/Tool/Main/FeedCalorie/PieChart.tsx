import * as React from 'react'
import { Pie } from 'react-chartjs-2'
// XXX 원래 chart-js 그래프에 데이터 표시 안되고 hover 해야만 나왔음
// 이를 해결하기 위해 chartjs-plugin-datalabels 를 설치함
// plugins 에 datalabels 와 ,color 등을 설정
import 'chartjs-plugin-datalabels'
interface PieChartProps {
  data: {
    labels: string[]
    datasets: {
      data: number[]
      backgroundColor: string[]
    }[]
  }
  totalCalories: number
  width?: number
}

const PieChart = ({ data, totalCalories, width }: PieChartProps) => {
  const options = {
    plugins: {
      datalabels: {
        //   흰색
        color: '#ffffff',
        formatter: function (value: number) {
          // 소수점 없애기
          return ((value / totalCalories) * 100).toFixed(0) + '%'
        },
        font: {
          size: 16,
          weight: 'bold',
        },
      },
    },
    responsive: false,
    legend: {
      position: 'right',
      labels: {
        boxWidth: 8,
        usePointStyle: true,
        fontColor: '#090909',
        fontSize: 12,
        fontStyle: 'bold',
      },
    },
  }
  return <Pie data={data} width={width} options={options} />
}

export default PieChart
