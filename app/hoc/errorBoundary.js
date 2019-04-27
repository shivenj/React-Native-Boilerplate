import React from 'react'
import PropTypes from 'prop-types'
import { View, Text, StyleSheet } from 'react-native'
// import Logger from '../../utils/logging'

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    })

    // Logger.exception(error, 'componentDidCatch', { info })
    console.error(error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text>Oops, we have encountered an error. We are working on it though! :)</Text>
        </View>
      )
    }
    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
