import * as React from 'react'
import { useRouteMatch, RouteComponentProps } from 'react-router-dom'
import Home from './Home'
const Main: React.FC<RouteComponentProps<{ name: string }>> = () => {
  const match = useRouteMatch<{ name: string }>()

  if (match.params.name === 'foodCalorie') {
    return <div>칼로리</div>
  } else if (match.params.name === 'recommendCalorie') {
    return <div>권장칼로리</div>
  } else if (match.params.name === 'bmi') {
    return <div>비만도</div>
  } else if (match.params.name === 'age') {
    return <div>나이</div>
  } else {
    return <Home />
  }
}

export default Main
