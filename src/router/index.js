import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/home',
    component: () => import('@/layout'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
