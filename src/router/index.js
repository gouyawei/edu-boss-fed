import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入路由中需要使用得当组件功能
import Login from '../views/login/index'

Vue.use(VueRouter)

// 路由规则
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
