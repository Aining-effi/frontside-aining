import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由信息数组
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    // redirect: '/tables/information',
    children: [{
      path: 'geoInformation',
      name: 'geoInformation',
      component: () => import('../views/baiduUI/geoInformation.vue')
    },
    {
      path: 'manholeCover',
      name: 'manholeCover',
      component: () => import('../views/baiduUI/manholeCover.vue')
    },
    {
      path: 'opticalFiberDetection',
      name: 'opticalFiberDetection',
      component: () => import('../views/baiduUI/opticalFiberDetection.vue')
    },
    {
      path: 'websiteTour',
      name: 'websiteTour',
      component: () => import('../views/baiduUI/websiteTour.vue')
    }
    /**
    {
      path: 'history',
      name: 'history',
      component: () => import('../views/tables/history.vue')
    },
    {
      path: 'information',
      name: 'information',
      component: () => import('../views/tables/information.vue')
    }
    */
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
