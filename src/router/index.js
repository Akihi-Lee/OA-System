import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

Vue.use(Router)
const router = new Router()

/**
 *  webpack 使用require.context 可以动态引入文件
 */

const modules = require.context('./modules', false, /\.js$/)
console.log(modules.keys())

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
  NProgress.done()
})

export default router
