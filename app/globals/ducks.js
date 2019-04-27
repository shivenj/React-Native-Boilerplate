// Types
export const types = {
  //
  // SET_FCM_TOKEN
  //
  SET_FCM_TOKEN_SUCCESS: 'spotter/SET_FCM_TOKEN_SUCCESS',
}

const initialState = {
  deviceToken: '',
  deviceType: '',
}

// Reducer
export default (state = initialState, action) => {
  switch (action.type) {
    //
    // SET_FCM_TOKEN
    //
    case types.SET_FCM_TOKEN_SUCCESS:
      return {
        ...state,
        deviceToken: action.payload.deviceToken,
        deviceType: action.payload.deviceType,
      }
    default:
      return state
  }
}

// Actions
export const actions = {
  //
  // SET_FCM_TOKEN
  //
  setFcmTokenSuccess: ({ deviceToken, deviceType }) => ({
    type: types.SET_FCM_TOKEN_SUCCESS,
    payload: { deviceToken, deviceType },
  }),
}
