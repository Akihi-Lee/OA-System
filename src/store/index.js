import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const modules = {}
const requireModule = require.context('./modules', false, /.js$/)
requireModule.keys().forEach(fileName => {
    modules[fileName.slice(2, -3)] = requireModule(fileName).default
})

export default new Vuex.Store({
    modules: modules,
    strict: process.env.NODE_ENV !== 'production'
})
