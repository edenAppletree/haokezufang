import request from '@/utils/request'

export const favorite = (token) => {
  return request({
    url: '/user/favorites',
    headers: {
      authorization: token
    }
  })
}

export const getHouseDetail = (code) => {
  return request({
    url: `/houses/${code}`
  })
}
