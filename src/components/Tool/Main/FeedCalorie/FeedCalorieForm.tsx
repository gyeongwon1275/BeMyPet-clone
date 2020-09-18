import * as React from 'react'
import {
  AnimalGrowthType,
  animalType,
  FeedCalorieNutrientInfo,
} from '../../../../modules/calculator'
import { initialFeedCalorieState } from '../../../../modules/calculator/reducer'
import SubmitButton from '../UIcomponents/SubmitButton'
import FeedCalorieInput from './FeedCalorieInput'

import { FeedCalorieFormProps } from './FeedCalorieUtils'

function FeedCalorieForm({
  feedCalorieInfo,
  onInputfeedCalorieInfo,
}: FeedCalorieFormProps) {
  const feedCalorieObjct = feedCalorieInfo
  const { type, growth, isBig, nutrient } = feedCalorieInfo

  React.useEffect(() => {
    onInputfeedCalorieInfo(initialFeedCalorieState)
  }, [])

  const handleAnimalType = React.useCallback(
    (type: animalType) => () => {
      feedCalorieObjct.type = type
      feedCalorieObjct.result = false
      feedCalorieObjct.growth = null
      feedCalorieObjct.isBig = false
      onInputfeedCalorieInfo(feedCalorieObjct)
    },
    [feedCalorieInfo]
  )

  const handleAnimalGrowth = React.useCallback(
    (growth: AnimalGrowthType | null) => () => {
      feedCalorieObjct.growth = growth
      onInputfeedCalorieInfo(feedCalorieObjct)
    },
    [feedCalorieInfo]
  )

  const handleDogSize = React.useCallback(() => {
    feedCalorieObjct.isBig = !isBig
    onInputfeedCalorieInfo(feedCalorieObjct)
  }, [feedCalorieInfo])

  const handleFeedCalorieResult = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const nullValueNutrient = []
      for (let i in nutrient) {
        if (!nutrient[i as keyof FeedCalorieNutrientInfo]) {
          nullValueNutrient.push(i)
        }
      }
      console.log('nullValueNutrient', nullValueNutrient)
      // TODO
      /* 
      값이 null 인 키를 찾아서 배열등으로 모음 
      */
      if (!type) {
        alert(`동물 종류를 선택해주세요 `)
        return
      }
      if (!growth) {
        alert(`반려동물 상태를 선택해주세요 `)
        return
      }

      if (type === '강아지' && !isBig) {
        alert(`대형견 여부를 선택해주세요 `)
        return
      }
      if (type === '강아지') {
        if (nullValueNutrient.length > 2) {
          alert(`영양소를 전부 입력해주세요 `)
          return
        }
      }

      if (type === '고양이') {
        if (nullValueNutrient.length > 1) {
          alert(`영양소를 전부 입력해주세요 `)
          return
        }
      }

      feedCalorieObjct.result = true
      onInputfeedCalorieInfo(feedCalorieObjct)
    },
    [feedCalorieInfo]
  )
  return (
    <div className="calculator-container">
      <form className="calculator-form" onSubmit={handleFeedCalorieResult}>
        <div className="select-animal-wrapper">
          <label className="animal-select-label">반려동물 종류</label>
          <div className="select-image-wrapper">
            <div
              className={`${
                type === '강아지' ? `select-image-box` : `unselect-image-box`
              }`}
              onClick={handleAnimalType('강아지')}
            >
              <img
                alt="select-dog"
                src="https://tools.mypetlife.co.kr/static/media/dog_select.f5854006.png"
              />
              <p>강아지</p>
            </div>
            <div
              className={`${
                type === '고양이' ? `select-image-box` : `unselect-image-box`
              }`}
              onClick={handleAnimalType('고양이')}
            >
              <img
                alt="select-cat"
                src="https://tools.mypetlife.co.kr/static/media/cat_select.8ed0546a.png"
              />
              <p>고양이</p>
            </div>
          </div>
        </div>

        <div className="choose-status-wrapper">
          <label className="animal-select-label">반려동물 상태</label>

          <div className="status-radio-button-wrapper">
            <div className="input-radio-wrapper">
              <label
                className={
                  growth === 'child'
                    ? 'selected-input-label'
                    : 'unselected-input-label'
                }
              >
                <input
                  type="radio"
                  name="dogSize"
                  value="성장기"
                  onClick={handleAnimalGrowth('child')}
                />
                성장기
              </label>
            </div>
            <div className="input-radio-wrapper">
              <label
                className={
                  growth === 'adult'
                    ? 'selected-input-label'
                    : 'unselected-input-label'
                }
              >
                <input
                  type="radio"
                  name="dogSize"
                  value="성견/성묘"
                  onClick={handleAnimalGrowth('adult')}
                />
                성견/성묘
              </label>
            </div>
          </div>
        </div>

        {type === '강아지' ? (
          <div className="choose-status-wrapper">
            <label className="animal-select-label">대형견인가요?</label>
            <div className="status-radio-button-wrapper">
              <div className="input-radio-wrapper">
                <label
                  className={
                    isBig ? 'selected-input-label' : 'unselected-input-label'
                  }
                >
                  <input
                    className="checkBox-isBig-dog"
                    type="checkbox"
                    onClick={handleDogSize}
                  />
                  {isBig ? <i className="fas fa-check" /> : <></>}
                  네! 대형견이에요.
                </label>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        <FeedCalorieInput
          feedCalorieInfo={feedCalorieInfo}
          onInputfeedCalorieInfo={onInputfeedCalorieInfo}
        />
        <SubmitButton />
      </form>
    </div>
  )
}

export default FeedCalorieForm
