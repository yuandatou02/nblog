import type { RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory } from "vue-router";
// 路由数组
const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: '登录',
        component: () => import('@/views/login/index.vue')
    }
];

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;