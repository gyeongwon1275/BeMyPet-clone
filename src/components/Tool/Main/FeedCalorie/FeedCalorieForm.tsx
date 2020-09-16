import * as React from 'react'
import { AnimalGrowthType, animalType } from '../../../../modules/calculator'
import SubmitButton from '../UIcomponents/SubmitButton'
import FeedCalorieInput from './FeedCalorieInput'

import { FeedCalorieFormProps } from './FeedCalorieUtils'

function FeedCalorieForm({
  feedCalorieInfo,
  onInputfeedCalorieInfo,
}: FeedCalorieFormProps) {
  const feedCalorieObjct = feedCalorieInfo
  const { type, growth, isBig, nutrient, result } = feedCalorieInfo
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
  return (
    <div className="calculator-container">
      <form className="calculator-form">
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
                    checked={isBig}
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