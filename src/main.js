import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import ElementUI from 'element-ui'
import Foo from '@/components/Foo'
import Hello from "@/components/Hello";

Vue.config.productionTip = false
Vue.use(VueRouter)


const routes = [
  { path: '/foo', component: Foo },
  {path: '/', component: Hello}
]

const router = new VueRouter({
  routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

