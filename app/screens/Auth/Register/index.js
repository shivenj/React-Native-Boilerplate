/*
 * @file: index.js
 * @description: Register Screen for application
 * @date: 07.09.2018
 * @author: Shiven Juneja
 * */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {View} from 'react-native'
import rootStyles from 'styles'
import RegisterForm from './RegisterForm'
import RegisterBottomText from './RegisterBottomText'
import { selectors } from '../selectors'
import { register } from '../thunks'
import { types } from '../ducks'

class Register extends Component {
  onSubmit = fields => {
    const {
      registerUser,
      navigation: { navigate },
    } = this.props
    registerUser(fields).then(response => {
      if (response.type === types.REGISTER_SUCCESS) {
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
        <RegisterForm loading={isPending} handleSubmit={this.onSubmit} />
        <RegisterBottomText navigate={navigate} />
        </View>
    )
  }
}

Register.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
}

const mapState = () =>
  createStructuredSelector({
    isPending: selectors.selectIsPendingRegister(),
  })

const mapDispatch = { registerUser: register }

export default connect(
  mapState,
  mapDispatch,
)(Register)
