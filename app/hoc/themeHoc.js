import React from 'react'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'
import {Colors} from 'constants'
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.Tomato,
    background: Colors.LightBrown,
    accent: Colors.Yellow,
  },
}

export default ({ children }) => <PaperProvider theme={theme}>{children}</PaperProvider>
