import * as React from 'react'
import { animalType } from '../../../../modules/calculator'
import './RecommendCalorieForm.scss'

import {
  CatStatusArray,
  DogStatusArray,
  RecommendCalorieFormProps,
} from './PetStatusUtils'
import PetStatusChoiceItem from './PetStatusChoiceItem'
import InputContainer from '../UIcomponents/InputContainer'
import SubmitButton from '../UIcomponents/SubmitButton'

function RecommendCalorieForm({
  recommendCalorieInfo,
  onInputRecommendCalorieInfo,
}: RecommendCalorieFormProps) {
  const recommendCalorieObjct = recommendCalorieInfo
  const { type, isStatusOpen, status } = recommendCalorieInfo
  const handleAnimalType = React.useCallback(
    (type: animalType) => () => {
      recommendCalorieObjct.type = type
      recommendCalorieObjct.result = false
      recommendCalorieObjct.status = null
      onInputRecommendCalorieInfo(recommendCalorieObjct)
    },
    [recommendCalorieInfo]
  )

  const getRecommendCalorie = React.useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      recommendCalorieObjct.result = true
      onInputRecommendCalorieInfo(recommendCalorieObjct)
    },
    [recommendCalorieInfo]
  )

  const handleWeight = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let weight = Number(e.target.value)
      if (e.target.value.length > 4) {
        weight = Number(e.target.value.slice(0, 4))
      }
      recommendCalorieObjct.weight = weight
      onInputRecommendCalorieInfo(recommendCalorieObjct)
    },
    [recommendCalorieInfo]
  )

  const handlePetStatusList = React.useCallback(() => {
    if (type) {
      recommendCalorieObjct.isStatusOpen = !recommendCalorieObjct.isStatusOpen
      onInputRecommendCalorieInfo(recommendCalorieObjct)
    } else {
      alert('반려동물 종류를 선택해주세요!')
    }
  }, [recommendCalorieInfo])

  const renderChoiceList = React.useCallback(() => {
    if (type === '강아지') {
      return DogStatusArray.map((status, index) => (
        <PetStatusChoiceItem
          key={index}
          status={status}
          recommendCalorieInfo={recommendCalorieInfo}
          onInputRecommendCalorieInfo={onInputRecommendCalorieInfo}
        />
      ))
    } else if (type === '고양이') {
      return CatStatusArray.map((status, index) => (
        <PetStatusChoiceItem
          key={index}
          status={status}
          recommendCalorieInfo={recommendCalorieInfo}
          onInputRecommendCalorieInfo={onInputRecommendCalorieInfo}
        />
      ))
    }
  }, [recommendCalorieInfo])
  return (
    <div className="calculator-container">
      <form className="calculator-form" onSubmit={getRecommendCalorie}>
        <div className="select-animal-wrapper">
          <label className="animal-select-label">반려동물 종류</label>
          <div className="select-image-wrapper">
            <div
              className={`${
                recommendCalorieInfo.type === '강아지'
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
                recommendCalorieInfo.type === '고양이'
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
        <InputContainer
          label="반려동물 몸무게"
          value={String(recommendCalorieInfo.weight)}
          unit="kg"
          placeholder="소수점 둘째자리까지 입력가능"
          type="number"
          name="weight"
          onChange={handleWeight}
        />

        <div className="input-container">
          <label className="animal-select-label">반려동물 상태</label>
          {/* 
TODO 
클릭하면 클래스 clicked-status-wrapper 로 변경 
*/}
          <div className="status-choose-wrapper">
            <div
              className={
                isStatusOpen
                  ? 'selected-status-wrapper'
                  : 'unselected-status-wrapper'
              }
              onClick={handlePetStatusList}
            >
              <div>
                <p className={status ? 'status-placeholder' : ''}>
                  {status ? status : '반려동물 상태를 선택해주세요.'}
                </p>
                <i className="fas fa-angle-down"></i>
              </div>
            </div>

            {isStatusOpen ? (
              <div className="choice-list-wrapper">{renderChoiceList()}</div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <SubmitButton />
      </form>
    </div>
  )
}

export default RecommendCalorieForm

/* 
TODO

1> INPUT 에 ONCHANGE 함수 생성 
함수 - 소수점 2째짜리까지만 입력할 수 있도록 지정 

=> clear 

2> 반려동물 상태를 선택 

- 다른 input 이랑 css 는 동일, 
강아지, 고양이 선택안하면 클릭못하게 함 

- type 선택하고 div 클릭하면 아래로 또다른 div 가 나옴 


원래는 선택하는 div 가 있는데 display:none 처리 해놨다가

div 에 onClick 걸어놔서 클릭하면 display:block 처리 

부모 div 는 클릭하면 배경색이랑, 경계선 색 변경 

*/
