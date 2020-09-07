import * as React from 'react'

const BMI: React.FC = () => {
  return (
    <div className="main-img-container">
      <div className="logo-text-wrapper">
        <h1>
          <span className="bmi-logo-span">비만도계산기</span>
          란?
        </h1>
        <p>
          우리 아이의 비만도를 시각적으로
          <br />볼 수 있는 도구입니다.
        </p>
      </div>

      <img src="https://tools.mypetlife.co.kr/static/media/bmiMain.b1be3a33.png" />
    </div>
  )
}

export default BMI
