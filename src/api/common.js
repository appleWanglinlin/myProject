import request from '@/utils/request'

export function getAllCategory(params) {
  return request({
    url: '/api/barcode',
    method: 'get',
    params
  })
}