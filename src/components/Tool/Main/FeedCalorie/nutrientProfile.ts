export enum Nutrient {
  Protein = '조단백질',
  Fat = '조지방',
  Calcium = '칼슘',
  Phosphorus = '인',
  CalciumPerPhosphorus = '칼슘:인',
  Taurine = '타우린',
  Carbohydrate = '탄수화물',
  Fiber = '조섬유',
  Ash = '조회분',
  Moisture = '수분',
}

export interface NutrientData {
  key: string
  nutrient: Nutrient
  min?: number
  max?: number
  getMin?: (params: any) => number
  getMax?: (params: any) => number
}

// 성견
export const dogAdultNutrientProfile: NutrientData[] = [
  {
    key: 'protein',
    nutrient: Nutrient.Protein,
    min: 18,
  },
  {
    key: 'fat',
    nutrient: Nutrient.Fat,
    min: 5.5,
  },
  {
    key: 'calcium',
    nutrient: Nutrient.Calcium,
    min: 0.5,
    max: 2.5,
  },
  {
    key: 'phosphorus',
    nutrient: Nutrient.Phosphorus,
    min: 0.4,
    max: 1.6,
  },
  {
    key: 'calciumPerPhosphorus',
    nutrient: Nutrient.CalciumPerPhosphorus,
    min: 1,
    max: 2,
  },
]

// 성장기 강아지
export const dogGrowthNutrientProfile: NutrientData[] = [
  {
    key: 'protein',
    nutrient: Nutrient.Protein,
    min: 22.5,
  },
  {
    key: 'fat',
    nutrient: Nutrient.Fat,
    min: 8.5,
  },
  {
    key: 'calcium',
    nutrient: Nutrient.Calcium,
    min: 1.2,
  },
  {
    key: 'phosphorus',
    nutrient: Nutrient.Phosphorus,
    min: 1,
    max: 1.6,
  },
  {
    key: 'calciumPerPhosphorus',
    nutrient: Nutrient.CalciumPerPhosphorus,
    min: 1,
    max: 2,
  },
]

// 성장기 강아지 대형견
export const bigDogGrowthNutrientProfile: NutrientData[] = [
  ...dogGrowthNutrientProfile.filter((x) => x.nutrient !== Nutrient.Calcium),
  {
    key: 'calcium',
    nutrient: Nutrient.Calcium,
    min: 1.2,
    max: 1.8,
  },
]

// 성장기 고양이
export const catGrowthNutrientProfile: NutrientData[] = [
  {
    key: 'protein',
    nutrient: Nutrient.Protein,
    min: 30,
  },
  {
    key: 'fat',
    nutrient: Nutrient.Fat,
    min: 9,
  },
  {
    key: 'calcium',
    nutrient: Nutrient.Calcium,
    min: 1,
  },
  {
    key: 'phosphorus',
    nutrient: Nutrient.Phosphorus,
    min: 0.8,
  },
  {
    key: 'taurine',
    nutrient: Nutrient.Taurine,
    getMin: ({ moisture }) => {
      return moisture > 10 ? 0.2 : 0.1
    },
  },
]

// 고양이 성묘
export const catAdultNutrientProfile: NutrientData[] = [
  {
    key: 'protein',
    nutrient: Nutrient.Protein,
    min: 26,
  },
  {
    key: 'fat',
    nutrient: Nutrient.Fat,
    min: 9,
  },
  {
    key: 'calcium',
    nutrient: Nutrient.Calcium,
    min: 0.6,
  },
  {
    key: 'phosphorus',
    nutrient: Nutrient.Phosphorus,
    min: 0.5,
  },
  {
    key: 'taurine',
    nutrient: Nutrient.Taurine,
    getMin: ({ moisture }) => {
      return moisture > 10 ? 0.2 : 0.1
    },
  },
]
