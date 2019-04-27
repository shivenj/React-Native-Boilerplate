import React from 'react'
import { Subheading } from 'react-native-paper'
import { View } from 'react-native'
import styles from './style'

const LoginBottomText = ({ navigate }) => (
  <View>
    <Subheading style={styles.outerText}>
      Dont have an Account?{' '}
      <Subheading onPress={() => navigate('Register')} style={styles.innerText}>
        Register
      </Subheading>
    </Subheading>
  </View>
)

export default LoginBottomText
