import React from 'react'
import { Button } from 'react-native-paper'
import styles from './styles'

const CustomButton = ({ mode, loading, handlePress, disabled, icon, children, dark, color }) => (
  <Button
    style={styles.buttonStyle}
    icon={icon}
    mode={mode}
    dark={dark}
    loading={loading}
    onPress={handlePress}
    disabled={disabled || loading}
    color={color}
    raised
  >
    {children}
  </Button>
)

export default CustomButton
