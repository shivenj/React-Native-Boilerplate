import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

// Types
export const types = {
  //
  // LOGIN
  //
  LOGIN_REQUEST: 'spotter/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'spotter/LOGIN_SUCCESS',
  LOGIN_ERROR: 'spotter/LOGIN_ERROR',

  //
  // LOGOUT
  //
  LOGOUT_REQUEST: 'spotter/LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'spotter/LOGOUT_SUCCESS',
  LOGOUT_ERROR: 'spotter/LOGOUT_ERROR',
  //
  // REGISTER
  //
  REGISTER_REQUEST: 'spotter/REGISTER_REQUEST',
  REGISTER_SUCCESS: 'spotter/REGISTER_SUCCESS',
  REGISTER_ERROR: 'spotter/REGISTER_ERROR',
}

const initialState = {
  isPendingLogin: false,
  isPendingLogout: false,
  isPendingRegister: false,
  user: null,
  token: null,
}

// Reducer
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    //
    // LOGIN
    //
    case types.LOGIN_REQUEST:
      return { ...state, isPendingLogin: true }
    case types.LOGIN_SUCCESS: {
      return {
        ...state,
        isPendingLogin: false,
        user: action.payload.user,
        token: action.payload.token,
      }
    }
    case types.LOGIN_ERROR:
      return { ...state, isPendingLogin: false }
    //
    // LOGOUT
    //
    case types.LOGOUT_REQUEST:
      return { ...state, isPendingLogout: true }
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        isPendingLogout: false,
        user: null,
        token: null,
      }
    case types.LOGOUT_ERROR:
      return {
        ...state,
        isPendingLogout: false,
        user: null,
        token: null,
      }
    //
    // REGISTER
    //
    case types.REGISTER_REQUEST:
      return { ...state, isPendingRegister: true }
    case types.REGISTER_SUCCESS:
      return {
        ...state,
        isPendingRegister: false,
        user: action.payload.user,
        token: action.payload.token,
      }
    case types.REGISTER_ERROR:
      return { ...state, isPendingRegister: false }
    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // LOGIN
  //
  loginRequest: () => ({
    type: types.LOGIN_REQUEST,
  }),
  loginSuccess: ({ user, token }) => ({
    type: types.LOGIN_SUCCESS,
    payload: { user, token },
  }),
  loginError: () => ({
    type: types.LOGIN_ERROR,
  }),
  //
  // LOGOUT
  //
  logoutRequest: () => ({
    type: types.LOGOUT_REQUEST,
  }),
  logoutSuccess: () => ({
    type: types.LOGOUT_SUCCESS,
  }),
  logoutError: () => ({
    type: types.LOGOUT_ERROR,
  }),
  //
  // REGISTER
  //
  registerRequest: () => ({
    type: types.REGISTER_REQUEST,
  }),
  registerSuccess: ({ user, token }) => ({
    type: types.REGISTER_SUCCESS,
    payload: { user, token },
  }),
  registerError: () => ({
    type: types.REGISTER_ERROR,
  })
}

export default AuthReducer
