import * as React from 'react'

import TopNav from './TopNav/TopNav'
import MainNav from './MainNav/MainNav'
import Search from './Search/Search'
const Header: React.FC = () => {
  return (
    <header>
      <TopNav />
      <MainNav />
      <Search />
    </header>
  )
}

export default Header
