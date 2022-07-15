<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar
      title="账号登录"
      left-arrow
      @click-left="onBackPageMy"
      class="navbar"
    />
    <!-- 表单部分 -->
    <van-form @submit="onSubmit" class="form">
      <van-field
        v-model="username"
        name="账号"
        placeholder="请输入账号"
        :rules="[{ required: true, message: '请输入账号' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        placeholder="请输入密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
        <van-button block type="info" native-type="submit">登 录</van-button>
      </div>
    </van-form>
    <a href="#/register">还没有账号，去注册~</a>
  </div>
</template>

<script>
import { userLogin } from '@/api/userLogin'
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onBackPageMy() {
      this.$router.replace('/my')
    },
    async onSubmit() {
      const res = await userLogin(this.username, this.password)
      if (res.data.status === 200) {
        // 保存token
        console.log(this.$store)
        this.$store.commit('setUser', res.data.body.token)
        // 登录成功 跳转页面
        this.$toast.success({
          message: '登录成功',
          duration: 1000,
          // 关闭时的回调函数
          onClose: () => {
            // 路由跳转
            this.$router.push({ path: '/user' })
          }
        })
      } else if (
        res.data.status === 401 ||
        this.username !== /^[a-zA-Z0-9]{5,8}$/
      ) {
        this.$toast(res.data.description)
      } else {
        this.$toast.fail(res.data.description)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  background-color: #58b67f;
  margin-bottom: 21px;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  :deep(.van-icon:before) {
    color: #fff;
  }
}
.form {
  margin: 0 3px;
  :deep(.van-field) {
    padding-bottom: 0;
    border-bottom: #ccc;
  }
  :deep(.van-field__control) {
    width: 100%;
    height: 120px;
    padding: 2px 0px;
    color: #000;
    font-size: 34px;
    line-height: 120px;
    // background-color: transparent;
  }
  :deep(.van-button) {
    width: 100%;
    background-color: #56b37b;
    border: none;
    font-size: 36px;
  }
}
a {
  color: #666;
  margin: 0 auto;
  font-size: 16px;
  text-align: center;
  display: block;
}
</style>
