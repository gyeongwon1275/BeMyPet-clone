import * as React from 'react'
import './MainNav.scss'
import { Link } from 'react-router-dom'
const MainNav: React.FC = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav-container">
        <div className="main-nav-wrapper">
          <div className="logo-wrapper">
            <a href="/" className="link-home">
              <img
                src="https://images.mypetlife.co.kr/wp-content/uploads/2018/04/04230027/%EB%B9%84%EB%A7%88%EC%9D%B4%ED%8E%AB-%EB%A1%9C%EA%B3%A0.png"
                alt="로고"
                className="logo"
                width="auto"
                height="70"
              />
            </a>
          </div>
          <div className="menu-wrapper">
            <ul className="menu-list">
              <li>
                <Link to="/category/doglab/">
                  강아지연구소
                  <i className="fas fa-caret-down" />
                </Link>
              </li>

              <li>
                <Link to="/category/catlab/">
                  고양이연구소
                  <i className="fas fa-caret-down" />
                </Link>
              </li>

              <li>
                <Link to="/category/etc/">
                  생활연구소
                  <i className="fas fa-caret-down" />
                </Link>
              </li>

              <li>
                <Link to="/category/question" children={'Q&A'} />
              </li>

              <li>
                <Link to="/category/subscribe/" children={'구독'} />
              </li>

              <li>
                <Link to="/category/login/" children={'로그인'} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default MainNav
