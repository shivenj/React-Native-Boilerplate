/*
 * @file: Root.js
 * @description: Root file for the authentication.
 * @date: 14.12.2017
 * @author: Shiven Juneja
 * */

import React, { Component } from 'react'
import { createStructuredSelector } from 'reselect'
import Loading from 'components/Loading'
import { connect } from 'react-redux'
import { selectors } from 'screens/Auth/selectors'
import { logout } from 'screens/Auth/thunks'


class Root extends Component {
  componentDidMount() {
    const {
      isLoggedIn,
      navigation,
      logout,
    } = this.props
      navigation.navigate(isLoggedIn ? 'App' : 'Auth')
  }

  render() {
    return <Loading />
  }
}
const mapState = () =>
  createStructuredSelector({
    isLoggedIn: selectors.selectIsLoggedIn(),
  })

export default connect(
  mapState,
  { logout },
)(Root)
