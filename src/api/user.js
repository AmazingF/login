import request from '@/utils/request'
import requestAPI from '@/utils/requestAPI'

export function login(data) {
<<<<<<< HEAD
  return requestAPI({
=======
  return request({
>>>>>>> f87b0adadd754429177f7fab581bda0a211f9eca
    url: '/login',
    method: 'post',
    data
  })
}

<<<<<<< HEAD
export function getInfo(state) {
  return requestAPI({
    url: '/user/info/' + state.id,
=======
export function getInfo(token) {
  return request({
    url: '/user/info',
>>>>>>> f87b0adadd754429177f7fab581bda0a211f9eca
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
