import { createSelector } from 'reselect'

// Selectors
const authSelector = () => state => state.auth

// login-logout selectors
const selectIsPendingLogin = () =>
  createSelector(
    authSelector(),
    auth => auth.isPendingLogin,
  )
const selectIsPendingLogout = () =>
  createSelector(
    authSelector(),
    auth => auth.isPendingLogout,
  )
const selectIsPendingRegister = () =>
  createSelector(
    authSelector(),
    auth => auth.isPendingRegister,
  )
const selectCurrentUserToken = () =>
  createSelector(
    authSelector(),
    auth => auth.token,
  )
const selectIsLoggedIn = () =>
  createSelector(
    selectCurrentUserToken(),
    token => {
      if (!token) {
        return false
      }
      return true
    },
  )
const selectIsNotLoggedIn = () =>
  createSelector(
    selectIsLoggedIn(),
    isLoggedIn => !isLoggedIn,
  )

const selectCurrentUser = () =>
  createSelector(
    authSelector(),
    auth => {
      return auth.user
    },
  )

export const selectors = {
  selectCurrentUser,
  selectIsLoggedIn,
  selectIsNotLoggedIn,
  selectIsPendingLogin,
  selectIsPendingLogout,
  selectIsPendingRegister,
}
