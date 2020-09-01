import * as React from 'react'
import './TopNav.scss'
import TopNavList from './TopNavList'
import TopSnsList from './TopSnsList'
const TopNav: React.FC = () => {
  return (
    <nav className="top-nav">
      <div className="top-nav-container">
        <div className="top-nav-wrapper">
          <TopNavList />
          <TopSnsList />
        </div>
      </div>
    </nav>
  )
}

export default TopNav
