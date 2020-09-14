import { createAction } from 'typesafe-actions'
import { AgeState, BmiState, RecommendCalorieState } from './types'

export const INPUT_AGEINFO = 'calculator/INPUT_AGEINFO'
export const INPUT_BMIINFO = 'calculator/INPUT_BMIINFO'
export const INPUT_RECOMMEND_CALORIEINFO = 'calculator/RECOMMEND_CALORIEINFO'

export const inputAgeInfo = createAction(INPUT_AGEINFO)<AgeState>()
export const inputBmiInfo = createAction(INPUT_BMIINFO)<BmiState>()
export const inputRecommendCalorieInfo = createAction(
  INPUT_RECOMMEND_CALORIEINFO
)<RecommendCalorieState>()
