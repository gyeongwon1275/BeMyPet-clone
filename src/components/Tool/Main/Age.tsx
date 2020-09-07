import * as React from 'react'

const Age: React.FC = () => {
  return (
    <div className="main-img-container">
      <div className="logo-text-wrapper">
        <h1>
          <span className="age-logo-span">나이계산기</span>
          란?
        </h1>
        <p>
          우리 아이의 나이,
          <br />
          사람나이로는 몇살일까요?
        </p>
      </div>

      <img src="https://tools.mypetlife.co.kr/static/media/ageMain.cd3a6905.png" />
    </div>
  )
}

export default Age
