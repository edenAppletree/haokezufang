<template>
  <div>
    <!-- 头部导航栏 -->
    <van-nav-bar
      title="收藏列表"
      left-arrow
      @click-left="onClickLeft"
      class="navbar"
    />
    <!-- 收藏列表 -->
    <div
      v-for="(item, index) in list"
      :key="index"
      class="list"
      @click="detailFn"
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
    <!-- 三级路由出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
import { favorate } from '@/api/favorate'
export default {
  data() {
    return {
      list: []
    }
  },
  async created() {
    try {
      const res = await favorate(this.$store.state.user)
      this.list = res.data.body
      console.log(res.data.body)
    } catch (e) {
      console.log(e.message)
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    detailFn() {
      this.$router.replace('/favorate/details')
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  background-color: #58b67f;
  color: #fff;
  :deep(.van-nav-bar__title) {
    color: #fff;
  }
  :deep(.van-icon-arrow-left:before) {
    color: #fff;
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
</style>
