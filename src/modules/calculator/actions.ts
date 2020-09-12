import { createAction } from 'typesafe-actions'
import { AgeState, BmiState, AnimalState } from './types'

export const INPUT_AGEINFO = 'calculator/INPUT_AGEINFO'
export const INPUT_BMIINFO = 'calculator/INPUT_BMIINFO'
export const inputAgeInfo = createAction(INPUT_AGEINFO)<AgeState>()
export const inputBmiInfo = createAction(INPUT_BMIINFO)<BmiState>()
