import * as React from 'react'
import Nav from './Header/Nav'
import Main from './Main/Main'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './Main/Home'
import Footer from './Footer/Footer'
const Tool: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <main>
          <Switch>
            <Route exact path="/tool/" component={Home} />
            <Main />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default Tool
