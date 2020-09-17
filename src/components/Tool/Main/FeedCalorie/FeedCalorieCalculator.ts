import {
  Nutrient,
  dogAdultNutrientProfile,
  bigDogGrowthNutrientProfile,
  dogGrowthNutrientProfile,
  catAdultNutrientProfile,
  catGrowthNutrientProfile,
  NutrientData,
} from './nutrientProfile'

import {
  animalType,
  FeedCalorieNutrientInfo,
  FeedCalorieState,
  AnimalGrowthType,
} from '../../../../modules/calculator'
import { FeedCalorieData } from './FeedCalorieUtils'
export default class FeedCalorieCalculator {
  private feedCalorieData: FeedCalorieData
  constructor(feedCalorieData: FeedCalorieData) {
    this.feedCalorieData = feedCalorieData
    //   defaultValues 가 truthy 값이면 update 메서드에 인자로 전달
    // defaultValues 는 FoodCalorieData 객체 형태이어야 함
    // 원래 constructor 에서 해야할 변수초기화 하는 과정을 update 로 빼서 시행
  }

  // 강아지인지 고양이
  get animal(): animalType | undefined {
    return this.feedCalorieData.type
  }

  //   강아지인지 여부 리턴
  get isDog(): boolean {
    return !!this.feedCalorieData.type && this.feedCalorieData.type === '강아지'
  }
  //   고양이인지 여부 리턴
  get isCat(): boolean {
    return !!this.feedCalorieData.type && this.feedCalorieData.type === '고양이'
  }
  // 조단백질 숫자 받아옴
  get protein(): number | null {
    return this.feedCalorieData.nutrient.protein
  }
  // 조지방 숫자 받아옴
  get fat(): number | null {
    return this.feedCalorieData.nutrient.fat
  }
  // 조섬유 숫자 받아옴
  get fiber(): number | null {
    return this.feedCalorieData.nutrient.fiber
  }
  // 조회질 숫자 받아옴
  get ash(): number | null {
    return this.feedCalorieData.nutrient.ash
  }
  // 칼슘 숫자 받아옴
  get calcium(): number | null {
    return this.feedCalorieData.nutrient.calcium
  }
  // 인 숫자 받아옴
  get phosphorus(): number | null {
    return this.feedCalorieData.nutrient.phosphorus
  }
  // 수분 숫자 받아옴
  get moisture(): number | null {
    return this.feedCalorieData.nutrient.moisture
  }
  // XXX 탄수화물을 입력하는게 없음..
  get carbohydrate(): number | null {
    return this.feedCalorieData.nutrient.carbohydrate
  }

  get growth(): AnimalGrowthType {
    return this.feedCalorieData.growth
  }
  // 어린이인지
  get isGrow(): boolean {
    return (
      !!this.feedCalorieData.growth && this.feedCalorieData.growth === 'child'
    )
  }
  // 성인인지
  get isAdult(): boolean {
    return (
      !!this.feedCalorieData.growth && this.feedCalorieData.growth === 'adult'
    )
  }

  // 대형견인지
  get isBig(): boolean {
    return this.feedCalorieData.isBig
  }
  // 타우린
  get taurine(): number {
    return this.feedCalorieData.nutrient.taurine!
  }
  // 수분 percent
  get moisturePer(): number {
    return this.feedCalorieData.nutrient.moisture! / 100
  }
  // 수분 없는 조단백질 리턴
  //
  get dmProtein(): number {
    return this.feedCalorieData.nutrient.protein! / (1 - this.moisturePer)
  }
  // 수분 없는 조지방 리턴
  get dmFat(): number {
    return this.feedCalorieData.nutrient.fat! / (1 - this.moisturePer)
  }

  get dmFiber(): number {
    return this.feedCalorieData.nutrient.fiber! / (1 - this.moisturePer)
  }

  get dmAsh(): number {
    return this.feedCalorieData.nutrient.ash! / (1 - this.moisturePer)
  }

