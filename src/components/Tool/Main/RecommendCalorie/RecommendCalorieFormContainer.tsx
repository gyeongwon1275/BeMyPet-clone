import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../../modules'
import {
  RecommendCalorieState,
  inputRecommendCalorieInfo,
} from '../../../../modules/calculator/index'
import RecommendCalorieForm from './RecommendCalorieForm'

function RecommendCalorieFormContainer() {
  const { type, weight, result, status, isStatusOpen } = useSelector(
    (state: RootState) => state.calculator.recommendCalorie
  )

  const recommendCalorieInfo = { type, weight, result, status, isStatusOpen }
  const dispatch = useDispatch()
  const onInputRecommendCalorieInfo = (
    recommendCalorieObject: RecommendCalorieState
  ) => {
    dispatch(inputRecommendCalorieInfo(recommendCalorieObject))
  }
  return (
    <RecommendCalorieForm
      recommendCalorieInfo={recommendCalorieInfo}
      onInputRecommendCalorieInfo={onInputRecommendCalorieInfo}
    />
  )
}

export default RecommendCalorieFormContainer
