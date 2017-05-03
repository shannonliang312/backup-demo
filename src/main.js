// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/styles.css'
import './assets/css/vuetify-material.css'
// import 'element-ui/lib/theme-default/index.css'
import 'vuetify/dist/vuetify.min.css'
import 'font-awesome/css/font-awesome.min.css'
import 'animate.css/animate.min.css'

// import ElementUI from 'element-ui'
import Vuetify from 'vuetify'
 


Vue.config.productionTip = false

// Vue.use(ElementUI);
Vue.use(Vuetify);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
