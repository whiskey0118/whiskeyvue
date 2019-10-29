import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Foo from '@/components/Foo'
import Test from '@/components/Test'
import Test2 from '@/components/test/Test2'

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
            path: '/foo',
            name: 'foo',
            hidden: true,
            component: Foo
        },
        {
            path: '/test',
            name: 'test',
            hidden: true,
            component: Test
        },
        {
            path: '/test2',
            name: 'test2',
            hidden: true,
            component: Test2
        },

    ]
})

