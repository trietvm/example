import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSaga from './effects'
import commonReducer from './reducers/commonReducer'
import loadingReducer from './reducers/loadingReducer'
import mainReducer from '../modules/reducers'
import { MODULE_NAME as MODULE_MAIN } from '../modules/models'

const config = {
  blacklist: ['notification', 'loading'],
  key: 'root',
  storage
}

const createMiddlewares = sagaMiddleware => {
  const middlewares = []
  if (sagaMiddleware) {
    middlewares.push(sagaMiddleware)
  }
  return applyMiddleware.apply({}, middlewares)
}

const createReducers = reducers => {
  return persistCombineReducers(config, {
    common: commonReducer,
    loading: loadingReducer,
    [MODULE_MAIN]: mainReducer,
    ...reducers
  })
}

const composeEnhancers = __DEV__
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
: compose
const buildStore = (reducers, initialState) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(createReducers(reducers), initialState, composeEnhancers(createMiddlewares(sagaMiddleware)))

  if (module.hot) {
    module.hot.accept(() => {
      store.replaceReducer(createReducers(reducers))
    })
  }
  const persistor = persistStore(store)
  store.reducers = createReducers(reducers)
  sagaMiddleware.run(createSaga(store.getState))
  return { persistor, store }
}

export default buildStore()
