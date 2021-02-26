import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

const routerHistory = createWebHistory()
const router = createRouter({
    history:routerHistory,
    routes:[
        {
            path:'/',
            name:'home',
            components:Home
        },
        {
            path:'/login',
            name:'login',
            components:Login,
            meta: { redirectAlreadyLogin: true }
        }
    ]
})
export default router