<template>
  <div class="main">
    <!-- 头部输入框 -->
    <div class="ipt">
      <van-cell-group>
        <van-field
          v-model="value"
          label="北京"
          placeholder="请输入小区或地址"
        />
        <!-- 下箭头 -->
        <span class="iconfont icon-caret-bottom"></span>
        <!-- 搜索图标 -->
        <van-icon name="search" />
      </van-cell-group>
      <!-- 定位图标 -->
      <van-icon name="location-o" class="icon" />
    </div>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swiperList" :key="item.id">
        <a href="#">
          <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
        </a>
      </van-swipe-item>
    </van-swipe>
    <!-- 行为方式 -->
    <van-grid class="grid" :border="false">
      <van-grid-item @click="findHouse">
        <template #default>
          <div class="bg">
            <van-icon name="wap-home-o" />
          </div>
          <span>合租</span>
        </template>
      </van-grid-item>
      <van-grid-item @click="findHouse">
        <template #default>
          <div class="bg">
            <van-icon name="wap-home-o" />
          </div>
          <span>整租</span>
        </template>
      </van-grid-item>
      <van-grid-item>
        <template #default>
          <div class="bg">
            <van-icon name="wap-home-o" />
          </div>
          <span>地图找房</span>
        </template>
      </van-grid-item>
      <van-grid-item @click="addHouse">
        <template #default>
          <div class="bg">
            <van-icon name="wap-home-o" />
          </div>
          <span>去出租</span>
        </template>
      </van-grid-item>
    </van-grid>
    <!-- 租房小组 -->
    <div class="group">
      <van-cell-group>
        <van-cell title="租房小组" value="更多" />
      </van-cell-group>
      <van-grid :border="false" :column-num="2" gutter="10px">
        <van-grid-item v-for="item in groupsList" :key="item.id">
          <template #default>
            <div class="default">
              <div class="img">
                <img :src="`http://liufusong.top:8080${item.imgSrc}`" alt="" />
              </div>
              <div class="text">
                <p>{{ item.title }}</p>
                <p>{{ item.desc }}</p>
              </div>
            </div>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>

<script>
import { swiper, getGroups } from '@/api'
export default {
  data() {
    return {
      value: '',
      swiperList: [],
      groupsList: []
    }
  },
  created() {
    this.swiper()
    this.getGroups()
  },
  methods: {
    async swiper() {
      const res = await swiper()
      this.swiperList = res.data.body
    },
    async getGroups() {
      const res = await getGroups()
      this.groupsList = res.data.body
    },
    findHouse() {
      this.$router.push('/find')
    },
    addHouse() {
      this.$router.push('/addhouse')
    }
  }
}
</script>

<style lang="less" scoped>
.main {
  background-color: #f6f5f6;
  // height: calc(100vh - 100px);
}
// 头部输入框样式
.ipt {
  .van-cell {
    position: fixed;
    width: 620px;
    height: 60px;
    top: 40px;
    left: 40px;
    padding: 0 20px;
    align-items: center;
    border-radius: 4px;
    z-index: 99;
  }
  :deep(.van-cell__value) {
    flex: 20;
    padding: 0 40px;
    color: #a2a4a6;
  }
  :deep(.van-field__label) {
    flex: 6;
    border-right: 1px solid #eee;
  }
  .icon-caret-bottom {
    position: fixed;
    z-index: 999;
    left: 120px;
    top: 55px;
    font-size: 20px;
  }
  .van-icon-search {
    position: fixed;
    z-index: 999;
    left: 180px;
    top: 53px;
    font-size: 38px;
    color: #a2a4a6;
  }
  .icon {
    position: fixed;
    z-index: 999;
    right: 30px;
    top: 45px;
    color: #fff;
  }
}
// 轮播图样式
.my-swipe .van-swipe-item {
  background-color: #fff;
  img {
    width: 100%;
    height: 424px;
  }
}
// 行为方式 部分 样式
.grid {
  .bg {
    width: 120px;
    height: 120px;
    background-color: #f4fbf7;
    border-radius: 50%;
    .van-icon {
      line-height: 120px;
      text-align: center;
      font-size: 60px;
      left: 30px;
    }
  }
  span {
    font-size: 28px;
    color: #333333;
    margin-top: 30px;
  }
}
// 租房小组 部分 样式
.group {
  padding: 20px 0;
  :deep(.van-cell) {
    background-color: #f6f5f6;
    .van-cell__title {
      font-weight: 700;
      font-size: 38px;
    }
    .van-cell__value {
      font-size: 28px;
    }
  }
  :deep(.van-grid-item__content) {
    height: 120px;
    border-radius: 16px;
    .default {
      display: flex;
      align-items: center;
      .img {
        width: 100px;
        height: 100px;
        margin-left: -30px;
        flex: 1;
        img {
          width: 100%;
        }
      }
      .text {
        font-size: 28px;
        padding-left: 30px;
        line-height: 0.5;
      }
    }
  }
}
</style>
