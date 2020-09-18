import * as React from 'react'
import './App.scss'
import Tool from './Tool/Tool'
function App() {
  /* TODO src 폴더안에 home, tools, 
  switch 로 라우팅 할걸로 폴더를 나눔 
  홈, 툴즈, 커뮤니티로 나눔  
  */
  /*  <BrowserRouter basename="/tool">


      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tool">
          <Tool />
        </Route>
      </Switch>
    </BrowserRouter> */

  return <Tool />
}

export default App
