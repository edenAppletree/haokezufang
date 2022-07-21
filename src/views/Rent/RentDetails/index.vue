<template>
  <div class="bg">
    <!-- 头部导航 -->
    <van-nav-bar
      :title="detailObj.community"
      left-arrow
      @click-left="onClickLeft"
    />
    <!-- 图片区域 -->
    <div class="houseImg">
      <img :src="`http://liufusong.top:8080${detailObj.houseImg[0]}`" />
    </div>
    <!-- 房子详情区 -->
    <div class="detail">
      <!-- 第一行 -->
      <van-row align="center">
        <van-col span="24" class="first">
          <p>{{ detailObj.title }}</p>
          <button>{{ detailObj.tags[0] }}</button>
        </van-col>
      </van-row>
      <!-- 第二行 -->
      <van-row align="center" class="second">
        <van-col span="8">
          <p>{{ detailObj.price }}<i>/月</i></p>
          <span>租金</span>
        </van-col>
        <van-col span="8">
          <p>{{ detailObj.roomType }}</p>
          <span>房型</span>
        </van-col>
        <van-col span="8">
          <p>{{ detailObj.size ? detailObj.size : '暂无' }}</p>
          <span>面积</span>
        </van-col>
      </van-row>
      <!-- 第三行 -->
      <van-row align="center" class="third">
        <van-col span="12">
          <p>装修：<span>精装</span></p>
          <p>
            楼层：<span>{{ detailObj.floor }}</span>
          </p>
        </van-col>
        <van-col span="12">
          <p>
            朝向：<span>{{ detailObj.oriented[0] }}</span>
          </p>
          <p>类型：<span>普通住宅</span></p>
        </van-col>
      </van-row>
    </div>
    <!-- 地图详情区 -->
    <dir class="location">
      <div class="addname">
        <p>小区：天山星城</p>
      </div>
      <!-- <div class="map"><img src="" /></div> -->
      <baidu-map class="map" center="周口"></baidu-map>
    </dir>
    <!-- 房屋配套 -->
    <div class="fit">
      <div class="housefit">
        <p>房屋配套</p>
      </div>
      <van-grid :border="false" :column-num="5" class="grid">
        <van-grid-item
          class="grid_item"
          v-for="item in detailObj.supporting"
          :key="item"
        >
          <template #default>
            <span
              :class="`iconfont icon-${
                {
                  电视: 'dianshiji',
                  洗衣机: 'xiyiji',
                  宽带: 'kuandai',
                  热水器: 'reshuiqi',
                  沙发: 'shafa',
                  衣柜: 'yigui',
                  冰箱: 'bingxiang',
                  暖气: 'nuanqi-',
                  天然气: 'tianranqi',
                  空调: 'kongtiao'
                }[item]
              }`"
              class="icon"
            ></span>
            <span>{{ item }}</span>
          </template>
        </van-grid-item>
      </van-grid>
    </div>
    <!-- 房源概况 -->
    <div class="message">
      <div class="title">
        <p>房源概况</p>
      </div>
      <div class="content">
        <div class="head">
          <div class="left">
            <span>
              <img src="http://liufusong.top:8080/img/avatar.png" alt="" />
            </span>
            <span class="text">
              <p class="ownername">王女士</p>
              <p class="ownerIdentify"><span>111</span>已认证房主</p>
            </span>
          </div>
          <button class="btn">发消息</button>
        </div>
        <div class="houseDetailMessage">{{ detailObj.description }}</div>
      </div>
    </div>
    <!-- 猜你喜欢 -->
    <div class="guess">
      <div class="title">
        <p>猜你喜欢</p>
      </div>
      <div
        v-for="(item, index) in houseList"
        :key="index"
        class="list"
        @click="detailFn(item.houseCode)"
      >
        <van-card
          :desc="item.desc"
          :title="item.title"
          :thumb="`http://liufusong.top:8080${item.houseImg}`"
        >
          <template #tags>
            <div v-for="item in item.tags" :key="item">
              <van-tag plain type="danger">{{ item }}</van-tag>
            </div>
          </template>
        </van-card>
        <span class="price">
          <span>{{ item.price }}</span>
          <i>元/月</i>
        </span>
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
import { getHouseDetail } from '@/api'
export default {
  data() {
    return {
      active: '',
      id: '',
      detailObj: {},
      // 猜你喜欢 静态数据
      houseList: [
        {
          desc: '72.32㎡/南 北/低楼层',
          houseCode: 'e4ac804d-a760-7ccf',
          houseImg: '/img/message/1.png',
          price: 4500,
          tags: ['随时看房'],
          title: '安贞西里 3室1厅'
        },
        {
          desc: '83㎡/南/高楼层',
          houseCode: 'e4ac804d-a760-7ccf',
          houseImg: '/img/message/2.png',
          price: 7200,
          tags: ['近地铁'],
          title: '天居园 2室1厅'
        },
        {
          desc: '52㎡/西南/低楼层',
          houseCode: 'e4ac804d-a760-7ccf',
          houseImg: '/img/message/3.png',
          price: 4300,
          tags: ['集中供暖'],
          title: '角门甲4号院 1室1厅'
        }
      ]
    }
  },
  created() {
    this.getHouseDetail()
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    async getHouseDetail() {
      // 获取从列表页传过来的houseCode码
      this.id = this.$route.query.id
      const res = await getHouseDetail(this.id)
      this.detailObj = res.data.body
      console.log(res.data.body)
    }
  }
}
</script>

