import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../../modules'
import {
  inputAgeInfo,
  AnimalAgeState,
} from '../../../../modules/AgeCalculator/index'
import AgeForm from './AgeForm'

function AgeFormContainer() {
  const { type, size, date } = useSelector(
    (state: RootState) => state.AgeCalculator
  )
  const animalAgeInfo = { type, size, date }
  const dispatch = useDispatch()

  const onInputAgeInfo = (ageInfoObject: AnimalAgeState) => {
    dispatch(inputAgeInfo(ageInfoObject))
  }
  return (
    <AgeForm animalAgeInfo={animalAgeInfo} onInputAgeInfo={onInputAgeInfo} />
  )
}

export default AgeFormContainer
