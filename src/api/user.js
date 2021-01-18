import request from '@/utils/request'
import requestAPI from '@/utils/requestAPI'

export function login(data) {
  return requestAPI({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo(state) {
  return requestAPI({
    url: '/user/info/' + state.id,
    method: 'get',
    params: { 'access_token': state.token }
  })
}

export function logout() {
  return requestAPI({
    url: '/user/logout',
    method: 'post'
  })
}
