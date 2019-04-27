import ErrorMessages from 'constants/Errors'
import React from 'react'
import Snackbar from 'react-native-snackbar'
import Color from 'constants/Colors'

const displayErrorToast = message => {
  return Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: Color.Danger,
  })
}

const displaySuccessToast = message =>
  Snackbar.show({
    title: message,
    duration: Snackbar.LENGTH_SHORT,
    backgroundColor: Color.Success,
  })

const displayNetworkError = () => {
  displayErrorToast('Experiencing network issues. Please try again.')
}

const displayInternalServer = () => {
  displayErrorToast('Internal server error. Please try again.')
}

export { displayErrorToast, displaySuccessToast, displayNetworkError, displayInternalServer }
