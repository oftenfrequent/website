import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Map } from 'immutable'
import thunk from 'redux-thunk'
import { apiMiddleware } from 'redux-api-middleware'
import logger from 'redux-logger'

import MainReducer from './components/MainReducer'

// custom Middleware
// import getStateInjector from './middleware/getStateInjector.js'

const stateTransformer = (state) => {
  // Makes Immutable maps compliant with state management
  return Map(state).toJS()
}
let enhancer

// let createLogger = require('redux-logger')
// const loggerMiddleware = createLogger({
//   stateTransformer
// })


enhancer = compose(
  applyMiddleware(
    thunk,
    apiMiddleware,
    // getStateInjector,
    logger()
  )
)

const reducer = combineReducers({
  main: MainReducer,
})

export default function configureStore (initialState) {
  const store = createStore(
    reducer,
    initialState,
    enhancer // Applies middleware & DevTools
  )
  return store
}

