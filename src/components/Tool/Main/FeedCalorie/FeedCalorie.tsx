import * as React from 'react'
import FeedCalorieFormContainer from './FeedCalorieFormContainer'
import PieChart from './PieChart'
import './FeedCalorie.scss'
import FeedCalorieResult from './FeedCalorieResult'
function FeedCalorie() {
  const chartData = {
    labels: ['단백질', '탄수화물', '지방'],
    datasets: [
      {
        data: [24, 51, 25],
        backgroundColor: ['#cbccba', '#98bc73', '#fcd11e'],
      },
    ],
  }
  return (
    <>
      <div className="main-img-container">
        <div className="logo-text-wrapper">
          <h1>
            <span className="food-logo-span">
              사료칼로리
              <br />
              계산기
            </span>
            란?
          </h1>
          <p>
            사료 성분표를 DM기준(수분0%)으로
            <br />
            변환하는 계산기입니다.
          </p>
        </div>

        <img src="https://tools.mypetlife.co.kr/static/media/feedMain.049f12bf.png" />
      </div>
      <FeedCalorieFormContainer />
      <FeedCalorieResult />
      {/* <PieChart data={chartData} width={234} totalCalories={100} /> */}
    </>
  )
}

export default FeedCalorie