  get dmCalcium(): number {
    return this.feedCalorieData.nutrient.calcium! / (1 - this.moisturePer)
  }

  get dmPhosphorus(): number {
    return this.feedCalorieData.nutrient.phosphorus! / (1 - this.moisturePer)
  }
  // 단백질, 지방, ash 로 탄수화물 값 추론
  get dmCarbohydrate(): number {
    return 100 - this.dmProtein - this.dmFat - this.dmAsh
  }

  get dmProteinCalorie(): number {
    return Math.round(this.dmProtein * 3.5)
  }

  get dmFatCalorie(): number {
    return Math.round(this.dmFat * 8.5)
  }

  get dmCarbohydrateCalorie(): number {
    return Math.round(this.dmCarbohydrate * 3.5)
  }
  // XXX 칼슘:인 1 이어야 함
  get calciumPerPhosphorus(): number {
    return (
      this.feedCalorieData.nutrient.calcium! /
      this.feedCalorieData.nutrient.phosphorus!
    )
  }
  // 조단백질 + 조지방+ 탄수화물 칼로리 의 합
  get totalCalories(): number {
    return Math.round(
      this.dmProteinCalorie + this.dmFatCalorie + this.dmCarbohydrateCalorie
    )
  }

  public getAAFCOResult = () => {
    const maxValues: Nutrient[] = []
    const minValues: Nutrient[] = []
    const suitableValues: Nutrient[] = []
    let profile = null

    if (this.isDog) {
      profile = this.isAdult // 성견이면 profile 에 dogAdultNutrientProfile 를 넣고
        ? dogAdultNutrientProfile //
        : this.isBig // 대형견이면   profile 에 bigDogGrowthNutrientProfile
        ? bigDogGrowthNutrientProfile
        : dogGrowthNutrientProfile // 대형견아니면  profile 에 dogGrowthNutrientProfile
    } else if (this.isCat) {
      profile = this.isAdult
        ? catAdultNutrientProfile
        : catGrowthNutrientProfile
    }

    // XXX 충족하는 영양소의 종류, 최소값 보다 작은 영양소의 종류
    // 최대값을 넘어선 영양소의 종류를 배열에 넣어서 리턴
    // 충족하면 초록색, 아니면 빨간색
    if (profile) {
      profile.forEach((nutrientItem: NutrientData) => {
        // profile 에 있는 영양소 key 에 있는 값 을 value 에
        const value = this[nutrientItem.key as keyof FeedCalorieNutrientInfo]
        if (!!value) {
          let min = null
          let max = null

          // min 값 구하기
          if (!!nutrientItem.min) {
            min = nutrientItem.min
          } else if (!!nutrientItem.getMin) {
            // 타우린
            if (nutrientItem.nutrient === Nutrient.Taurine && !!this.moisture) {
              min = nutrientItem.getMin({ moisture: this.moisture })
            }
          }

          // max 값 구하기
          if (!!nutrientItem.max) {
            max = nutrientItem.max
          } else if (!!nutrientItem.getMax) {
            // 현재 getMax를 사용하지 않아서 공란으로 비워둠
          }

          if (!!min && value < min) {
            minValues.push(nutrientItem.nutrient)
          } else if (!!max && value > max) {
            maxValues.push(nutrientItem.nutrient)
          } else {
            suitableValues.push(nutrientItem.nutrient)
          }
        }
      })
    }
    //
    return {
      minValues,
      maxValues,
      suitableValues,
    }
  }

  get result() {
    return [
      {
        key: 'protein',
        label: '조단백질',
        value: this.dmProtein,
      },
      { key: 'fat', label: '조지방', value: this.dmFat },
      { key: 'carbohydrate', label: '탄수화물', value: this.dmCarbohydrate },
      {
        key: 'calciumPerPhosphorus',
        label: '칼슘:인',
        value: this.calciumPerPhosphorus,
      },
    ]
  }
}

/* 
  get hasOptionalData(): boolean {
    return !!this.animal && !!this.growth;
  }

*/
