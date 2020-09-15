import * as React from 'react'
import InputContainer from '../UIcomponents/InputContainer'
import { FeedCalorieFormProps } from './FeedCalorieUtils'
import produce from 'immer'
import {
  FeedCalorieNutrientInfo,
  NutrientType,
} from '../../../../modules/calculator'
function FeedCalorieInput({
  feedCalorieInfo,
  onInputfeedCalorieInfo,
}: FeedCalorieFormProps) {
  const { type, growth, isBig, nutrient, result } = feedCalorieInfo

  const handleNutrient = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let nutrientInfo = produce(feedCalorieInfo, (draft) => {
        const key = e.target.name as NutrientType
        draft.nutrient[key] = Number(e.target.value)
      })

      onInputfeedCalorieInfo(nutrientInfo)
    },
    [feedCalorieInfo]
  )
  /* 
  
  TODO 

  e.target.name 키에 e.target.value 를 넣는다. 
  */
  return (
    <>
      <InputContainer
        label="조단백질"
        value={`${nutrient.protein}`}
        unit="%"
        placeholder="0.00"
        type="number"
        name="protein"
        onChange={handleNutrient}
      />

      <InputContainer
        label="조지방"
        value={`${nutrient.fat}`}
        unit="%"
        placeholder="0.00"
        type="number"
        name="fat"
        onChange={handleNutrient}
      />

      <InputContainer
        label="조섬유"
        value={`${nutrient.fiber}`}
        unit="%"
        placeholder="0.00"
        type="number"
        name="fiber"
        onChange={handleNutrient}
      />

      <InputContainer
        label="조회분"
        value={`${nutrient.ash}`}
        unit="%"
        placeholder="0.00"
        type="number"
        name="ash"
        onChange={handleNutrient}
      />

      <InputContainer
        label="칼슘"
        value={`${nutrient.calcium}`}
        unit="%"
        placeholder="0.00"
        type="number"
        name="calcium"
        onChange={handleNutrient}
      />

      <InputContainer
        label="인"
        value={`${nutrient.phosphorus}`}
        unit="%"
        placeholder="0.00"
        type="number"
        name="phosphorus"
        onChange={handleNutrient}
      />

      <InputContainer
        label="수분"
        value={`${nutrient.moisture}`}
        unit="%"
        placeholder="0.00"
        type="number"
        name="moisture"
        onChange={handleNutrient}
      />
      {type === '고양이' ? (
        <InputContainer
          label="타우린"
          value={`${nutrient.taurine}`}
          unit="%"
          placeholder="0.00"
          type="number"
          name="taurine"
          onChange={handleNutrient}
        />
      ) : (
        <></>
      )}
    </>
  )
}

export default FeedCalorieInput
