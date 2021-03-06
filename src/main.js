// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './assets/css/styles.css'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.min.css'

import ElementUI from 'element-ui'
import NProgress from 'nprogress'

Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/login') {
    next()
  } else {
    NProgress.start()
    if (!store.getters.getLoginState) {
      next({ path: '/login' })
    } else {
      // setTimeout(() => {next();}, 1000);
      next()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
