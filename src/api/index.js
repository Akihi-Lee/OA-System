import axios from 'axios'
import router from '@/router/index'
import store from '@/store/index'

const toLogin = () => {
    router.push({
        path: '/login',
        query: {
            redirect: router.currentRoute.fullPath
        }
    })
}

const api = axios.create({
    // baseURL: process.env.VUE_APP_API_ROOT,
    timeout: 10000,
    responseType: 'json'
})

api.interceptors.request.use(
    request => {
        if (request.method == 'post') {
            if (request.data instanceof FormData) {
                if (store.getters['user/isLogin']) {
                    request.data.append('token', store.state.user.token)
                }
            } else {
                if (request.data == undefined) {
                    request.data = {}
                }
                if (store.getters['user/isLogin']) {
                    request.data.token = store.state.user.token
                }
            }
        } else {
            if (request.params == undefined) {
                request.params = {}
            }
            if (request.getters['user/isLogin']) {
                request.params.token = store.state.user.token
            }
        }
        return request
    }
)

api.interceptors.response.use(
    response => {
        if (response.data.error != '') {
            if (response.data.status == 0) {
                // 跳转登录
                store.dispatch('user/logout')
                toLogin()
            }
            return Promise.reject(response.data)
        }
        return Promise.resolve(response.data)
    },
    error => {
        return Promise.reject(error)
    }
)

export default api