import request from '@/utils/request'

export function getAllCategory() {
  return request({
    url: '/category/all',
    method: 'post'
  })
}