import request from '@/utils/request'

export const favorite = (token) => {
  return request({
    url: '/user/favorites',
    headers: {
      authorization: token
    }
  })
}

export const getHouseDetail = (id) => {
  return request({
    url: '/houses/{id}',
    params: {
      id
    }
  })
}
