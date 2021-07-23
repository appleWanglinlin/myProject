import request from '@/utils/request'

export function getAllCategory() {
  return request({
    url: '/test',
    method: 'get'
  })
}