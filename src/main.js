import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router"
import ElementUI from 'element-ui'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(ElementUI)



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

