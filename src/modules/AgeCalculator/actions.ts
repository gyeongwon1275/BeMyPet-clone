import { createAction } from 'typesafe-actions'
import { AgeInfo } from './types'

export const INPUT_AGEINFO = 'AgeCalculator/INPUT_AGEINFO'
export const inputAgeInfo = createAction(INPUT_AGEINFO)<AgeInfo>()
