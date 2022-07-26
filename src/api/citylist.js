import request from '@/utils/request'

// 获取城市列表数据
export const getCityList = (level) => {
  return request({
    url: '/area/city',
    params: {
      level
    }
  })
}

// 热门城市列表
export const getHotCityList = () => {
  return request({
    url: '/area/hot'
  })
}
