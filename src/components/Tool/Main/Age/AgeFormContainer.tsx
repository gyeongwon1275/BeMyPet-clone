import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../../modules'
import { inputAgeInfo, AgeState } from '../../../../modules/calculator/index'
import AgeForm from './AgeForm'

function AgeFormContainer() {
  const { type, size, date, result, age } = useSelector(
    (state: RootState) => state.calculator.age
  )
  const animalAgeInfo = { type, size, date, result, age }
  const dispatch = useDispatch()

  const onInputAgeInfo = (ageInfoObject: AgeState) => {
    dispatch(inputAgeInfo(ageInfoObject))
  }
  return (
    <AgeForm animalAgeInfo={animalAgeInfo} onInputAgeInfo={onInputAgeInfo} />
  )
}

export default AgeFormContainer
