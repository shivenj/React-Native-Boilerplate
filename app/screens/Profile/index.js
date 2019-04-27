import React from 'react'
import { View } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import Header from 'components/Header'
import { Button } from 'components/RootForm'
import rootStyles from 'styles'
import { logout } from 'screens/Auth/thunks'

const Profile = ({ logout }) => (
  <View style={rootStyles.rootContainer}>
    <Header name="PROFILE" />
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button handlePress={logout} mode="contained" dark>Logout</Button>
    </View>

  </View>
)

Profile.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  logout: PropTypes.func,
}

const mapState = () =>
  createStructuredSelector({

  })

const mapDispatch = { logout }

export default connect(
  mapState,
  mapDispatch,
)(Profile)
