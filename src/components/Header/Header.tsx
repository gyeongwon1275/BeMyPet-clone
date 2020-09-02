import * as React from 'react'

import TopNav from './TopNav/TopNav'
import MainNav from './MainNav/MainNav'
const Header: React.FC = () => {
  return (
    <header>
      <TopNav />
      <MainNav />
    </header>
  )
}

export default Header
