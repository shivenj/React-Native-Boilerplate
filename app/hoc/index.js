/* eslint react/prop-types: "off" */

import React from 'react'
import ErrorBoundary from './errorBoundary'
import Store from './store'
import Theme from './themeHoc'

export default ({ children }) => (
  <ErrorBoundary>
    <Store>
      <Theme>{children}</Theme>
    </Store>
  </ErrorBoundary>
)
