<template>
  <div class="bg">
    <!-- 头部导航 -->
    <van-nav-bar title="亮马水晶" left-arrow @click-left="onClickLeft" />
    <!-- 图片区域 -->
    <div class="houseImg">
      <img src="" />
    </div>
    <!-- 房子详情区 -->
    <div class="detail">
      <!-- 第一行 -->
      <van-row align="center">
        <van-col span="24" class="first">
          <p>修狗之家</p>
          <button>近地铁</button>
        </van-col>
      </van-row>
      <!-- 第二行 -->
      <van-row align="center" class="second">
        <van-col span="8">
          <p>1000<i>/月</i></p>
          <span>租金</span>
        </van-col>
        <van-col span="8">
          <p>四室</p>
          <span>房型</span>
        </van-col>
        <van-col span="8">
          <p>200平米</p>
          <span>面积</span>
        </van-col>
      </van-row>
      <!-- 第三行 -->
      <van-row align="center" class="third">
        <van-col span="12">
          <p>装修：<span>精装</span></p>
          <p>楼层：<span>精装</span></p>
        </van-col>
        <van-col span="12">
          <p>朝向：<span>精装</span></p>
          <p>类型：<span>精装</span></p>
        </van-col>
      </van-row>
    </div>
    <!-- 地图详情区 -->
    <dir class="location">
      <div class="addname">
        <p>小区：天山星城</p>
      </div>
      <div class="map"><img src="" /></div>
    </dir>
    <!-- 房屋配套 -->
    <div class="fit">
      <div class="housefit">
        <h5>房屋配套</h5>
      </div>
      <div>
        <van-grid :border="false" :column-num="5" class="grid">
          <van-grid-item class="grid_item">
            <span class="iconfont icon-caret-bottom"></span>
            <span>衣柜</span>
          </van-grid-item>
        </van-grid>
      </div>
    </div>
    <!-- 底部tab栏 -->
    <div>
      <van-row class="tab">
        <van-col span="8"><van-icon name="star" color="red" /> 收藏</van-col>
        <van-col span="8">在线咨询</van-col>
        <van-col span="8" class="call">电话预约</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import { getHouseDetail } from '@/api/favorite'
export default {
  name: 'details',
  data() {
    return {
      active: '',
      id: ''
    }
  },
  created() {
    this.getHouseDetail()
    this.id = this.$router.query.id
    console.log(this.id)
  },
  methods: {
    onClickLeft() {
      this.$router.push('/favorite')
    },
    async getHouseDetail() {
      const res = await getHouseDetail()
      console.log(res)
    }
  }
}
</script>

<style lang="less" scoped>
.bg {
  background-color: #eee;
  height: calc(100vh - 100px);
}
// 顶部导航区
:deep(.van-nav-bar__content) {
  background-color: #58b67f;
  .van-nav-bar__title {
    color: #fff;
  }
  .van-icon-arrow-left {
    color: #fff;
  }
}
// 图片区
.houseImg {
  width: 100%;
  height: 500px;
  background-color: pink;
}
// 房子信息详情区
.detail {
  height: 533px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  margin-bottom: 10px;
  // 第一行样式
  .first {
    border-bottom: 2px solid #cecece;
    p {
      font-size: 32px;
      color: #333;
      margin: 32px 0;
    }
    button {
      font-size: 24px;
      background-color: #e1f5f8;
      color: #39becd;
      margin-right: 10px;
      margin-bottom: 35px;
      padding: 8px 10px;
      border: unset;
    }
  }
  //  第二行样式
  .second {
    text-align: center;
    border-bottom: 2px solid #cecece;
    p {
      font-size: 40px;
      font-weight: 700;
      color: #fa5741;
    }
    i {
      font-size: 26px;
      font-weight: 400;
    }
    span {
      display: inline-block;
      font-size: 28px;
      color: #999;
      margin-top: -20px;
    }
    .van-col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 40px;
      // padding-left: 20px;
    }
  }
  .third {
    font-size: 26px;
    margin-top: 10px;
    p {
      color: #999;
    }
    span {
      color: #333;
    }
  }
}
// 地图详情区
.location {
  height: 380px;
  background-color: pink;
  padding: unset;
  .addname {
    height: 88px;
    font-size: 28px;
    line-height: 88px;
    padding: 0 20px;
    background-color: #fff;
  }
  .map {
    height: 100%;
    background-color: red;
  }
}
// 房屋配套部分样式
.fit {
  height: 400px;
  padding: 0 20px;
  background-color: yellow;
  margin-top: 10px;
  .housefit {
    height: 96px;
    line-height: 96px;
    border-bottom: 1px solid #ccc;
  }
  .grid {
    .grid_item {
      margin: 20px 0;
      font-size: 28px;
    }
  }
}
// 底部样式
.tab {
  position: fixed;
  width: 100%;
  height: 100px;
  line-height: 100px;
  bottom: 0;
  left: 0;
  font-size: 34px;
  display: flex;
  text-align: center;
  color: #999;
  .van-col {
    border: 1px solid #ccc;
  }
  .call {
    background-color: #58b67f;
    color: #fff;
  }
}
</style>
