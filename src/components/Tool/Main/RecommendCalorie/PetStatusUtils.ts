import { RecommendCalorieState } from '../../../../modules/calculator'

export type DogStatus =
  | '성장기 (4개월미만)'
  | '성장기 (4-12개월)'
  | '미중성 성견'
  | '중성화 완료 성견'
  | '체중 감량 필요 성견'
  | '체중 증량 필요 성견'
  | '가벼운 활동량의 사역견'
  | '중간 활동량의 사역견'
  | '높은 활동량의 사역견'

export type CatStatus =
  | '유아기 (4개월미만)'
  | '고속 성장기 (4-6개월)'
  | '고속 성장기 (7-12개월)'
  | '중성화 완료 성묘'
  | '일반 성묘'
  | '체중 감량 필요 성묘'
  | '운동량이 많은 성묘'
  | '노묘 (n세 이상)'

export const DogStatusArray: DogStatus[] = [
  '성장기 (4개월미만)',
  '성장기 (4-12개월)',
  '미중성 성견',
  '중성화 완료 성견',
  '체중 감량 필요 성견',
  '체중 증량 필요 성견',
  '가벼운 활동량의 사역견',
  '중간 활동량의 사역견',
  '높은 활동량의 사역견',
]

export const CatStatusArray: CatStatus[] = [
  '유아기 (4개월미만)',
  '고속 성장기 (4-6개월)',
  '고속 성장기 (7-12개월)',
  '중성화 완료 성묘',
  '일반 성묘',
  '체중 감량 필요 성묘',
  '운동량이 많은 성묘',
  '노묘 (n세 이상)',
]

export interface RecommendCalorieFormProps {
  recommendCalorieInfo: RecommendCalorieState
  onInputRecommendCalorieInfo: (animalBmiObject: RecommendCalorieState) => void
}
