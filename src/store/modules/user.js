import api from '@/api'
import Hashes from 'jshashes'
const state = {
    token: localStorage.getItem('lee-oa-access-token') || '',
    failureTime: localStorage.failureTime || ''
}

const getters = {
    isLogion: state => {
        if (state.token) {
            return true
        } else {
            return false
        }
    }
}

const actions = {
    login({commit}, data) {
        return new Promise((resolve, reject) => {
            let obj = JSON.parse(JSON.stringify(data))
            obj.password = new Hashes.SHA1().hex(obj.password)
            api.post('mock/member/login', obj).then(res => {
                commit('setAccessToken', res.data)
                resolve(res)
            }).catch(error => {
                reject(error)
            })
        })
    },
    logout({commit}) {
        commit('removeAccessToken')
    }
}

const mutations = {
    setAccessToken(state, data) {
        state.token = data.token
        state.failureTime = data.failureTime
        localStorage.setItem('lee-oa-access-token', data.token)
        localStorage.setItem('failureTime', data.failureTime)
    },
    removeAccessToken(state) {
        state.token = ''
        state.failureTime = ''
        localStorage.removeItem('lee-oa-access-token')
        localStorage.removeItem('failureTime')
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
