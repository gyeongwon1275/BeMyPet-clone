enum AnimalKind {
  Dog = '개',
  Cat = '고양이',
}

export enum DogType {
  Small = '小',
  Medium = '中',
  Large = '大',
}

export interface AgeCalculatorData {
  animal?: AnimalKind
  dogType?: DogType
  date: string
}

export default class AgeCalculator implements AgeCalculatorData {
  constructor(defaultValue?: AgeCalculatorData) {}

  // 클래스 안에 있는 인스턴스 객체 fields
  // 키는 문자로 설정 값은 아무타입 -> 초기에 null 로 설정해서
  private fields: { [key: string]: any } = {
    animal: null,
    dogSize: null,
    date: null,
  }

  public errors: { [key: string]: any } = {
    animal: null,
    dogSize: null,
    date: null,
  }
  // get = private 로 설정한 인스턴스 변수에 접근하기 위한 키워드
  //
  get animal(): AnimalKind | undefined {
    return this.fields.animal
  }
  // fields.animal Dog 인지 return
  // !!this.fields.animal => null 로되있으니가 false 로 변경하려고 사용
  get isDog(): boolean {
    return !!this.fields.animal && this.fields.animal === AnimalKind.Dog
  }
  // fields.animal Cat 인지 return
  // !!this.fields.animal => null 로되있으니가 false 로 변경하려고 사용
  get isCat(): boolean {
    return !!this.fields.animal && this.fields.animal === AnimalKind.Cat
  }
  // dog size 리턴
  // 현재 this.fields.animal 이 개이면 개사이즈 리턴
  get dogType(): DogType | undefined {
    return this.fields.animal === AnimalKind.Dog
      ? this.fields.dogTypeDogType
      : undefined
  }

  get date(): string {
    return this.fields.date
  }

  //
  get totalDays(): number {
    // . -> - 로변경
    const value = this.date.replace(/\./, '-')
    // date 객체로 변경
    const bornDate = new Date(value)
    const today = new Date()
    // 현재시간 - 태어난시간 => 지구에 로그인한 시간
    const times = today.getTime() - bornDate.getTime()
    // 변환
    const days = Math.floor(times / (1000 * 60 * 60 * 24))
    return days
  }

  get humanAge(): number {
    let humanDays
    let underAgePercent
    let overAgePercent
    let humanYearDog: number
    function getAgeBigDog(dogAge: number): number {
      return Math.floor(16 * Math.log(dogAge) + 31)
    }

    function getAgeSmallDog(dogAge: number): number {
      return Math.floor((16 * Math.log(dogAge) + 31) * 0.85)
    }

    function getAgeMiddleDog(dogAge: number): number {
      return Math.floor((16 * Math.log(dogAge) + 31) * 0.91)
    }
    if (this.isDog) {
      switch (this.dogType) {
        case DogType.Small:
          humanYearDog = getAgeSmallDog(Math.floor(this.totalDays / 365))
          return humanYearDog
        case DogType.Medium:
          humanYearDog = getAgeMiddleDog(Math.floor(this.totalDays / 365))
          return humanYearDog
        case DogType.Large:
          humanYearDog = getAgeBigDog(Math.floor(this.totalDays / 365))
          return humanYearDog
      }
    } else if (this.isCat) {
      underAgePercent = 12.5
      overAgePercent = 4
    }

    if (!underAgePercent || !overAgePercent) {
      return 0
    }

    if (this.totalDays <= 730) {
      humanDays = underAgePercent * this.totalDays
    } else {
      humanDays =
        underAgePercent * 730 + (overAgePercent * this.totalDays - 730)
    }

    return Math.floor(humanDays / 365)
  }

  public validate(): boolean {
    this.errors = {}

    if (!this.animal) {
      this.errors['animal'] = '값을 입력하거나 선택해주셔야 합니다.'
    }

    if (this.isDog && !this.dogType) {
      this.errors['dogSize'] = '값을 입력하거나 선택해주셔야 합니다.'
    }

    return this.isValid
  }

  get isValid(): boolean {
    // error 객체가 비어있는지 확인 비어있으면 유효 차있으면 무효
    /* 
    [null,NaN,1].filter((field)=>!!field)
    field 가 false 가 아닌 애들만 배열에 모음 
    */
    return Object.keys(this.errors).filter((field) => !!field).length === 0
  }

  public update(changes: any): void {
    for (const key of Object.keys(changes)) {
      if (this.fields[key] === undefined) {
        throw new Error(`Cannot find the key in the form: ${key}`)
      }
      this.fields[key] = changes[key]
    }
  }
}
