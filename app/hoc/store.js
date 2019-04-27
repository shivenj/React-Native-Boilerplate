/* eslint react/prop-types: "off" */

import React from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Loading from 'components/Loading'
import store, { persistor } from 'store'

export default ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
)
