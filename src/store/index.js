import {createStore} from 'vuex'
import menu from './menu'
import createPersistedstate from 'vuex-persistedstate'
import { pl } from 'element-plus/es/locales.mjs'
export default createStore ({
    plugins: [createPersistedstate({
        key: 'pz_v3pz', //存储的key值
        //paths: ['menu'] //需要持久化的state
    })],
    modules: {
        menu
    }
})