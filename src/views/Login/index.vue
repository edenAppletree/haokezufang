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
      this.$router.back()
    },
    async onSubmit() {
      const res = await userLogin(this.username, this.password)
      console.log(res)
      if (res.data.status === 200) {
        this.$toast.success('登录成功')
        localStorage.setItem('token', res.data.body.token)
      } else if (res.data.status === 401) {
        this.$toast('您的账号或密码错误')
      } else if (this.username !== /^[a-zA-Z0-9]{5,8}$/) {
        this.$toast('用户名格式5-8位的字母和数字')
      } else {
        this.$toast.fail('登录异常')
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
