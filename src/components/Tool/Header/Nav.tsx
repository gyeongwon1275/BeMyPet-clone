import * as React from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'

const Nav: React.FC = () => {
  return (
    <header>
      <div className="tool-nav-container">
        <div className="tool-nav-logo">
          {/* 로고 클릭하면 홈페이지로 넘어감 */}
          <Link to="/">
            <img src="https://images.mypetlife.co.kr/wp-content/uploads/2018/04/04230027/%EB%B9%84%EB%A7%88%EC%9D%B4%ED%8E%AB-%EB%A1%9C%EA%B3%A0.png" />
          </Link>
        </div>
        <div className="tool-nav-menu">
          <Link to="/tool">홈</Link>
          <Link to="/tool/foodCalorie">사료칼로리 계산</Link>
          <Link to="/tool/recommendCalorie">권장칼로리 계산</Link>
          <Link to="/tool/bmi">비만도 계산</Link>
          <Link to="/tool/age">나이 계산</Link>
        </div>
      </div>
    </header>
  )
}

export default Nav
