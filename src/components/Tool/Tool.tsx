import * as React from 'react'
import Nav from './Header/Nav'
import Main from './Main/Main'
import { BrowserRouter } from 'react-router-dom'

import Footer from './Footer/Footer'
import './Tool.scss'
// TODO https://reactrouter.com/web/example/nesting
function Tool() {
  return (
    /*   <>
      <Nav />
      <Footer />
    </> */
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
