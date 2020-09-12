import { createReducer } from 'typesafe-actions'
import produce from 'immer'
import { AnimalState, CalculatorAction, AgeState, BmiState } from './types'
import { INPUT_AGEINFO, INPUT_BMIINFO } from './actions'
const initialState: AnimalState = {
  age: { type: null, size: null, date: null, result: false, age: null },
  bmi: { type: null, bmi: null, result: false },
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
})
