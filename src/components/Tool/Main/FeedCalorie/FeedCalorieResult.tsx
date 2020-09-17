import * as React from 'react'
import PieChart from './PieChart'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../modules'
import FeedCalorieCalculator from './FeedCalorieCalculator'
import { Nutrient } from './nutrientProfile'
function FeedCalorieResult() {
  const { type, growth, isBig, nutrient } = useSelector(
    (state: RootState) => state.calculator.feedCalorie
  )
  const feedCalorieInfo = { type, growth, isBig, nutrient }
  const feedCalorieResult = new FeedCalorieCalculator(feedCalorieInfo)
  const {
    minValues,
    maxValues,
    suitableValues,
  } = feedCalorieResult.getAAFCOResult()

  console.log('minValues', minValues)
  console.log('maxValues', maxValues)
  console.log('suitableValues', suitableValues)

  const chartData = {
    labels: ['단백질', '탄수화물', '지방'],
    datasets: [
      {
        data: [
          feedCalorieResult.dmProteinCalorie,
          feedCalorieResult.dmCarbohydrateCalorie,
          feedCalorieResult.dmFatCalorie,
        ],
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
            총 칼로리 <span>{feedCalorieResult.totalCalories}</span>kcal (100g
            기준)
          </h4>
          <p>칼로리 기준 비율</p>
          <div className="graph-wrapper">
            <PieChart
              data={chartData}
              width={234}
              totalCalories={feedCalorieResult.totalCalories}
            />
          </div>
        </div>
        <hr />
        <div className="AAFCO-result-wrapper">
          <h4>2020 미국사료협회(AAFCO) 기준</h4>
          {suitableValues.length > 0 ? (
            <h4>
              {suitableValues
                .filter((x) => x !== Nutrient.CalciumPerPhosphorus)
                .join(', ')}{' '}
              <span> 함유량이 기준 최소치를 </span>
              <span>충족합니다.</span>
            </h4>
          ) : (
            <></>
          )}

          {suitableValues.includes(Nutrient.CalciumPerPhosphorus) ? (
            <h4>
              {suitableValues
                .filter((x) => x === Nutrient.CalciumPerPhosphorus)
                .join(', ')}{' '}
              <span>함유량 비율이 기준 최소치를 </span>
              <span>충족합니다.</span>
            </h4>
          ) : (
            <></>
          )}

          {minValues.length > 0 ? (
            <h4>
              {minValues
                .filter((x) => x !== Nutrient.CalciumPerPhosphorus)
                .join(', ')}{' '}
              <span> 함유량이 기준 최소치를 </span>
              <span className="not-satisfied">충족하지 않습니다.</span>
            </h4>
          ) : (
            <></>
          )}
          {minValues.includes(Nutrient.CalciumPerPhosphorus) ? (
            <h4>
              {minValues
                .filter((x) => x === Nutrient.CalciumPerPhosphorus)
                .join(', ')}{' '}
              <span> 함유량이 기준 최소치를 </span>
              <span className="not-satisfied">충족하지 않습니다.</span>
            </h4>
          ) : (
            <></>
          )}
          {maxValues.length > 0 ? (
            <h4>
              {maxValues
                .filter((x) => x !== Nutrient.CalciumPerPhosphorus)
                .join(', ')}{' '}
              <span>함유량이 권장량 최대치를 </span>
              <span className="not-satisfied">초과합니다</span>
            </h4>
          ) : (
            <></>
          )}
          {maxValues.includes(Nutrient.CalciumPerPhosphorus) ? (
            <h4>
              {maxValues
                .filter((x) => x === Nutrient.CalciumPerPhosphorus)
                .join(', ')}{' '}
              <span>함유량 비율이 권장량 최대치를 </span>
              <span className="not-satisfied">초과합니다.</span>
            </h4>
          ) : (
            <></>
          )}
        </div>
        <hr />
        <div className="dm-standard-container">
          <h4>DM 기준</h4>

          <p>
            DM 기준은 수분 함량을 제외한 영양 성분 수치로 미국사료협회(AAFCO)가
            사료 성분 분석 시 사용하는 기준입니다.
          </p>

          <div className="nutrient-container">
            {feedCalorieResult.result.map((nutrient) => (
              <div className="nutrient-wrapper" key={nutrient.key}>
                <h4>{nutrient.label}</h4>
                <h4>
                  <span>{nutrient.value.toFixed(2)}</span>
                  {nutrient.key !== 'calciumPerPhosphorus' ? ' %' : ''}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedCalorieResult
