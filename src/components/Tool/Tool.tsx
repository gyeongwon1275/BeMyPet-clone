import * as React from 'react'
import Nav from './Header/Nav'
import Main from './Main/Main'
import { BrowserRouter } from 'react-router-dom'

import Footer from './Footer/Footer'
import './Tool.scss'
const Tool: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Main />
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default Tool
