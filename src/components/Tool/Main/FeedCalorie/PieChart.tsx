import * as React from 'react'
import { Pie } from 'react-chartjs-2'
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
