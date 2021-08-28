import request from '@/utils/request'

export function getPermissionList(data) {
  return request({
    url: '/action/index',
    method: 'post',
    data
  })
}
