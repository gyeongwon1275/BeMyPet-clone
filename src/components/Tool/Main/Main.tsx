import * as React from 'react'
import { Route } from 'react-router-dom'
const Main: React.FC = () => {
  return (
    <>
      <Route exact path="/tool/foodCalorie">
        <div>푸드</div>
      </Route>
      <Route exact path="/tool/recommendCalorie">
        <div>권장</div>
      </Route>
      <Route exact path="/tool/bmi">
        <div>비만도</div>
      </Route>
      <Route exact path="/tool/age">
        <div>나이</div>
      </Route>
    </>
  )
}

export default Main
