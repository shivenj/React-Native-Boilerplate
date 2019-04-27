import * as React from 'react'
import { Chip } from 'react-native-paper'
import styles from './styles'

const CustomChip = ({ children }) => <Chip style={styles.chip}>{children}</Chip>

export default CustomChip
