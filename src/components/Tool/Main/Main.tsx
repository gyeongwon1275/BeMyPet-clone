import * as React from 'react'
import Age from './Age'
import BMI from './BMI'
import FoodCalorie from './FoodCalorie'
import RecommendCalorie from './RecommendCalorie'

import Home from './Home'
import { Route, Switch } from 'react-router-dom'
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
          <BMI />
        </Route>
        <Route exact path="/tool/age">
          <Age />
        </Route>
      </Switch>
    </main>
  )
}

export default Main
