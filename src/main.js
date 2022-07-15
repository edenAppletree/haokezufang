import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'
// 引入iconfont css样式
import '@/assets/icon/iconfont.css'

Vue.use(Vant)

Vue.config.productionTip = false

// 全局前置守卫
// const isLogin = false
// router.beforeEach((to, from, next) => {
//   if (to.path === '/user' && !isLogin) {
//     alert('尚未登录，请登录')
//     next(false)
//   } else {
//     next()
//   }
// })

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
