import { FeedCalorieState } from '../../../../modules/calculator'

export interface FeedCalorieFormProps {
  feedCalorieInfo: FeedCalorieState
  onInputfeedCalorieInfo: (animalBmiObject: FeedCalorieState) => void
}
