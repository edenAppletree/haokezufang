import request from '@/utils/request'

export const myRent = (token) => {
  return request({
    url: '/user/houses',
    headers: {
      authorization: token
    }
  })
}
