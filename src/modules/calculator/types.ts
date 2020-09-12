import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
export type animalType = 'dog' | 'cat' | null
export type animalSizeType = '소형' | '중형' | '대형' | null
export type animalBmiType = 1 | 2 | 3 | 4 | 5 | null
export interface BmiState {
  type: animalType
  bmi: animalBmiType
  result: boolean
}
export interface AgeState {
  type: animalType
  size?: animalSizeType
  date: Date | null
  result: boolean
  age: number | null
}
export interface AnimalState {
  age: AgeState
  bmi: BmiState
}

export type CalculatorAction = ActionType<typeof actions>
