import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../../modules'
import { BmiState, inputBmiInfo } from '../../../../modules/calculator/index'
import BmiForm from './BmiForm'
function BmiFormContainer() {
  const { type, result, bmi } = useSelector(
    (state: RootState) => state.calculator.bmi
  )

  const animalBmiInfo = { type, result, bmi }
  const dispatch = useDispatch()
  const onInputBmiInfo = (animalBmiObject: BmiState) => {
    dispatch(inputBmiInfo(animalBmiObject))
  }
  return (
    <BmiForm animalBmiInfo={animalBmiInfo} onInputBmiInfo={onInputBmiInfo} />
  )
}

export default BmiFormContainer
