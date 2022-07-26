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
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/favorite',
    component: () => import('@/views/Favorite')
  },
  {
    path: '/details',
    component: () => import('@/views/Favorite/Details')
  },
  {
    path: '/rent',
    component: () => import('@/views/Rent')
  },
  {
    path: '/rentdetails',
    component: () => import('@/views/Rent/RentDetails')
  },
  {
    path: '/addhouse',
    component: () => import('@/views/Rent/addHouse')
  },
  {
    path: '/citylist',
    component: () => import('@/views/CityList')
  }
]

const router = new VueRouter({
  routes
})

export default router
