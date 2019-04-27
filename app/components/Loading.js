/*
 * @file: Loading.js
 * @description: Loader Component for application
 * @date: 15.12.2017
 * @author: Shiven Juneja
 * */

import React from 'react'
import { View, ActivityIndicator } from 'react-native'
import { Caption } from 'react-native-paper'
import Color from 'constants/Colors'

const Loader = () => (
  <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
    <ActivityIndicator color={Color.Primary} />
    <Caption style={{ textAlign: 'center' }}>Loading</Caption>
  </View>
)

export default Loader
