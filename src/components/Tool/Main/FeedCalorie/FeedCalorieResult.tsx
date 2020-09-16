import * as React from 'react'
import PieChart from './PieChart'

function FeedCalorieResult() {
  const chartData = {
    labels: ['단백질', '탄수화물', '지방'],
    datasets: [
      {
        data: [24, 51, 25],
        backgroundColor: ['#cbccba', '#98bc73', '#fcd11e'],
      },
    ],
  }
  {
    /* <PieChart data={chartData} width={234} totalCalories={100} /> */
  }
  return (
    <div className="feedCalorie-result-container">
      <h2>
        <span>사료칼로리 계산</span>결과
      </h2>

      <div className="result-data-wrapper">
        <div className="graph-container">
          <h4>
            총 칼로리 <span>369</span>kcal (100g 기준)
          </h4>
          <p>칼로리 기준 비율</p>
          <div className="graph-wrapper">
            <PieChart data={chartData} width={234} totalCalories={100} />
          </div>
        </div>
        <hr />
        <div className="AAFCO-result-wrapper">
          <h4>2020 미국사료협회(AAFCO) 기준</h4>

          <h4>
            조단백질, 조지방
            <span> 함유량이 기준 최소치를 </span>
            <span>충족합니다.</span>
          </h4>
          <h4>
            칼슘:인
            <span> 함유량 비율이 기준 최소치를 </span>
            <span>충족합니다.</span>
          </h4>
          <h4>
            인, 칼슘
            <span> 함유량이 기준 최소치를 </span>
            <span> 충족하지 않습니다.</span>
          </h4>
        </div>
        <hr />
        <div className="dm-standard-container">
          <h4>DM 기준</h4>

          <p>
            DM 기준은 수분 함량을 제외한 영양 성분 수치로 미국사료협회(AAFCO)가
            사료 성분 분석 시 사용하는 기준입니다.
          </p>

          <div className="nutrient-container">
            <div className="nutrient-wrapper">
              <h4>조단백질</h4>
              <h4>
                <span>27.27</span>%
              </h4>
            </div>
            <div className="nutrient-wrapper">
              <h4>조지방</h4>
              <h4>
                <span>10.23</span>%
              </h4>
            </div>
            <div className="nutrient-wrapper">
              <h4>탄수화물</h4>
              <h4>
                <span>53.41</span>%
              </h4>
            </div>
            <div className="nutrient-wrapper">
              <h4>칼슘:인</h4>
              <h4>
                <span>1.00</span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedCalorieResult
