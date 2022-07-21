<template>
  <div>
    <!-- 顶部导航区域 -->
    <van-nav-bar left-arrow @click-left="onClickLeft">
      <template #title>
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
          <!-- 定位图标 -->
          <van-icon name="location-o" class="icon" />
        </van-cell-group>
      </template>
    </van-nav-bar>
    <!-- 下拉菜单区域 -->
    <van-grid :border="false" class="grid">
      <van-grid-item>
        <template #default>
          <van-dropdown-menu close-on-click-outside>
            <van-dropdown-item title="区域" ref="item" :options="option">
              <div class="btn">
                <van-button block @click="onConfirm"> 取消 </van-button>
                <van-button block @click="onConfirm"> 确认 </van-button>
              </div>
            </van-dropdown-item>
          </van-dropdown-menu>
        </template>
      </van-grid-item>
      <van-grid-item>
        <template #default>
          <van-dropdown-menu close-on-click-outside>
            <van-dropdown-item title="方式" ref="item" :options="option">
              <div class="btn">
                <van-button block @click="onConfirm"> 取消 </van-button>
                <van-button block @click="onConfirm"> 确认 </van-button>
              </div>
            </van-dropdown-item>
          </van-dropdown-menu>
        </template>
      </van-grid-item>
      <van-grid-item>
        <template #default>
          <van-dropdown-menu close-on-click-outside>
            <van-dropdown-item title="租金" ref="item" :options="option">
              <div class="btn">
                <van-button block @click="onConfirm"> 取消 </van-button>
                <van-button block @click="onConfirm"> 确认 </van-button>
              </div>
            </van-dropdown-item>
          </van-dropdown-menu>
        </template>
      </van-grid-item>
      <van-grid-item>
        <template #default>
          <van-dropdown-menu close-on-click-outside>
            <van-dropdown-item title="筛选" ref="item" :options="option">
              <div class="btn">
                <van-button block @click="onConfirm"> 取消 </van-button>
                <van-button block @click="onConfirm"> 确认 </van-button>
              </div>
            </van-dropdown-item>
          </van-dropdown-menu>
        </template>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      switch1: false,
      switch2: false,
      option: [
        { text: '全部商品', value: 0 },
        { text: '新款商品', value: 1 },
        { text: '活动商品', value: 2 }
      ]
    }
  },
  methods: {
    onClickLeft() {
      this.$router.back()
    },
    onConfirm() {
      this.$refs.item.toggle()
    }
  }
}
</script>

<style lang="less" scoped>
// 顶部导航区域
:deep(.van-nav-bar__content) {
  background-color: #58b67f;
  .van-icon-arrow-left {
    color: #ffffff;
  }
  .van-cell {
    position: fixed;
    width: 550px;
    height: 64px;
    top: 15px;
    left: 100px;
    padding: 0 20px;
    align-items: center;
    border-radius: 4px;
    z-index: 99;
    display: flex;
    :deep(.van-cell__value) {
      flex: 20;
      padding: 0 20px;
      color: #a2a4a6;
    }
    :deep(.van-field__label) {
      flex: 6;
      border-right: 1px solid #eee;
    }
  }
  .icon-caret-bottom {
    position: fixed;
    z-index: 999;
    left: 180px;
    top: 25px;
    font-size: 20px;
  }
  .van-icon-search {
    position: fixed;
    z-index: 999;
    left: 250px;
    top: 30px;
    font-size: 38px;
    color: #a2a4a6;
  }
  .icon {
    position: fixed;
    z-index: 999;
    right: 30px;
    top: 28px;
    color: #fff;
    font-size: 42px;
  }
}
// 下拉菜单区域
:deep(.grid) {
  border-bottom: 1px solid #e4e6ef;
  .van-grid-item {
    height: 80px;
  }
}
:deep(.van-dropdown-menu__bar) {
  width: 100%;
  background-color: #fff;
  // border: 0px solid transparent;
  box-shadow: unset;
  height: 80px;
}
</style>
