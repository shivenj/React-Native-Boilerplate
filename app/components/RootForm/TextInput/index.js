import React from 'react'
import { View } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { TextInput } from 'react-native-paper'
import rootStyle from 'styles'
import styles from './styles'

const renderPasswordAccessory = ({ secureTextEntry, handleAccessoryPress }) => {
  const name = secureTextEntry ? 'visibility' : 'visibility-off'

  return (
    <MaterialIcon
      size={24}
      name={name}
      style={styles.securedIconStyle}
      onPress={handleAccessoryPress}
      suppressHighlighting
    />
  )
}

const CustomTextInput = ({
  label,
  value,
  handleChange,
  refs,
  secureTextEntry,
  handleAccessoryPress,
  handleSubmitEditing,
  handleTouchStart,
  returnKeyType,
  editable,
  disabled,
  error,
  mode,
  autocapitalize,
}) => {
  if (label === 'Password') {
    return (
      <View style={rootStyle.directionRow}>
        <TextInput
          label={label}
          style={[styles.inputContainer, rootStyle.width95]}
          value={value}
          ref={refs}
          error={error}
          mode={mode}
          autoCapitalize={autocapitalize || 'none'}
          onTouchStart={handleTouchStart}
          secureTextEntry={secureTextEntry}
          onChangeText={handleChange}
          onSubmitEditing={handleSubmitEditing}
          returnKeyType={returnKeyType}
        />
        {renderPasswordAccessory({ secureTextEntry, handleAccessoryPress })}
      </View>
    )
  }
  return (
    <TextInput
      label={label}
      style={styles.inputContainer}
      value={value}
      mode={mode}
      ref={refs}
      error={error}
      autoCapitalize={autocapitalize || 'none'}
      editable={editable}
      disabled={disabled}
      onTouchStart={handleTouchStart}
      onChangeText={handleChange}
      onSubmitEditing={handleSubmitEditing}
      returnKeyType={returnKeyType}
    />
  )
}

export default CustomTextInput
