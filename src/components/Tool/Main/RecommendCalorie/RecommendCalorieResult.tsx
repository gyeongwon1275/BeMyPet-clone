import * as React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../modules'
import RecommendCalorieCalculator from './PetStatusUtils'
function RecommendCalorieResult() {
  const { type, weight, status } = useSelector(
    (state: RootState) => state.calculator.recommendCalorie
  )
  let result = new RecommendCalorieCalculator(type, weight, status)

  return (
    <div className="recommend-result-container">
      <h2>
        <span>권장칼로리 </span>
        결과
      </h2>
      <div className="recommend-result-wrapper">
        <div className="result-box">
          <div className="calorie-wrapper">
            <h4>1일 권장 칼로리</h4>
            <h4>
              <span>{result.RecommendedMetabolism}</span> kcal
            </h4>
          </div>

          <div className="metabolism-wrapper">
            <h4>1일 기초 대사량</h4>

            <h4>
              <span>{result.BasalMetabolism}</span>
              kcal
            </h4>
          </div>
        </div>

        <p>
          건강 상태, 비만도에 따라 달라질 수 있으니
          <br />
          정확한 섭취량은 수의사와 상담해보세요.
        </p>
      </div>
    </div>
  )
}

export default RecommendCalorieResult
