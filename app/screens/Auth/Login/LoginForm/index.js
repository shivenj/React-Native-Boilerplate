import React, { Component } from 'react'
import { TextInput, Button } from 'components/RootForm'
import { View } from 'react-native'
import validate from 'utilities/Validations'

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      secureTextEntry: true,
      error: {},
    }
    this.email = React.createRef()
    this.password = React.createRef()
  }

  onChange = (value, name) => {
    this.setState({ [name]: value })
  }

  onAccessoryPress = () => {
    this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }))
  }

  onSubmit = () => {
    const { handleSubmit } = this.props
    const { email, password, error } = this.state
    error.email = validate('email', email)
    error.password = validate('password', password)
    if (error.email || error.password) {
      this.setState({ error })
    } else {
      handleSubmit(this.state)
    }
    // validate('email', email)
    //
  }

  focusNextField = nextField => {
    this[nextField].current._root.focus()
  }

  render() {
    const { email, password, secureTextEntry, error } = this.state
    const { loading } = this.props
    return (
      <View>
        <TextInput
          label="Email"
          value={email}
          refs={this.email}
          error={error.email}
          handleSubmitEditing={() => this.focusNextField('password')}
          handleChange={value => this.onChange(value, 'email')}
          returnKeyType="next"
        />
        <TextInput
          label="Password"
          value={password}
          refs={this.password}
          error={error.password}
          secureTextEntry={secureTextEntry}
          handleChange={value => this.onChange(value, 'password')}
          handleSubmitEditing={this.onSubmit}
          returnKeyType="done"
          handleAccessoryPress={this.onAccessoryPress}
        />
        <Button dark mode="contained" handlePress={this.onSubmit}>
          Login
        </Button>
      </View>
    )
  }
}

export default LoginForm
