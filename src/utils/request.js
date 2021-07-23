import axios from 'axios'
import { Message } from 'element-ui'
// import { Message } from 'element-ui'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000
})

service.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const data = response.data
  if (data.code !== 1) {
    Message({
      type: 'error',
      message: data.msg,
      duration: 3000
    })
  }
  return data
}, error => {
  return Promise.reject(error)
})

export default service