/*
 * @file: navigator.js
 * @description: Configure and connecting react navigation with redux store and routes
 * @date: 15.08.2018
 * @author: Shiven Juneja
 * */

import React, { Component } from 'react'
import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import Root from 'Root'
import { useScreens } from 'react-native-screens'
import Tabs from './tabs'
import { stackRoutes } from './routes'

useScreens()
/* *
 * React Navigation's Configuration
 * */

const stackNavigatorConfiguration = {
  mode: 'card',
  headerMode: 'none',
}

/* *
 * @function: Making React navigation's stack navigator with routes and configuration
 * */

const AuthStack = createStackNavigator(stackRoutes, stackNavigatorConfiguration)

const RootNavigator = createSwitchNavigator(
  {
    AuthLoading: Root,
    App: Tabs,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  },
)

const AppContainer = createAppContainer(RootNavigator)

export default AppContainer
