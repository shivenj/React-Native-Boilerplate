/*
 * @file: routes.js
 * @description: For defining and importing all screens/routes
 * @date: 15.08.2018
 * @author: Shiven Juneja
 * */
import React from 'react'
import Login from 'screens/Auth/Login'
import Register from 'screens/Auth/Register'
import Dashboard from 'screens/Dashboard'
import Profile from 'screens/Profile'
import Tab2 from 'screens/Tab2'
import Tab1 from 'screens/Tab1'

const tabRoutes = {
  Dashboard: {
    screen: Dashboard,
  },
  Tab1: {
    screen: Tab1,
  },
  Tab2: {
    screen: Tab2,
  },
  Profile: {
    screen: Profile,
  },
}

const stackRoutes = {
  Login: { screen: Login },
  Register: { screen: Register },
}

// export list of routes.
export { stackRoutes, tabRoutes }
