import * as React from 'react'
import './App.scss'
import Header from './Header/Header'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
}

export default App
