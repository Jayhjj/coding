import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

const routerHistory = createWebHistory()
const router = createRouter({
    history:routerHistory,
    routes:[
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home,
            meta: {
              index: 1
            }
        },
        {
            path:'/login',
            name:'login',
            component:() => import('@/views/Login.vue')
        }
    ]
})
export default router