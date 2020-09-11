import { ActionType } from 'typesafe-actions'
import * as actions from './actions'
export type animalType = 'dog' | 'cat'
export interface AgeInfo {
  type: animalType | null
  size?: string | null
  date: Date | null
}
export interface AnimalAgeState {
  type: animalType | null
  size?: string | null
  date: Date | null
}

export type CalculatorAction = ActionType<typeof actions>
