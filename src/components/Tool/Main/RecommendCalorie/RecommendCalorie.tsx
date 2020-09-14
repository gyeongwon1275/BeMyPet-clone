import * as React from 'react'
import './RecommendCalorie.scss'
import RecommendCalorieFormContainer from './RecommendCalorieFormContainer'
import RecommendCalorieResult from './RecommendCalorieResult'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../modules'

function RecommendCalorie() {
  const { result } = useSelector(
    (state: RootState) => state.calculator.recommendCalorie
  )

  return (
    <>
      <div className="main-img-container">
        <div className="logo-text-wrapper">
          <h1>
            <span className="recommended-logo-span">권장칼로리</span>
            란?
          </h1>
          <p>
            우리 아이의 몸무게, 상태에 따라
            <br />
            권장되는 칼로리를 계산해보세요.
          </p>
        </div>

        <img src="https://tools.mypetlife.co.kr/static/media/recommendMain.b4a09344.png" />
      </div>

      <RecommendCalorieFormContainer />
      {result ? <RecommendCalorieResult /> : <></>}
    </>
  )
}

export default RecommendCalorie
