import * as React from 'react'
import './App.scss'
import Header from './Header/Header'
import Container from './Container/Container'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container />
    </BrowserRouter>
  )
}

export default App
