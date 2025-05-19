import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

// import route components dynamically to get lazy loaded chunks
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue') // ✅ lazy-loaded chunk
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue') // ✅ code split
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
