import React from 'react'
import { Surface } from 'react-native-paper'
import { TouchableOpacity, Image } from 'react-native'
import Images from 'constants/Images'
import styles from './styles'

const Avatar = ({ image, handlePress, avatarStyle }) => (
  <Surface style={[styles.innerSurface, avatarStyle]}>
    <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={handlePress}>
      <Image
        source={image || Images.user.addImage}
        style={{ width: '100%', height: '100%' }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  </Surface>
)

export default Avatar
