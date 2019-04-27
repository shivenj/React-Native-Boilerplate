import React from 'react'
import { View, Text } from 'react-native'
import Header from 'components/Header'
import rootStyles from 'styles'

const Tab1 = () =>
  (
    <View style={rootStyles.rootContainer}>
      <Header name="TAB 1" />
      <View style={rootStyles.centerContent}>
        <Text>Tab 1 Content</Text>
      </View>
    </View>
  )


export default Tab1