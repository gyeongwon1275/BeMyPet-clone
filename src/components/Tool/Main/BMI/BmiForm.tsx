import * as React from 'react'
import { animalType } from '../../../../modules/calculator'
import BmiSelect from './BmiSelect'
import { BmiFormProps } from './BmiType'

function BmiForm({ animalBmiInfo, onInputBmiInfo }: BmiFormProps) {
  const bmiInfoObjct = animalBmiInfo
  const handleAnimalType = React.useCallback(
    (type: animalType) => () => {
      bmiInfoObjct.type = type
      bmiInfoObjct.result = false
      onInputBmiInfo(bmiInfoObjct)
    },
    [animalBmiInfo]
  )

  const getAnimalBmi = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      bmiInfoObjct.result = true
      onInputBmiInfo(bmiInfoObjct)
    },
    [animalBmiInfo]
  )

  return (
    <div className="calculator-container">
      <form className="calculator-form" onSubmit={getAnimalBmi}>
        <div className="select-animal-wrapper">
          <label className="animal-select-label">반려동물 종류</label>
          <div className="select-image-wrapper">
            <div
              className={`${
                animalBmiInfo.type === '강아지'
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
                animalBmiInfo.type === '고양이'
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
        {animalBmiInfo.type ? (
          <BmiSelect
            animalBmiInfo={animalBmiInfo}
            onInputBmiInfo={onInputBmiInfo}
          />
        ) : (
          <></>
        )}

        <div className="result-button-wrapper">
          <button type="submit">결과보기</button>
        </div>
      </form>
    </div>
  )
}

export default BmiForm
