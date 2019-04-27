/*
 * @file: Header.js
 * @description: Header Component for application
 * @date: 15.12.2017
 * @author: Shiven Juneja
 * */

import React from 'react'
import { Appbar } from 'react-native-paper'
import { withNavigation } from 'react-navigation'
import {Colors} from 'constants'

const Header = ({ navigation, name, goBack }) => (
  <Appbar.Header>
    {goBack ? (
      <Appbar.BackAction onPress={() => navigation.goBack()} />
    ) : (
      null
    )}
    <Appbar.Content title={name} titleStyle={{ color: Colors.White }} />
  </Appbar.Header>
)

export default withNavigation(Header)
