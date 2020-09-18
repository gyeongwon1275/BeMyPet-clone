import * as React from 'react'
import {
  animalType,
  animalSizeType,
  AgeState,
} from '../../../../modules/calculator/index'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import AgeUtils from './AgeUtils'
import SubmitButton from '../UIcomponents/SubmitButton'
import { initialAgeState } from '../../../../modules/calculator/reducer'
interface AgeFormProps {
  animalAgeInfo: AgeState
  onInputAgeInfo: (ageInfoObject: AgeState) => void
}

function AgeForm({ animalAgeInfo, onInputAgeInfo }: AgeFormProps) {
  const ageInfoObjct = animalAgeInfo

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

  React.useEffect(() => {
    onInputAgeInfo(initialAgeState)
  }, [])
  const handleAnimalType = React.useCallback(
    (type: animalType) => () => {
      ageInfoObjct.type = type
      ageInfoObjct.size = null
      ageInfoObjct.result = false
      onInputAgeInfo(ageInfoObjct)
    },
    [animalAgeInfo]
  )

  const handleDate = React.useCallback(
    (date: Date | null) => {
      ageInfoObjct['date'] = date
      onInputAgeInfo(ageInfoObjct)
    },
    [animalAgeInfo]
  )

  const handleDogSize = React.useCallback(
    (size: animalSizeType | null) => () => {
      ageInfoObjct['size'] = size
      onInputAgeInfo(ageInfoObjct)
    },
    [animalAgeInfo]
  )

  const getAnimalAge = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (!animalAgeInfo.type || !animalAgeInfo.date) {
        alert('값을 입력하거나 선택해주셔야 합니다.')
      }

      if (animalAgeInfo.type === '강아지' && !animalAgeInfo.size) {
        alert('강아지 크기를 선택해주셔야 합니다.')
      }

      if (animalAgeInfo.size) {
        let dogAge = new AgeUtils(
          animalAgeInfo.type,
          animalAgeInfo.date,
          null,
          animalAgeInfo.size
        ).getDogAge() as number

        ageInfoObjct.age = dogAge
        ageInfoObjct.result = true
        onInputAgeInfo(ageInfoObjct)
      } else {
        ageInfoObjct['age'] = new AgeUtils(
          animalAgeInfo.type,
          animalAgeInfo.date,
          null,
          null
        ).getCatAge() as number
        ageInfoObjct.result = true
        onInputAgeInfo(ageInfoObjct)
      }
    },
    [animalAgeInfo]
  )
  return (
    <div className="calculator-container">
      <form className="calculator-form" onSubmit={getAnimalAge}>
        <div className="select-animal-wrapper">
          <label className="animal-select-label">반려동물 종류</label>
          <div className="select-image-wrapper">
            <div
              className={`${
                animalAgeInfo.type === '강아지'
                  ? `select-image-box`
                  : `unselect-image-box`
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
                animalAgeInfo.type === '고양이'
                  ? `select-image-box`
                  : `unselect-image-box`
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
        <div className="input-container">
          <label className="animal-select-label">생년월일</label>
          <div className="input-wrapper">
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
                value={animalAgeInfo.date}
                onChange={handleDate}
                format="yyyy년 MM월 dd일"
                InputProps={{
                  placeholder: 'xxxx년 xx월 xx일',
                  disableUnderline: true,
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
        </div>
        {animalAgeInfo.type === '강아지' ? (
          <div className="choose-status-wrapper">
            <label className="animal-select-label">강아지 크기</label>
            <div className="status-radio-button-wrapper">
              <div className="input-radio-wrapper">
                <label
                  className={
                    animalAgeInfo.size === '소형'
                      ? 'selected-input-label'
                      : 'unselected-input-label'
                  }
                >
                  <input
                    type="radio"
                    name="dogSize"
                    value="소형"
                    onClick={handleDogSize('소형')}
                  />
                  소형
                </label>
              </div>
              <div className="input-radio-wrapper">
                <label
                  className={
                    animalAgeInfo.size === '중형'
                      ? 'selected-input-label'
                      : 'unselected-input-label'
                  }
                >
                  <input
                    type="radio"
                    name="dogSize"
                    value="중형"
                    onClick={handleDogSize('중형')}
                  />
                  중형
                </label>
              </div>
              <div className="input-radio-wrapper">
                <label
                  className={
                    animalAgeInfo.size === '대형'
                      ? 'selected-input-label'
                      : 'unselected-input-label'
                  }
                >
                  <input
                    type="radio"
                    name="dogSize"
                    value="대형"
                    onClick={handleDogSize('대형')}
                  />
                  대형
                </label>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
        <SubmitButton />
      </form>
    </div>
  )
}

export default AgeForm
