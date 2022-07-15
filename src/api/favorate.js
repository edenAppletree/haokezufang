import request from '@/utils/request'

export const favorate = (token) => {
  return request({
    url: '/user/favorites',
    headers: {
      authorization: token
    }
  })
}
