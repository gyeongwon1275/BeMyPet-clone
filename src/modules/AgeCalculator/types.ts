import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
export type animalType = 'dog' | 'cat' | null
export type animalSizeType = '소형' | '중형' | '대형' | null
export interface AnimalAgeState {
  type: animalType
  size?: animalSizeType
  date: Date | null
  result: boolean
  age: number | null
}

export type CalculatorAction = ActionType<typeof actions>
