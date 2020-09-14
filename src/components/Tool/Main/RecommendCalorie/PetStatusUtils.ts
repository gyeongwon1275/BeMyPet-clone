import {
  animalType,
  RecommendCalorieState,
} from '../../../../modules/calculator'

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

export default class RecommendCalorieCalculator {
  type: animalType
  weight: number | null
  status: DogStatus | CatStatus | null

  constructor(
    type: animalType,
    weight: number | null,
    status: DogStatus | CatStatus | null
  ) {
    this.type = type
    this.weight = weight
    this.status = status
  }

  get statusMultiplier(): number {
    let dogStatus: DogStatus
    let catStatus: CatStatus
    if (this.type === '강아지') {
      dogStatus = this.status as DogStatus

      if (dogStatus === '성장기 (4개월미만)') {
        return 3
      } else if (dogStatus === '성장기 (4-12개월)') {
        return 2
      } else if (dogStatus === '미중성 성견') {
        return 1.8
      } else if (dogStatus === '중성화 완료 성견') {
        return 1.6
      } else if (dogStatus === '체중 감량 필요 성견') {
        return 1
      } else if (dogStatus === '체중 증량 필요 성견') {
        return 1.7
      } else if (dogStatus === '가벼운 활동량의 사역견') {
        return 2
      } else if (dogStatus === '중간 활동량의 사역견') {
        return 3
      } else if (dogStatus === '높은 활동량의 사역견') {
        return 6
      } else {
        return 0
      }
    } else if (this.type === '고양이') {
      catStatus = this.status as CatStatus

      if (catStatus === '유아기 (4개월미만)') {
        return 3
      } else if (catStatus === '고속 성장기 (4-6개월)') {
        return 2.5
      } else if (catStatus === '고속 성장기 (7-12개월)') {
        return 2.0
      } else if (catStatus === '중성화 완료 성묘') {
        return 1.2
      } else if (catStatus === '일반 성묘') {
        return 1.4
      } else if (catStatus === '체중 감량 필요 성묘') {
        return 0.8
      } else if (catStatus === '운동량이 많은 성묘') {
        return 1.6
      } else if (catStatus === '노묘 (n세 이상)') {
        return 0.7
      } else {
        return 0
      }
    } else {
      return 0
    }
  }

  // 휴식기 에너지 요구량 (= 기초대사량), Resting Energy Requirement
  get BasalMetabolism(): number {
    return !!this.weight ? 70 * 0.75 * this.weight : 0
  }

  // 최소 에너지 요구량(= 권장대사량 ), Minimum Energy Requirement
  get RecommendedMetabolism(): number {
    return this.BasalMetabolism * this.statusMultiplier
  }
}
