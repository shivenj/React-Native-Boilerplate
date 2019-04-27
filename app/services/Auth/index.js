import { client } from 'services'

/**
 * @returns user info, role and token
 */
const login = ({ email, password, deviceToken: device_token, deviceType: device_type }) =>
  client
    .post('/login', {
      email,
      password,
      device_token,
      device_type,
    })
    .then(response => response.data)

/**
 * @returns user info, role and token
 */
const register = ({
  email,
  password,
  name,
  deviceToken,
  deviceType,
}) => 
  client
    .post('/register', {
      email,
      password,
      name,
      deviceToken,
      deviceType,
    })
    .then(response => response.data)


export { login, register }
