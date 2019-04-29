import * as API from 'services'
import NavigationService from 'navigation/NavigationService'
import Base64 from 'utilities/Base64'
import { displayErrorToast } from 'utilities/Toast'
import { actions as authActions } from './ducks'

const login = ({ email, password }) => async dispatch => {
  dispatch(authActions.loginRequest())
  try {
    let token = Base64.btoa(email,password)
    return dispatch(authActions.loginSuccess({ user: email, token }))
  } catch (error) {
    console.log("error", error)
    displayErrorToast(error.response.data.message)
    return dispatch(authActions.loginError())
  }
}

const logout = () => async dispatch => {
  dispatch(authActions.logoutRequest())
  try {
    return dispatch(authActions.logoutSuccess())
  } catch (error) {
    return dispatch(authActions.logoutError())
  } finally {
    NavigationService.navigate('Auth')
  }
}

const register = ({ email, password, name }) => async (
  dispatch,
) => {
  dispatch(authActions.registerRequest())
  try {
    let token = Base64.btoa(email,password)
    return dispatch(authActions.registerSuccess({ user: {email, name}, token }))
  } catch (error) {
    displayErrorToast(error.response.data.message)
    return dispatch(authActions.registerError())
  }
}


export { login, logout, register }
