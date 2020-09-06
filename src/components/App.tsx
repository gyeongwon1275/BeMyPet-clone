import * as React from 'react'
import './App.scss'
import Home from './Home/Home'
import Tool from './Tool/Tool'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
const App: React.FC = () => {
  /* TODO src 폴더안에 home, tools, 
  switch 로 라우팅 할걸로 폴더를 나눔 
  홈, 툴즈, 커뮤니티로 나눔  
  */
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tool" component={Tool} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
