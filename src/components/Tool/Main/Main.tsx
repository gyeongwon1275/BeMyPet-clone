import * as React from 'react'
import Age from './Age/Age'

import FoodCalorie from './FoodCalorie/FoodCalorie'
import RecommendCalorie from './RecommendCalorie/RecommendCalorie'

import Home from './Home'
import { Route, Switch } from 'react-router-dom'
import Bmi from './Bmi/Bmi'
const Main: React.FC = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/tool/" component={Home} />
        <Route exact path="/tool/foodCalorie">
          <FoodCalorie />
        </Route>
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
