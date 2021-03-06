import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Test from '@/components/Test'
import Foo from '@/components/Foo'
import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/hello',
            name: '登录',
            hidden: true,
            component: Hello
        },
        {
            path: '/',
            name: '首页',
            hidden: true,
            component: Main
        },
        {
            path: '/login',
            name: 'login',
            hidden: true,
            component: Login
        },
        {
            path: '/test',
            name: 'test',
            hidden: true,
            component: Test
        },
        {
            path: '/foo',
            name: 'foo',
            hidden: true,
            component: Foo
        },

    ]
})

