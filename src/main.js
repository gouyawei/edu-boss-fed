import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入element-ui 模块包
import ElementUI from 'element-ui'
// 引入element 的主题文件
// import 'element-ui/lib/theme-chalk/index.css'
// 引入自定义的全局样式文件
import './styles/index.scss'
// 将element 注册为 Vue 插件
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
