<template>
  <div>
    <!-- 个人信息模块 -->
    <!-- 已登录 -->
    <div class="mytitle1" v-if="isLogin">
      <img src="http://liufusong.top:8080/img/avatar.png" />
      <div class="tourist">
        <div class="hi">
          <img :src="`http://liufusong.top:8080${userInfo.avatar}`" />
        </div>
        <p class="user">{{ userInfo.nickname }}</p>
        <button @click="outFn">退出</button>
        <div class="personal">
          <span>编辑个人资料</span>
          <i class="iconfont icon-caret-right"></i>
        </div>
      </div>
    </div>
    <!-- 未登录 -->
    <div class="mytitle2" v-else>
      <img src="http://liufusong.top:8080/img/profile/bg.png" alt="" />
      <div class="tourist">
        <div class="hi">
          <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="" />
        </div>
        <p>游客</p>
        <button @click="loginFn">去登录</button>
      </div>
    </div>
    <!-- 宫格模块 -->
    <van-grid :column-num="3" icon-size="24px">
      <van-grid-item icon="star-o" text="我的收藏" @click="favoriteFn" />
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
  </div>
</template>

<script>
import { getUserInfo } from '@/api/userLogin'
export default {
  data() {
    return {
      userInfo: {}
    }
  },
  methods: {
    // 点击去登录
    loginFn() {
      this.$router.replace('/login')
    },
    // 退出登录
    outFn() {
      this.$dialog
        .confirm({
          title: '提示',
          message: '是否确定退出？'
        })
        .then(() => {
          // localStorage.clear()
          this.$store.commit('setUser', '')
        })
        .catch(() => {
          // on cancel
        })
    },
    // 点击进入我的收藏
    favoriteFn() {
      if (this.isLogin) {
        this.$router.push('/favorite')
      } else {
        this.$router.replace('/login')
      }
    },
    // 点击进入我的出租
    rentFn() {
      if (this.isLogin) {
        this.$router.push('/rent')
      } else {
        this.$router.replace('/login')
      }
    },
    async getUserInfo() {
      if (this.isLogin) {
        try {
          const res = await getUserInfo()
          // console.log(res)
          this.userInfo = res.data.body
        } catch (e) {
          this.$router.fail('请重新登录')
        }
      }
    }
  },
  created() {
    this.getUserInfo()
  },
  computed: {
    isLogin() {
      return !!this.$store.state.user
    }
  }
}
</script>

<style lang="less" scoped>
.mytitle1 {
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
.mytitle2 {
  width: 100%;
  height: 600px;
  position: relative;
  border: 3px solid transparent;
  img {
    width: 100%;
  }
  .tourist {
    position: absolute;
    width: 85%;
    height: 330px;
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
    p {
      font-size: 26px;
      color: #333;
      margin: -50px 0px 25px;
    }
    button {
      width: 140px;
      height: 60px;
      font-size: 26px;
      line-height: 60px;
      background-color: #58b67f;
      color: #fff;
      border: 1px solid #ddd;
      border-radius: 8px;
      padding: 0 5px;
      display: inline-block;
    }
  }
}
:deep(.van-grid-item__content::after) {
  border: 0;
  line-height: 1.15;
}
:deep(.van-grid-item__content) {
  padding: 40px 0px;
}
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
