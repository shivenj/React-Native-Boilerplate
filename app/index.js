/*
 * @file: index.js
 * @description: Main file for app.
 * @date: 14.12.2017
 * @author: Shiven Juneja
 * */

import React from 'react'
import { StatusBar, Platform, Text, View } from 'react-native'
import AppHOC from 'hoc'
import NavigationService from 'navigation/NavigationService'
import AppContainer from './navigation'

// Hide StatusBar on Android as it overlaps tabs
if (Platform.OS === 'android'){ 
  StatusBar.setHidden(true)
}else{
  StatusBar.setBarStyle('light-content')
}

const App = () => (
  <AppHOC>
    <AppContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef)
      }}
    />
   </AppHOC>
)

export default App
