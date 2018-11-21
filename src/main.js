// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ajax from './ajax/index'
import sessionStorage from './utils/sessionStorage'
Vue.config.productionTip = false

import { ToastPlugin } from 'vux'

Vue.use(ToastPlugin)
import './assets/rem'
//将axios挂载到Vue实例中的$ajax上面,在项目中的任何位置通过this.$ajax使用
Vue.prototype.$ajax = ajax
Vue.prototype.$ss = sessionStorage
/* eslint-disable no-new */
const V = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  store
})

export default V
