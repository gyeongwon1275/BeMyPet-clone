import * as React from 'react'
import {
  animalBmiType,
  animalType,
  BmiState,
} from '../../../../modules/calculator'
import './BmiSelect.scss'
import { BmiFormProps } from './BmiType'

function BmiSelect({ animalBmiInfo, onInputBmiInfo }: BmiFormProps) {
  const bmiInfoObject = animalBmiInfo

  const getBmiImage = React.useCallback(
    (type: animalType, index: number) => {
      const dogBmiImages: string[] = [
        'https://tools.mypetlife.co.kr/static/media/dog-fat-1.5b293b59.png',
        'https://tools.mypetlife.co.kr/static/media/dog-fat-2.042ebe62.png',
        'https://tools.mypetlife.co.kr/static/media/dog-fat-3.f1050610.png',
        'https://tools.mypetlife.co.kr/static/media/dog-fat-4.d90d03f4.png',
        'https://tools.mypetlife.co.kr/static/media/dog-fat-5.cecb6893.png',
      ]

      const catBmiImages: string[] = [
        'https://tools.mypetlife.co.kr/static/media/cat-fat-1.172a0fe6.png',
        'https://tools.mypetlife.co.kr/static/media/cat-fat-2.4450ad36.png',
        'https://tools.mypetlife.co.kr/static/media/cat-fat-3.a4d63d40.png',
        'https://tools.mypetlife.co.kr/static/media/cat-fat-4.f82732fa.png',
        'https://tools.mypetlife.co.kr/static/media/cat-fat-5.1e1754e9.png',
      ]
      if (type === 'dog') {
        return dogBmiImages[index]
      } else if (type === 'cat') {
        return catBmiImages[index]
      }
    },
    [animalBmiInfo]
  )
  const handleAnimalBmi = React.useCallback(
    (bmi: animalBmiType) => () => {
      bmiInfoObject.bmi = bmi
      onInputBmiInfo(bmiInfoObject)
    },
    [animalBmiInfo]
  )
  return (
    <div className="bmi-select-wrapper">
      <label className="animal-select-label">
        우리 아이와 닮은
        <br />
        사진을 골라주세요.
      </label>
      <div className="bmi-img-wrapper">
        <div
          className={`${
            animalBmiInfo.bmi === 1 ? `select-image-box` : `unselect-image-box`
          }`}
          onClick={handleAnimalBmi(1)}
        >
          <img src={getBmiImage(animalBmiInfo.type, 0)} alt="bmi image" />
        </div>
        <div
          className={`${
            animalBmiInfo.bmi === 2 ? `select-image-box` : `unselect-image-box`
          }`}
          onClick={handleAnimalBmi(2)}
        >
          <img src={getBmiImage(animalBmiInfo.type, 1)} />
        </div>
        <div
          className={`${
            animalBmiInfo.bmi === 3 ? `select-image-box` : `unselect-image-box`
          }`}
          onClick={handleAnimalBmi(3)}
        >
          <img src={getBmiImage(animalBmiInfo.type, 2)} />
        </div>
        <div
          className={`${
            animalBmiInfo.bmi === 4 ? `select-image-box` : `unselect-image-box`
          }`}
          onClick={handleAnimalBmi(4)}
        >
          <img src={getBmiImage(animalBmiInfo.type, 3)} />
        </div>
        <div
          className={`${
            animalBmiInfo.bmi === 5 ? `select-image-box` : `unselect-image-box`
          }`}
          onClick={handleAnimalBmi(5)}
        >
          <img src={getBmiImage(animalBmiInfo.type, 4)} />
        </div>
      </div>
    </div>
  )
}

export default BmiSelect
