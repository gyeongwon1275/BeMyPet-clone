import * as React from 'react'
import SubmitButton from '../UIcomponents/SubmitButton'
import FeedCalorieInput from './FeedCalorieInput'

function FeedCalorieForm() {
  return (
    <div className="calculator-container">
      <form className="calculator-form">
        <div className="select-animal-wrapper">
          <label className="animal-select-label">반려동물 종류</label>
          <div className="select-image-wrapper">
            <div
              className={`unselect-image-box`}
              //   onClick={handleAnimalType('강아지')}
            >
              <img
                alt="select-dog"
                src="https://tools.mypetlife.co.kr/static/media/dog_select.f5854006.png"
              />
              <p>강아지</p>
            </div>
            <div
              className={`unselect-image-box`}
              //   onClick={handleAnimalType('고양이')}
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
              <label className="unselected-input-label">
                <input type="radio" name="dogSize" value="소형" />
                성장기
              </label>
            </div>
            <div className="input-radio-wrapper">
              <label className="unselected-input-label">
                <input type="radio" name="dogSize" value="중형" />
                성견/성묘
              </label>
            </div>
          </div>
        </div>
        <FeedCalorieInput />
        <SubmitButton />
      </form>
    </div>
  )
}

export default FeedCalorieForm
