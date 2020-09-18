import * as React from 'react'
import Age from './Age/Age'

import FeedCalorie from './FeedCalorie/FeedCalorie'
import RecommendCalorie from './RecommendCalorie/RecommendCalorie'

import Home from './Home'
import { Redirect, Route, Switch } from 'react-router-dom'
import Bmi from './Bmi/Bmi'
function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/tool" />} />
        <Route exact path="/tool" component={Home} />
        <Route exact path="/tool/foodCalorie" component={FeedCalorie} />

        <Route exact path="/tool/recommendCalorie">
          <RecommendCalorie />
        </Route>
        <Route exact path="/tool/bmi">
          <Bmi />
        </Route>
        <Route exact path="/tool/age">
          <Age />
        </Route>
      </Switch>
    </main>
  )
}

export default Main
