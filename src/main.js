// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Icon from 'vue-awesome'
import Storage from './utils/storage'
import AC from './plugin/ac'

Vue.config.productionTip = false
Vue.component('icon', Icon)
Vue.use(AC, {router, roles: []})
Object.defineProperty(Vue.prototype, '$storage', {
  get () {
    return new Storage()
  }
})
/* eslint-disable no-new */
/* router.beforeEach((to, from, next) => {
  // console.log('to :', to, 'from :', from)
  next()
}) */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
