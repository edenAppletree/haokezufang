<template>
  <div class="bg">
    <!-- 头部导航栏 -->
    <van-nav-bar
      title="发布房源"
      left-arrow
      @click-left="onClickLeft"
      class="navbar"
    />
    <!-- 表单标题 -->
    <div class="title">
      <p>房源信息</p>
    </div>
    <!-- 表单 -->
    <form class="form">
      <!-- 小区名称 只读输入框 -->
      <van-cell-group>
        <van-field label="小区名称" readonly>
          <template #extra>
            <span class="xiaoqu">请输入小区名称</span>
            <van-icon name="arrow" />
          </template>
        </van-field>
      </van-cell-group>
      <!-- 租金 建筑面积 -->
      <van-field
        v-model="number1"
        type="number"
        label="租金"
        placeholder="请输入租金/月"
      >
        <template #extra>
          <span class="xiaoqu">￥/月</span>
        </template>
      </van-field>
      <van-field
        v-model="number2"
        type="number"
        label="建筑面积"
        placeholder="请输入建筑面积"
      >
        <template #extra>
          <span class="xiaoqu">㎡</span>
        </template>
      </van-field>
      <!-- 户型 所在楼层 朝向 -->
      <div>
        <van-field
          readonly
          clickable
          name="picker"
          :value="value"
          label="户 型"
          @click="showPicker = true"
        >
          <template #extra>
            <span class="xiaoqu">请选择</span>
            <van-icon name="arrow" /> </template
        ></van-field>
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns_huxing"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
      </div>
      <div>
        <van-field
          readonly
          clickable
          name="picker"
          :value="value"
          label="所在楼层"
          @click="showPicker = true"
        >
          <template #extra>
            <span class="xiaoqu">请选择</span>
            <van-icon name="arrow" /> </template
        ></van-field>
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns_huxing"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
      </div>
      <div>
        <van-field
          readonly
          clickable
          name="picker"
          :value="value"
          label="朝 向"
          @click="showPicker = true"
        >
          <template #extra>
            <span class="xiaoqu">请选择</span>
            <van-icon name="arrow" /> </template
        ></van-field>
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="columns_huxing"
            @confirm="onConfirm"
            @cancel="showPicker = false"
          />
        </van-popup>
      </div>
      <!-- 房屋标题 -->
      <div class="housetitle">
        <div class="ht">房屋标题</div>
        <van-field
          v-model="message"
          rows="1"
          autosize
          type="textarea"
          placeholder="请输入标题（例如：整租 小区名 2室 5000元）"
        />
      </div>
      <!-- 房屋图像 -->
      <div class="houseimg">
        <div class="hi">房屋图像</div>
        <div class="slotimg">
          <van-icon name="plus" size="50px" color="#ececec" />
        </div>
      </div>
      <!-- 房屋配置 -->
      <div class="housesupport">
        <div class="hs">房屋配置</div>
        <div class='supports'></div>
      </div>
      <!-- 房屋描述 -->
    </form>
    <div class="housedesc">
      <div class="hd">房屋描述</div>
      <van-field
        v-model="message"
        rows="1"
        autosize
        type="textarea"
        placeholder="请输入房屋描述信息"
      />
    </div>
    <!-- 底部tab栏 -->
    <footer class="tab">
      <div class="cancel">取消</div>
      <div class="commit">提交</div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      columns_huxing: ['一室', '二室', '三室', '四室'],
      columns_louceng: ['高楼层', '中楼层', '低楼层'],
      columns_chaoxiang: ['东', '西', '南', '北'],
      showPicker: false,
      number1: '',
      number2: ''
    }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onConfirm(value) {
      this.value = value
      this.showPicker = false
    }
  }
}
</script>

<style lang="less" scoped>
.bg {
  padding-bottom: 100px;
  background-color: #f6f5f6;
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
.title {
  height: 100px;
  line-height: 100px;
  padding-left: 30px;
  border-bottom: 1px solid #ececec;
  background-color: #fff;
  p {
    margin-top: 0;
    font-size: 30px;
    color: #58b67f;
  }
}
// 表单部分
.form {
  background-color: #fff;
  .xiaoqu {
    color: #acacac;
  }
  :deep(.van-icon-arrow:before) {
    color: #d2d2d6;
    font-size: 38px;
    margin-top: 4px;
  }
  :deep(.van-overlay) {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .van-picker {
    height: 600px;
    :deep(.van-picker__toolbar) {
      border-bottom: 1px solid #ececec;
    }
    :deep(.van-picker__cancel),
    :deep(.van-picker__confirm) {
      color: #418ce2;
      font-size: 40px;
    }
  }
  .housetitle {
    .ht {
      height: 40px;
      font-size: 28px;
      padding: 30px 0 10px 30px;
      border-bottom: 1px solid #ececec;
    }
    :deep(.van-field__control) {
      font-size: 26px;
    }
  }
  .houseimg {
    .hi {
      height: 40px;
      font-size: 28px;
      padding: 30px 0 10px 30px;
      border-bottom: 1px solid #ececec;
    }
    .slotimg {
      width: 200px;
      height: 200px;
      border: 3px solid #ececec;
      margin: 10px 0 30px 20px;
      text-align: center;
      line-height: 235px;
    }
  }
  .housesupport {
    .hs {
      height: 40px;
      font-size: 28px;
      padding: 30px 0 10px 30px;
      border-bottom: 1px solid #ececec;
    }
    .supports {
      height: 200px;
    }
  }
}
// 房屋描述
.housedesc {
  margin: 30px 0;
  background-color: #fff;
  .hd {
    height: 40px;
    font-size: 28px;
    padding: 30px 0 10px 30px;
    border-bottom: 1px solid #ececec;
  }
  :deep(.van-field__control) {
    font-size: 26px;
  }
}
// 底部栏
.tab {
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  width: 750px;
  height: 80px;
  font-size: 30px;
  line-height: 80px;
  border-top: 1px solid #f5f5f9;
  .cancel {
    background-color: #fff;
    color: #58b67f;
    flex: 1;
    text-align: center;
  }
  .commit {
    background-color: #58b67f;
    color: #fff;
    text-align: center;
    flex: 1;
  }
}
</style>
