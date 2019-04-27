import { createBottomTabNavigator } from 'react-navigation'
import { tabRoutes } from './routes'
import {Colors} from 'constants'

const Tabs = createBottomTabNavigator(tabRoutes, {
  initialRouteName: 'Dashboard',
  tabBarOptions: {
    activeTintColor: '#fff',
    inactiveTintColor: '#000',
    style: {
      backgroundColor: Colors.Tomato,
    },
    indicatorStyle: {
      backgroundColor: '#000',
    },
  },
})

export default Tabs
