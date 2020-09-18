import * as React from 'react'
import './Nav.scss'
import { Link, useLocation } from 'react-router-dom'

function Nav() {
  const location = useLocation()

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
          <Link
            to="/tool"
            className={location.pathname === '/tool' ? 'current-nav' : ''}
          >
            홈
          </Link>
          <Link
            to="/tool/foodCalorie"
            className={
              location.pathname === '/tool/foodCalorie' ? 'current-nav' : ''
            }
          >
            사료칼로리 계산
          </Link>
          <Link
            to="/tool/recommendCalorie"
            className={
              location.pathname === '/tool/recommendCalorie'
                ? 'current-nav'
                : ''
            }
          >
            권장칼로리 계산
          </Link>
          <Link
            to="/tool/bmi"
            className={location.pathname === '/tool/bmi' ? 'current-nav' : ''}
          >
            비만도 계산
          </Link>
          <Link
            to="/tool/age"
            className={location.pathname === '/tool/age' ? 'current-nav' : ''}
          >
            나이 계산
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Nav
