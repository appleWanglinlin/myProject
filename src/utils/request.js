import axios from 'axios'
import { Message } from 'element-ui'
// import { getToken } from '@/utils/auth'

const service = axios.create({
  baseURL: '/owms-server'
})

service.interceptors.request.use(config => {
  config.headers['Authorization'] = 'Bearer null'
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(response => {
  const data = response.data
  if (data.code !== 200) {
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