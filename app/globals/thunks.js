import ErrorMessages from 'constants/Errors'
import * as API from 'services'

import { actions as globalActions } from './ducks'

const setFcmToken = ({ deviceToken, deviceType }) => async dispatch =>
  dispatch(globalActions.setFcmTokenSuccess({ deviceToken, deviceType }))

export { fetchCategories, setFcmToken }
