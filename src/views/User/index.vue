<template>
  <div>
    <!-- 个人信息模块 -->
    <div class="mytitle">
      <img src="http://liufusong.top:8080/img/avatar.png" alt="" />
      <div class="tourist">
        <div class="hi">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
        </div>
        <p class="user">好客_845296</p>
        <button @click="outFn">退出</button>
        <div class="personal">
          <span>编辑个人资料</span>
          <i class="iconfont icon-caret-right"></i>
        </div>
      </div>
    </div>
    <!-- 宫格模块 -->
    <van-grid :column-num="3" icon-size="24px">
      <van-grid-item icon="star-o" text="我的收藏" @click="favorateFn" />
      <van-grid-item icon="wap-home-o" text="我的出租" @click="rentFn" />
      <van-grid-item icon="clock-o" text="看房记录" /><br />
      <van-grid-item icon="orders-o" text="成为房主" />
      <van-grid-item icon="manager-o" text="个人资料" />
      <van-grid-item icon="service-o" text="联系我们" />
    </van-grid>
    <!-- 加入好客 -->
    <div class="joinhk">
      <img src="http://liufusong.top:8080/img/profile/join.png" alt="" />
    </div>
    <!-- 三级路由出口 -->
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    outFn() {
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否确定退出？'
        })
        .then(() => {
          localStorage.clear()
          this.$router.push('/my')
        })
        .catch(() => {
          // on cancel
        })
    },
    favorateFn() {
      this.$router.push('/favorate')
    },
    rentFn() {
      this.$router.push('/rent')
    }
  }
}
</script>

<style lang="less" scoped>
.mytitle {
  width: 100%;
  height: 750px;
  position: relative;
  border: 3px solid transparent;
  img {
    width: 100%;
  }
  .tourist {
    position: absolute;
    width: 85%;
    height: 55%;
    background-color: #fff;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    box-shadow: 0 0 10px 3px #ddd;
    .hi {
      transform: translateY(-50%);
      width: 120px;
      height: 120px;
      overflow: hidden;
      text-align: center;
      background-color: #fff;
      display: inline-block;
      border-radius: 50%;
      padding: 10px;
      border: 1px solid #ccc;
    }
    .user {
      font-size: 26px;
      color: #333;
      margin: -50px 0px 25px;
    }
    button {
      width: 120px;
      height: 50px;
      font-size: 24px;
      line-height: 50px;
      background-color: #21b97a;
      color: #fff;
      border: 1px solid #ddd;
      border-radius: 50px;
      padding: 2px 15px;
      margin-top: -20px;
      // display: inline-block;
    }
    .personal {
      // display: flex;
      // align-items: space-between;
      text-align: center;
      font-size: 16px;
      color: #ccc;
      margin-top: 50px;
    }
    // .edit {
    // }
  }
}
:deep(.van-grid-item__content::after) {
  border: 0;
  line-height: 1.15;
}
:deep(.van-grid-item__content) {
  padding: 40px 0px;
}
// :deep(.van-grid-item__text) {
//   font-size: 16px;
// }
.joinhk {
  width: 700px;
  height: 170px;
  margin: 10px auto 0px;
  img {
    width: 100%;
    text-align: center;
  }
}
</style>
