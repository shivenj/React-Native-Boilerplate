/**
 * @file: index.js
 * @description: Application Reducer for rehydrating state to the store and exporting reducers.
 * @date: 14.12.2017
 * @author: Shiven Juneja
 * */
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import authReducer from 'screens/Auth/ducks'

const authConfig = {
  key: 'auth',
  storage,
  blacklist: ['isPendingLogin', 'isPendingLogout', 'isPendingRegister'],
}

export default combineReducers({
  auth: persistReducer(authConfig, authReducer),
})
