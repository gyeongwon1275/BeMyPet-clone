import * as React from 'react'
import './Home.scss'
import { useHistory } from 'react-router-dom'
function Home() {
  const history = useHistory()

  const handleNavigation = React.useCallback(
    (location: string) => () => {
      history.push(location)
    },
    []
  )

  return (
    <>
      <div className="main-img-container">
        <div className="logo-text-wrapper">
          <h1>
            <span className="home-logo-span">비마이펫 </span>
            툴즈
          </h1>
          <p>우리 아이를 위한 계산기, 가이드라인 모음</p>
        </div>

        <img src="https://tools.mypetlife.co.kr/static/media/samoMain.643fe606.png" />
      </div>
      <div className="calculator-menu-container">
        <div
          className="food-calculator-menu"
          onClick={handleNavigation('/tool/foodCalorie')}
        >
          <h2>
            <span>사료칼로리</span>
            <br />
            계산기
          </h2>

          <button>{`>`}</button>
        </div>
        <div
          className="recommend-calculator-menu"
          onClick={handleNavigation('/tool/recommendCalorie')}
        >
          <h2>
            <span>권장칼로리</span>
            <br />
            계산기
          </h2>

          <button>{`>`}</button>
        </div>
        <div
          className="bmi-calculator-menu"
          onClick={handleNavigation('/tool/bmi')}
        >
          <h2>
            <span>비만도</span>
            <br />
            계산기
          </h2>

          <button>{`>`}</button>
        </div>
        <div
          className="age-calculator-menu"
          onClick={handleNavigation('/tool/age')}
        >
          <h2>
            <span>나이</span>
            <br />
            계산기
          </h2>

          <button>{`>`}</button>
        </div>
      </div>
    </>
  )
}

export default Home
