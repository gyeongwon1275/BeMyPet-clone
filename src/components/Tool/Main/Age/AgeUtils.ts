import {
  animalSizeType,
  animalType,
} from '../../../../modules/calculator/types'

/* 
TODO

필요한 것 

1> 동물종류 

2> 강아지일 경우 크기

3> 생년월일 


*/

export default class AgeUtils {
  type: animalType
  date: Date | null
  age: number | null
  size?: animalSizeType
  constructor(
    type: animalType,
    date: Date | null,
    age: number | null,
    size?: animalSizeType
  ) {
    this.type = type
    this.date = date
    this.age = age
    this.size = size
  }

  getdays(): number {
    let currentDay = new Date().getTime() / (1000 * 60 * 60 * 24)
    if (this.date) {
      let birthDay = this.date.getTime() / (1000 * 60 * 60 * 24)

      return currentDay - birthDay
    }

    return 0
  }

  getDogAge(): number | void {
    if (this.size) {
      let day = this.getdays()
      if (day === 0) {
        return 0
      } else if (this.size === '소형') {
        return Math.floor((16 * Math.log(day / 365) + 31) * 0.85)
      } else if (this.size === '중형') {
        return Math.floor((16 * Math.log(day / 365) + 31) * 0.91)
      } else if (this.size === '대형') {
        return Math.floor(16 * Math.log(day / 365) + 31)
      }
    }
  }

  getCatAge(): number | void {
    if ((this.type = 'cat')) {
      let days = this.getdays()
      let adultCoefficient = 4
      let childCoefficient = 12.5
      let catAge: number
      if (days <= 730) {
        catAge = childCoefficient * days
      } else {
        catAge = childCoefficient * 730 + (adultCoefficient * days - 730)
      }

      return Math.floor(catAge / 365)
    }
  }
}
