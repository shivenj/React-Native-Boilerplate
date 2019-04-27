import axios from 'axios'
import Connection from 'config/Connection'
import { logout } from 'screens/Auth/thunks'
import store from 'store'

const checkStatus = status => status >= 200 && status < 300

const client = axios.create({
  baseURL: Connection.getResturl(),
  headers: {
    Accept: '*/*',
    'Content-Type': 'application/json',
  },
  validateStatus: checkStatus,
})

// Add token for every request if provided
client.interceptors.request.use(config => {
  const { auth: user } = store.getState()
  if (user && user.token) {
    config.headers.authorization = `${user.token}`
  }
  return Promise.resolve(config)
})

client.interceptors.response.use(
  response => response,
  error => {
    const { status } = error.response
    if (status === 401) {
      store.dispatch(logout())
    }
    return Promise.reject(error)
  },
)

export { client }

export * from './Auth'
