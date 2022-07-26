<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      title="城市列表"
      left-arrow
      @click-left="onClickLeft"
      class="navbar"
      fixed
      z-index="999"
    />
    <!-- 列表部分 -->
    <!-- 其他所有城市列表 -->
    <van-index-bar :index-list="indexList" :sticky-offset-top="45" sticky>
        <div style="height:45px"></div>
        <!-- 当前城市 -->
        <van-index-anchor index="#">当前城市</van-index-anchor>
        <van-cell title="北京" />
        <!-- 热门城市 -->
        <van-index-anchor index="热">热门城市</van-index-anchor>
        <van-cell
          :title="item.label"
          v-for="item in hotCityList"
          :key="item.value"
        />
      <div v-for="item in indexList.slice(2)" :key="item">
        <van-index-anchor :index="item" />
        <van-cell
          :title="item"
          v-for="(item, index) in indexListObj[item]"
          :key="index"
        />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
import { getCityList, getHotCityList } from '@/api'
export default {
  data() {
    return {
      indexList: [],
      indexListObj: {},
      cityList: [],
      hotCityList: []
    }
  },
  created() {
    this.getCityList()
    this.getHotCityList()
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    // 获取城市列表数据--一级城市列表
    async getCityList() {
      const res = await getCityList('1')
      this.cityList = res.data.body
      // 遍历数组，找到城市名缩写,变大写,获得首字母
      this.cityList.forEach((item) => {
        const firstCharact = item.short.toUpperCase().charAt(0)
        if (this.indexListObj[firstCharact]) {
          this.indexListObj[firstCharact].push(item.label)
        } else {
          this.indexListObj[firstCharact] = [item.label]
        }
        //   给字母进行排序
        return this.indexListObj
      })
      this.indexList = Object.keys(this.indexListObj).sort()
      // 给indexList追加索引
      this.indexList.unshift('#', '热')
      //   console.log(this.indexListObj)
    },
    async getHotCityList() {
      const res = await getHotCityList()
      this.hotCityList = res.data.body
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  background-color: #58b67f;
  :deep(.van-nav-bar__title) {
    color: #ffffff;
  }
  :deep(.van-icon-arrow-left:before) {
    color: #ffffff;
  }
}
:deep(.van-index-anchor) {
  height: 74px;
  color: #999;
}
:deep(.van-cell) {
  height: 100px;
  color: #333;
  font-size: 32px;
}
// 侧边栏样式
:deep(.van-index-bar__sidebar) {
  display: flex;
  flex-direction: column;
  align-items: space-between;
  margin-top: 30px;
  .van-index-bar__index {
    font-size: 28px;
    padding: 10px;
    color: #333;
    margin: 4px 10px;
  }
  .van-index-bar__index--active {
    color: #ffffff;
    background-color: #58b67f;
    border-radius: 50px;
  }
}
</style>
