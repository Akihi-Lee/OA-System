import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import cookies from 'vue-cookies'
import meta from 'vue-meta'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'

import antDesinVue from 'ant-design-vue'
Vue.use(antDesinVue)

import api from './api'
Vue.prototype.$api = api

import dayjs from 'dayjs'
Vue.prototype.$dayjs = dayjs
Vue.use(cookies)
Vue.use(meta)

import './mock/index'
import './assets/styles/reset.scss'

const req = require.context('./assets/icons', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
