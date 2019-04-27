/*
 * @file: store.js
 * @description: Configure/creating redux store with thunk,reducer etc
 * @date: 14.12.2017
 * @author: Shiven Juneja
 * */

import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native
import thunk from 'redux-thunk'
import reducers from 'reducers'

// Redux Persist config
const config = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

const reducer = persistReducer(config, reducers)

const middleware = [thunk]

const store = createStore(reducer, compose(applyMiddleware(...middleware)))

const persistor = persistStore(store)

export { store as default, persistor }
