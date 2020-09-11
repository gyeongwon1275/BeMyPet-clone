import * as React from 'react'
import './AgeResult.scss'

type animalInKorean = '강아지' | '고양이'
interface AgeResult {
  age: number | null
  animal: animalInKorean
}
function AgeResult({ age, animal }: AgeResult) {
  return (
    <div className="age-result-container">
      <div className="age-result-wrapper">
        <h4>
          우리 아이의 나이는 <span>{age}</span> 살이에요!
        </h4>
        <p>
          아직 모든 {animal}의 나이를 사람 나이로 정확하게 변환하는 <br />
          연구결과는 없습니다.
          <br />
          {animal}마다 나이가 드는 속도가 다릅니다. 위 결과는 참고로만 봐주세요.
        </p>
      </div>
    </div>
  )
}

export default AgeResult
