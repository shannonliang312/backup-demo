import Vue from 'vue'
import Vuex from 'vuex'
import Promise from 'promise-polyfill'

import loginStore from './login'
import  roleStore from './role'

/* 兼容IE */
if (!window.Promise) {
  window.Promise = Promise;
}

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
  modules: {
    loginStore,
    roleStore
  }
})