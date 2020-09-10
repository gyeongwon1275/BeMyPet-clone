import { createAction, ActionType, createReducer } from 'typesafe-actions'
import produce from 'immer'
/* 
createStandardAction was renamed to createAction and .map method was removed in favor of simpler redux-actions style API.
*/
// 특정 변수의 값 자체를 타입으로 사용
// const 로 선언했을 때
/* const SELECT_ANIMAL_TYPE = 'calculator/SELECT_ANIMAL_TYPE' as const
const INPUT_DATE = 'calculator/INPUT_DATE' as const
const SELECT_DOG_SIZE = 'calculator/SELECT_DOG_SIZE' as const */
//  SELECT_DOG 를 객체의 속성으로 사용할 때를 대비하여 const 로 액션타입을 선언했음에도
// as const 를 써준다.

const SELECT_ANIMAL_TYPE = 'AgeCalculator/SELECT_ANIMAL_TYPE'
const INPUT_DATE = 'AgeCalculator/INPUT_DATE'
const SELECT_DOG_SIZE = 'AgeCalculator/SELECT_DOG_SIZE'
const INPUT_AGEINFO = 'AgeCalculator/INPUT_AGEINFO'
/* export const selectAnimalType = (type: string) => ({
  type: SELECT_ANIMAL_TYPE,
  payload: type,
})
export const selectDogSize = (size: string) => ({
  type: SELECT_DOG_SIZE,
  payload: size,
})

export const getInputDate = (date: string) => ({
  type: INPUT_DATE,
  payload: date,
})
 */

export type animalType = 'dog' | 'cat'
interface AgeInfo {
  type: animalType | null
  size?: string | null
  date: Date | null
}
// export const selectAnimalType = createAction(SELECT_ANIMAL_TYPE)<string>()
// export const selectDogSize = createAction(INPUT_DATE)<string>()
// export const getInputDate = createAction(SELECT_DOG_SIZE)<string>()
export const inputAgeInfo = createAction(INPUT_AGEINFO)<AgeInfo>()
/* 
ReturnType 함수에서 리턴하는 타입을 가져온다. 
*/
/* type AgeCalculatorAction =
  | ReturnType<typeof selectAnimalType>
  | ReturnType<typeof selectDogSize>
  | ReturnType<typeof getInputDate> */

const actions = { inputAgeInfo }
type CalculatorAction = ActionType<typeof actions>

export interface AnimalAgeState {
  type: animalType | null
  size?: string | null
  date: Date | null
}
const initialState: AnimalAgeState = {
  type: null,
  size: null,
  date: null,
}

/* export default function calculator(
  state: AnimalAgeState = initialState,
  action: CalculatorAction
) {
  switch (action.type) {
    case SELECT_ANIMAL_TYPE:
      return { ...state, type: action.payload }
    case SELECT_DOG_SIZE:
      return { ...state, size: action.payload }
    case INPUT_DATE:
      return { ...state, birthday: action.payload }
    default:
      return state
  }
} */

/* 
TODO 
강아지, 고양이 선택
생년월일 선택 
강아지 크기 선택 

입력받은 생년월일 , 크기 => 계산식 돌리고 계산


*/
export default createReducer<AnimalAgeState>(initialState, {
  [INPUT_AGEINFO]: (state, action: CalculatorAction) =>
    produce(
      state,
      (draft) => action.payload
      // draft = action.payload
      // draft.size = '소형'
    ),

  /*  [INPUT_AGEINFO]: (state, action: CalculatorAction) => ({
    ...state,
    ['size']: '소형',
  }), */
})
