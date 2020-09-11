import { createReducer } from 'typesafe-actions'
import produce from 'immer'
import { AnimalAgeState, CalculatorAction } from './types'
import { INPUT_AGEINFO } from './actions'
const initialState: AnimalAgeState = {
  type: null,
  size: null,
  date: null,
  result: false,
  age: null,
}

export default createReducer<AnimalAgeState>(initialState, {
  [INPUT_AGEINFO]: (state, action: CalculatorAction) =>
    produce(
      state,
      (draft) => action.payload
      // draft = action.payload
      // draft.size = '소형'
    ),
})
