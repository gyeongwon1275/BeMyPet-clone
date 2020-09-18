import { createReducer } from 'typesafe-actions'
import produce from 'immer'
import {
  AnimalState,
  CalculatorAction,
  AgeState,
  BmiState,
  RecommendCalorieState,
  FeedCalorieState,
} from './types'
import {
  INPUT_AGEINFO,
  INPUT_BMIINFO,
  INPUT_FEED_CALORIEINFO,
  INPUT_RECOMMEND_CALORIEINFO,
} from './actions'

/* 
TODO 

1> 강아지, 고양이 선택 -> type 

1-1> 강아지면 대형견인가요? 선택지 open 

2> 반려동물상태 -> status 

3> 각종영양소 입력 

4> 결과보기 

상태받아서 입력 안되어 있는 key fiter 로 받아서 

alert `${key1,key2}` 로 띄우기 

*/

export const initialAgeState = {
  type: null,
  size: null,
  date: null,
  result: false,
  age: null,
}
export const initialBmiState = { type: null, bmi: null, result: false }
export const initialRecommendCalorie = {
  type: null,
  weight: null,
  result: false,
  status: null,
  isStatusOpen: false,
}
export const initialFeedCalorieState = {
  type: null,
  growth: null,
  isBig: false,
  nutrient: {
    protein: null, // 조단백질
    fat: null, // 조지방
    fiber: null, // 조섬유
    ash: null, // 조회분
    calcium: null, // 칼슘
    phosphorus: null, // 인
    moisture: null, //
    carbohydrate: null,
    taurine: null,
  },
  result: false,
}
const initialState: AnimalState = {
  age: initialAgeState,
  bmi: initialBmiState,
  recommendCalorie: initialRecommendCalorie,
  feedCalorie: initialFeedCalorieState,
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

  [INPUT_FEED_CALORIEINFO]: (state, action: CalculatorAction) =>
    produce(state, (draft) => {
      draft.feedCalorie = action.payload as FeedCalorieState
    }),
})
