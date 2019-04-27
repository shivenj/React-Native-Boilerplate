import { StyleSheet } from 'react-native'
import {Colors} from 'constants'

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: Colors.Snow
  },
  centerContent: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  directionRow: {
    flexDirection: 'row',
  },
  width95: {
    width: '95%',
  },
  dialog: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  authContainer: {justifyContent: 'space-around', flex: 1, backgroundColor:Colors.Snow}
})

export default styles
