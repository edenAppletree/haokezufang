<template>
  <div>
    <!-- 输入框 -->
    <!-- <input type="text"> -->
    <van-cell-group>
      <van-field v-model="value" label="北京" placeholder="请输入小区或地址" />
    </van-cell-group>
    <van-icon name="location-o" class="icon"/>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <a href="#">
          <img src="http://liufusong.top:8080/img/swiper/2.png" alt="" />
        </a>
      </van-swipe-item>
      <van-swipe-item>
        <a href="#">
          <img src="http://liufusong.top:8080/img/swiper/3.png" alt="" />
        </a>
      </van-swipe-item>
      <van-swipe-item>
        <a href="#">
          <img src="http://liufusong.top:8080/img/swiper/1.png" alt="" />
        </a>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>

<style lang='less' scoped>
/* input {
  position: fixed;
  z-index: 999;
} */
.van-cell {
  position: fixed;
  width: 600px;
  height: 60px;
  top: 40px;
  left: 40px;
  padding: 0 20px;
  align-items: center;
  border-radius: 4px;
  z-index: 999;
}
:deep(.van-cell__value){
  flex: 20;
}
.icon {
  position: fixed;
  z-index: 999;
  right: 40px;
  top: 45px;
}
.my-swipe .van-swipe-item {
  color: #fff;
}
img {
  width: 100%;
  height: 424px;
}
</style>
