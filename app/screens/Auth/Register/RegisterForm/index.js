import React, { Component } from 'react'
import { TextInput, Button } from 'components/RootForm'
import { View, Keyboard } from 'react-native'
import validate from 'utilities/Validations'

class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      name: '',
      password: '',
      secureTextEntry: true,
      error: {},
    }
    this.email = React.createRef()
    this.name = React.createRef()
    this.password = React.createRef()
  }

  changeImage = () => {
    
  }

  onAccessoryPress = () => {
    this.setState(({ secureTextEntry }) => ({ secureTextEntry: !secureTextEntry }))
  }

  onChange = (value, name) => {
    this.setState({ [name]: value })
  }

  handleSubmit = () => {
    Keyboard.dismiss()
    const { handleSubmit } = this.props
    const { email, name, password, error } = this.state
    error.name = validate('name', name)
    error.email = validate('email', email)
    error.password = validate('password', password)
    if (error.name || error.email || error.password) {
      this.setState({ error })
    } else {
      handleSubmit(this.state)
    }
  }

  focusNextField = nextField => {
      this[nextField].current._root.focus()
  }

  render() {
    const {
      email,
      password,
      name,
      secureTextEntry,
      error,
    } = this.state
    const { loading } = this.props
    return (
      <View>
          <TextInput
            label="Full Name"
            value={name}
            error={error.name}
            handleChange={value => this.onChange(value, 'name')}
            refs={this.name}
            handleSubmitEditing={() => this.focusNextField('email')}
            returnKeyType="next"
          />
          <TextInput
            label="Email"
            value={email}
            error={error.email}
            handleChange={value => this.onChange(value, 'email')}
            refs={this.email}
            handleSubmitEditing={() => this.focusNextField('password')}
            returnKeyType="next"
          />
          <TextInput
            label="Password"
            value={password}
            error={error.password}
            secureTextEntry={secureTextEntry}
            handleAccessoryPress={this.onAccessoryPress}
            handleChange={value => this.onChange(value, 'password')}
            refs={this.password}
            handleSubmitEditing={this.handleSubmit}
            returnKeyType="done"
          />

          <Button loading={loading} dark mode="contained" handlePress={this.handleSubmit}>
            Register
          </Button>
      </View>
    )
  }
}

export default RegisterForm
