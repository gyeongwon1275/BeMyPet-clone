import * as React from 'react'

const FoodCalorie: React.FC = () => {
  return (
    <div className="main-img-container">
      <div className="logo-text-wrapper">
        <h1>
          <span className="food-logo-span">
            사료칼로리
            <br />
            계산기
          </span>
          란?
        </h1>
        <p>
          사료 성분표를 DM기준(수분0%)으로
          <br />
          변환하는 계산기입니다.
        </p>
      </div>

      <img src="https://tools.mypetlife.co.kr/static/media/feedMain.049f12bf.png" />
    </div>
  )
}

export default FoodCalorie
