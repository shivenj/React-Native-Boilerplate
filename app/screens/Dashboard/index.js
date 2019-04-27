import React from 'react'
import { View, Text } from 'react-native'
import Header from 'components/Header'
import rootStyles from 'styles'

const Dashboard = () =>
  (
    <View style={rootStyles.rootContainer}>
      <Header name="Dashboard" />
      <View style={rootStyles.centerContent}>
        <Text>Dashboard Content</Text>
      </View>
    </View>
  )

export default Dashboard