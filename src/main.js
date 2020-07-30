import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import dayjs from 'dayjs'
import cookies from 'vue-cookies'
import meta from 'vue-meta'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$dayjs = dayjs
Vue.use(cookies)
Vue.use(meta)
Vue.use(ElementUI)
const req = require.context('./assets/icons', false, /\.svg$/)
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