<style lang="less" scoped>
.bg {
  background-color: #f6f5f6;
  // height: calc(100vh - 100px);
  margin-bottom: 100px;
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
  margin-bottom: -10px;
  img {
    width: 100%;
  }
}
// 房子信息详情区
.detail {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  // 第一行样式
  .first {
    border-bottom: 2px solid #cecece;
    p {
      font-size: 32px;
      color: #333;
      margin: 20px 0;
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
      margin: -20px 0 20px 0;
    }
    i {
      font-size: 26px;
      font-weight: 400;
    }
    span {
      display: inline-block;
      font-size: 28px;
      color: #999;
    }
    :deep(.van-col) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 40px 0;
      line-height: 1.5;
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
  height: 500px;
  padding: unset;
  margin-bottom: 0;
  margin-top: -10px;
  .addname {
    height: 88px;
    font-size: 28px;
    line-height: 88px;
    padding: 0 20px;
    background-color: #fff;
  }
  .map {
    height: 80%;
  }
}
// 房屋配套部分样式
.fit {
  padding: 0 20px;
  background-color: #fff;
  .housefit {
    height: 120px;
    line-height: 120px;
    border-bottom: 1px solid #ccc;
    p {
      margin-top: 0;
      font-size: 30px;
      font-weight: 700;
    }
  }
  .grid {
    .grid_item {
      margin-top: 10px;
      font-size: 26px;
      .icon {
        font-size: 46px;
        margin-bottom: 16px;
      }
      :deep(.van-grid-item__content) {
        padding-bottom: 20px;
      }
    }
  }
}
// 房源概况部分样式
.message {
  padding: 0 20px;
  background-color: #fff;
  margin-top: 20px;
  .title {
    height: 120px;
    line-height: 120px;
    border-bottom: 1px solid #ccc;
    p {
      margin-top: 0;
      font-size: 30px;
      font-weight: 700;
    }
  }
  .content {
    height: 80%;

    .head {
      display: flex;
      height: 120px;
      margin: 20px 0;
      align-items: center;
      justify-content: space-between;
      .left {
        display: flex;
        img {
          width: 104px;
          height: 104px;
        }
        .text {
          font-size: 28px;
          line-height: 0.5;
          margin-left: 20px;
          .ownerIdentify {
            font-size: 24px;
            color: red;
          }
        }
      }
      .btn {
        width: 128px;
        height: 60px;
        font-size: 28px;
        line-height: 28px;
        text-align: center;
        color: #33be85;
        background-color: #fff;
        border: 1px solid #33be85;
        border-radius: 4px;
        margin-right: 30px;
      }
    }
    .houseDetailMessage {
      font-size: 28px;
      line-height: 1.75;
    }
  }
}
// 猜你喜欢部分样式
.guess {
  padding: 0 20px;
  background-color: #fff;
  margin-top: -10px;
  .title {
    height: 120px;
    line-height: 120px;
    margin-top: 30px;
    border-bottom: 1px solid #ccc;
    p {
      margin-top: 0;
      font-size: 30px;
      font-weight: 700;
    }
  }
  .list {
    position: relative;
  }
  .van-card {
    padding: 36px 0 0;
    :deep(.van-image__img) {
      width: 212px;
      height: 160px;
      border-radius: 3px;
    }
    :deep(.van-card__content) {
      overflow: hidden;
      line-height: 44px;
      padding-left: 44px;
      .van-card__title {
        font-size: 30px;
        font-weight: 700;
        line-height: 0.53rem;
      }
      .van-card__desc {
        font-size: 16px;
        color: #afb2b3;
      }
      .van-tag {
        color: #39becd;
        background: #e1f5f8;
        border-radius: 3px;
        padding: 4px 5px;
        margin-right: 5px;
        font-size: 20px;
        border: 0 solid transparent;
      }
      .van-card__price-integer {
        color: #fa5741;
        font-size: 30px;
        font-weight: 600;
      }
      .van-card__price-currency {
        display: none;
      }
    }
  }
  .price {
    //   display: inline-block;
    position: absolute;
    left: 235px;
    bottom: 10px;
    font-size: 34px;
    color: #fa5741;
    z-index: 999;
    span {
      font-weight: 700;
    }
    i {
      font-size: 16px;
      margin-left: 5px;
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
  background-color: #fff;
  .van-col {
    border: 1px solid #ccc;
  }
  .call {
    background-color: #58b67f;
    color: #fff;
  }
}
</style>
