/*
 * @file: index.js
 * @description: Login Screen for application
 * @date: 07.09.2018
 * @author: Shiven Juneja
 * */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import rootStyles from 'styles'
import LoginForm from './LoginForm'
import LoginBottomText from './LoginBottomText'
import { selectors } from '../selectors'
import { types } from '../ducks'
import { login } from '../thunks'

class Login extends Component {
  handleSubmit = ({ email, password }) => {
    const {
      loginUser,
      navigation: { navigate },
    } = this.props
    loginUser({ email, password }).then(response => {
      if (response.type === types.LOGIN_SUCCESS) {
        navigate('App')
      }
    })
  }

  render() {
    const {
      navigation: { navigate },
      isPending,
    } = this.props
    return (
        <View style={rootStyles.authContainer}>
          <LoginForm loading={isPending} handleSubmit={this.handleSubmit} />
          <LoginBottomText navigate={navigate} />
        </View>

    )
  }
}

Login.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  isPending: PropTypes.bool,
  loginUser: PropTypes.func,
}

const mapState = () =>
  createStructuredSelector({
    isPending: selectors.selectIsPendingLogin(),
  })

const mapDispatch = { loginUser: login }

export default connect(
  mapState,
  mapDispatch,
)(Login)
