import request from '@/utils/request'

// 首页轮播图
export const swiper = () => {
  return request({
    url: '/home/swiper'
  })
}

// 租房小组
export const getGroups = (id) => {
  return request({
    url: '/home/groups',
    params: {
      area: id
    }
  })
}
