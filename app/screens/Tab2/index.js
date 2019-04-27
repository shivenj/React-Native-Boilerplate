import React from 'react'
import { View, Text } from 'react-native'
import Header from 'components/Header'
import rootStyles from 'styles'

const Tab2 = () => (
  <View style={rootStyles.rootContainer}>
    <Header name="TAB 2" />
    <View style={rootStyles.centerContent}>
      <Text>Tab 2 Content</Text>
    </View>
  </View>
)

export default Tab2;