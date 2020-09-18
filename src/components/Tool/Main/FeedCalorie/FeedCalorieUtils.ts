import {
  animalType,
  FeedCalorieNutrientInfo,
  FeedCalorieState,
  AnimalGrowthType,
} from '../../../../modules/calculator'

export interface FeedCalorieFormProps {
  feedCalorieInfo: FeedCalorieState
  onInputfeedCalorieInfo: (animalBmiObject: FeedCalorieState) => void
}

export interface FeedCalorieData {
  type: animalType
  growth: AnimalGrowthType
  isBig: boolean
  nutrient: FeedCalorieNutrientInfo
}
