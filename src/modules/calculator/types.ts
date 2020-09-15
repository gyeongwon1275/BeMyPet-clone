import { ActionType } from 'typesafe-actions'
import {
  CatStatus,
  DogStatus,
} from '../../components/Tool/Main/RecommendCalorie/PetStatusUtils'
import * as actions from './actions'
export type animalType = '강아지' | '고양이' | null
export type animalSizeType = '소형' | '중형' | '대형' | null
export type animalBmiType = 1 | 2 | 3 | 4 | 5 | null
export type AnimalGrowth = 'child' | 'adult' | null
export type NutrientType =
  | 'protein' // 조단백질
  | 'fat' // 조지방
  | 'fiber' // 조섬유
  | 'ash' // 조회분
  | 'calcium' // 칼슘
  | 'phosphorus' // 인
  | 'moisture' //
  | 'carbohydrate'
  | 'taurine' //
/* 
 protein: number;
  fat: number;
  fiber: number;
  ash: number;
  calcium: number;
  phosphorus: number;
  moisture: number;
  carbohydrate: number;
  animal?: AnimalKind;
  growth?: AnimalGrowth;
  isBig?: boolean;
  taurine?: number;
}


*/

/* 
export enum Nutrient {
  Protein = "조단백질",
  Fat = "조지방",
  Calcium = "칼슘",
  Phosphorus = "인",
  CalciumPerPhosphorus = "칼슘:인",
  Taurine = "타우린",
  Carbohydrate = "탄수화물",
  Fiber = "조섬유",
  Ash = "조회분",
  Moisture = "수분",
}
*/
export interface FeedCalorieNutrientInfo {
  protein: number | null // 조단백질
  fat: number | null // 조지방
  fiber: number | null // 조섬유
  ash: number | null // 조회분
  calcium: number | null // 칼슘
  phosphorus: number | null // 인
  moisture: number | null //
  carbohydrate: number | null
  taurine?: number | null // 타우린
}

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
  recommendCalorie: RecommendCalorieState
  feedCalorie: FeedCalorieState
}

export interface RecommendCalorieState {
  type: animalType
  weight: number | null
  status: DogStatus | CatStatus | null
  isStatusOpen: boolean
  result: boolean
}
export interface FeedCalorieState {
  type: animalType
  growth: AnimalGrowth
  isBig: boolean
  nutrient: FeedCalorieNutrientInfo
  result: boolean
}

export type CalculatorAction = ActionType<typeof actions>
