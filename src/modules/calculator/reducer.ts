import { createReducer } from 'typesafe-actions'
import produce from 'immer'
import {
  AnimalState,
  CalculatorAction,
  AgeState,
  BmiState,
  RecommendCalorieState,
} from './types'
import {
  INPUT_AGEINFO,
  INPUT_BMIINFO,
  INPUT_RECOMMEND_CALORIEINFO,
} from './actions'
const initialState: AnimalState = {
  age: { type: null, size: null, date: null, result: false, age: null },
  bmi: { type: null, bmi: null, result: false },
  recommendCalorie: {
    type: null,
    weight: null,
    result: false,
    status: null,
    isStatusOpen: false,
  },
}

export default createReducer<AnimalState>(initialState, {
  [INPUT_AGEINFO]: (state, action: CalculatorAction) =>
    produce(state, (draft) => {
      draft.age = action.payload as AgeState
    }),

  [INPUT_BMIINFO]: (state, action: CalculatorAction) =>
    produce(state, (draft) => {
      draft.bmi = action.payload as BmiState
    }),
  [INPUT_RECOMMEND_CALORIEINFO]: (state, action: CalculatorAction) =>
    produce(state, (draft) => {
      draft.recommendCalorie = action.payload as RecommendCalorieState
    }),
})
