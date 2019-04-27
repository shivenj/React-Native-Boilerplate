import React from 'react'
import { Subheading } from 'react-native-paper'
import styles from './styles'

const NoData = ({ children }) => <Subheading style={styles.textContainer}>{children}</Subheading>

export default NoData
