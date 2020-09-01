import * as React from 'react'
import './TopNavList.scss'
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
          <a href="https://tools.mypetlife.co.kr/" rel="noreferrer nofollow">
            툴즈
          </a>
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
