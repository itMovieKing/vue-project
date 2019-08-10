// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import Car from './components/Car.vue'
import store from './vuex/store'

Vue.config.productionTip = false

Vue.prototype.$http=axios

Vue.directive('focus',{
	inserted(el){
		el.focus()
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
