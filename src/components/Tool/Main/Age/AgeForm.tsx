import * as React from 'react'
import {
  AnimalAgeState,
  animalType,
} from '../../../../modules/AgeCalculator/index'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

interface AgeFormProps {
  animalAgeInfo: AnimalAgeState
  onInputAgeInfo: (ageInfoObject: AnimalAgeState) => void
}

export function AgeForm({ animalAgeInfo, onInputAgeInfo }: AgeFormProps) {
  const animalObjct = animalAgeInfo
  const { type, size, date } = animalAgeInfo
  // TODO
  /* 

  1> 강아지, 고양이 선택 

  => 강아지 선택했을 때 redux 에서 상태가 변경 
  => 변경된 것을 다시 받아서 렌더링 => div class 를 type 과 연동을 시켜놓음 
  // 1> 아무것도 선택 안함
  // 2> 강아지선택 
  // 3> 고양이 선택 
  // type==='dog'? 강아지 노란색
  결과보기 onClick => 함수에서 계산하고 계산되면 결과값을 dispatch 
  선택하면 selected box 로 변경
  */

  // 리덕스 상태를 변경시키면 리렌더링만 안되고 상태는 변경됨
  //
  const handleAnimalType = React.useCallback(
    (type: animalType) => () => {
      animalObjct['type'] = type
      onInputAgeInfo(animalObjct)
    },
    [animalAgeInfo]
  )

  const handleDate = React.useCallback(
    (date: Date | null) => {
      animalObjct['date'] = date
      onInputAgeInfo(animalObjct)
    },
    [animalAgeInfo]
  )

  const handleDogSize = React.useCallback(
    (size: string | null) => () => {
      animalObjct['size'] = size
      onInputAgeInfo(animalObjct)
    },
    [animalAgeInfo]
  )
  return (
    <div className="age-calculator-container">
      <form className="age-wrapper-form">
        <div className="select-animal-wrapper">
          <label className="animal-select-label">반려동물 종류</label>
          <div className="select-image-wrapper">
            <div
              className={`${
                type === 'dog' ? `select-image-box` : `unselect-image-box`
              }`}
              onClick={handleAnimalType('dog')}
            >
              <img
                alt="select-dog"
                src="https://tools.mypetlife.co.kr/static/media/dog_select.f5854006.png"
              />
              <p>강아지</p>
            </div>
            <div
              className={`${
                type === 'cat' ? `select-image-box` : `unselect-image-box`
              }`}
              onClick={handleAnimalType('cat')}
            >
              <img
                alt="select-cat"
                src="https://tools.mypetlife.co.kr/static/media/cat_select.8ed0546a.png"
              />
              <p>고양이</p>
            </div>
          </div>
        </div>
        <div className="select-date-wrapper">
          <label className="animal-select-label">생년월일</label>
          <div className="date-input-wrapper">
            <div className="date-input-icon">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none">
                  <path
                    d="M0 0H1260V1948H0z"
                    fill="transition"
                    transform="translate(-100 -1824)"
                  ></path>
                  <path
                    d="M117.657 1827c.39 0 .713.29.765.667l.007.104v1.298c1.441.13 2.571 1.341 2.571 2.817v10.285c0 1.563-1.266 2.829-2.829 2.829H105.83c-1.563 0-2.829-1.266-2.829-2.829v-10.285c0-1.476 1.13-2.687 2.571-2.817v-1.298c0-.426.346-.771.772-.771.39 0 .713.29.764.667l.007.104v1.286h4.114v-1.286c0-.39.29-.713.667-.764L112 1827c.39 0 .713.29.764.667l.007.104v1.286h4.114v-1.286c0-.39.29-.713.667-.764l.105-.007zm1.8 8.228h-14.915v6.943c0 .71.576 1.286 1.287 1.286h12.342c.71 0 1.286-.575 1.286-1.286v-6.943zm-1.286-4.628H105.83c-.71 0-1.286.576-1.286 1.286l-.001 1.799h14.915v-1.8c0-.71-.575-1.285-1.286-1.285z"
                    fill="#cfcece"
                    transform="translate(-100 -1824)"
                  ></path>
                </g>
              </svg>
            </div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                value={date}
                onChange={handleDate}
                format="yyyy년 MM월 dd일"
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
        </div>
        {type === 'dog' ? (
          <div className="select-dogSize-wrapper">
            <label className="animal-select-label">강아지 크기</label>
            <div className="dogSize-radio-button-wrapper">
              <div className="input-radio-wrapper">
                <label
                  className={
                    size === '소형' ? 'selected-dogSize' : 'unselected-dogSize'
                  }
                >
                  <input
                    type="radio"
                    name="dogSize"
                    value="소형"
                    onClick={handleDogSize('소형')}
                  />
                  소형견
                </label>
              </div>
              <div className="input-radio-wrapper">
                <label
                  className={
                    size === '중형' ? 'selected-dogSize' : 'unselected-dogSize'
                  }
                >
                  <input
                    type="radio"
                    name="dogSize"
                    value="중형"
                    onClick={handleDogSize('중형')}
                  />
                  중형견
                </label>
              </div>
              <div className="input-radio-wrapper">
                <label
                  className={
                    size === '대형' ? 'selected-dogSize' : 'unselected-dogSize'
                  }
                >
                  <input
                    type="radio"
                    name="dogSize"
                    value="대형"
                    onClick={handleDogSize('대형')}
                  />
                  대형견
                </label>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}

        <div className="age-result-button-wrapper">
          <button type="submit">결과보기</button>
        </div>
      </form>
    </div>
  )
}

export default AgeForm
