import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/layout',
    component: () => import('@/views/Layout'),
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home')
      },
      {
        path: '/find',
        component: () => import('@/views/Find')
      },
      {
        path: '/news',
        component: () => import('@/views/News')
      },
      {
        path: '/my',
        component: () => import('@/views/My')
      },
      {
        path: '/user',
        component: () => import('@/views/User')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/favorate',
    component: () => import('@/views/User/Favorate'),
    children: [
      {
        path: '/details',
        component: () => import('@/views/User/Favorate/Details')
      }
    ]
  },
  {
    path: '/rent',
    component: () => import('@/views/User/Rent')
  }
]

const router = new VueRouter({
  routes
})

export default router
