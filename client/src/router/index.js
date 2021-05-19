import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/user/:id',
        name: 'User',
        component: () => {
            return import ('../views/User.vue')
        }
    },
    {
        path: '/about',
        name: 'About',
        component: () => {
            return import ( /* webpackChunkName: "about" */ '../views/About.vue')
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router