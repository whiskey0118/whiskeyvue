import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import ElementUI from 'element-ui';
import Foo from '@/components/Foo';
import Hello from "@/components/Hello";
import Test from "@/components/Test";

Vue.config.productionTip = false
Vue.use(VueRouter)


const routes = [
  { path: '/foo', component: Foo },
  {path: '/', component: Hello},
  {path: '/test', component: Test}
]

const router = new VueRouter({
  routes
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

