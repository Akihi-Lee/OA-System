import Vue from 'vue'
import Router from 'vue-router'
// import store from '@/store/index'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // progress bar style

Vue.use(Router)

/**
 *  webpack 使用require.context 可以动态引入文件
 */

const routes = []
const requireModule = require.context('./modules', false, /\.js$/)

requireModule.keys().forEach(fileName => {
    routes.push(requireModule(fileName).default)
})
routes.push({
    path: '*',
    component: () => import('@/view/404'),
    meta: {
        title: '找不到页面'
    }
})
const router = new Router({
    routes: routes.flat()
})
console.log(router)

router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
    NProgress.done()
})

export default router
