import React from 'react'
import PropTypes from 'prop-types'
import { Subheading } from 'react-native-paper'
import styles from './style'

const RegisterBottomText = ({ navigate }) => (
  <Subheading style={styles.outerText}>
    Already Registered?{' '}
    <Subheading onPress={() => navigate('Login')} style={styles.innerText}>
      Login
    </Subheading>
  </Subheading>
)

RegisterBottomText.propTypes = {
  navigate: PropTypes.func.isRequired,
}

export default RegisterBottomText
