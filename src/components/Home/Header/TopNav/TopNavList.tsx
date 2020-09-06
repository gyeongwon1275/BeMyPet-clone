import * as React from 'react'
import './TopNavList.scss'
import { Link } from 'react-router-dom'
const TopNavList: React.FC = () => {
  return (
    <div className="link-menu-wrapper">
      <ul className="link-list">
        <li>
          <a href="https://creators.mypetlife.co.kr/" rel="noreferrer nofollow">
            크리에이터즈
          </a>
        </li>
        <li>
          <Link to="/tool">툴즈</Link>
        </li>

        <li>
          <a href="https://mypetlife.co.kr/cbh/" rel="noreferrer nofollow">
            동물등록
          </a>
        </li>
      </ul>
    </div>
  )
}

export default TopNavList
