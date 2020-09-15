import * as React from 'react'
import FeedCalorieForm from './FeedCalorieForm'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../../../modules'
import {
  FeedCalorieState,
  inputFeedCalorieInfo,
} from '../../../../modules/calculator'

function FeedCalorieFormContainer() {
  const { type, growth, isBig, nutrient, result } = useSelector(
    (state: RootState) => state.calculator.feedCalorie
  )

  const feedCalorieInfo = { type, growth, isBig, nutrient, result }
  const dispatch = useDispatch()
  const onInputfeedCalorieInfo = (feedCalorieObject: FeedCalorieState) => {
    dispatch(inputFeedCalorieInfo(feedCalorieObject))
  }
  return (
    <FeedCalorieForm
      feedCalorieInfo={feedCalorieInfo}
      onInputfeedCalorieInfo={onInputfeedCalorieInfo}
    />
  )
}

export default FeedCalorieFormContainer
