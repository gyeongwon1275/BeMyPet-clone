import * as React from 'react'
import Nav from './Header/Nav'
import Main from './Main/Main'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Home from './Main/Home'
import Footer from './Footer/Footer'
const Tool: React.FC = () => {
  // const match = useRouteMatch<{ name: string }>()
  /* 
  TODO: 

  메인로고 -> 컴포넌트화 
  메인 CONTENT -> 컴포넌트화 
  */

  // console.log('match', match)

  return (
    <>
      <BrowserRouter>
        <Nav />
        <main>
          <Switch>
            <Route exact path="/tool/" component={Home} />
            <Route
              exact
              path="/tool/:name"
              render={(props) => <Main {...props} />}
            />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}
export default Tool
