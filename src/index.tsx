import * as React from 'react'
import * as ReactDom from 'react-dom'
import App from './components/App'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './modules'
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(rootReducer, composeWithDevTools())
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
