import type {RouteRecordRaw} from "vue-router";
import {createRouter, createWebHistory} from "vue-router";
// 路由数组
const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: '登录',
        component: () => import('@/views/login/index.vue')
    },
    {
        path: '/',
        name: '首页',
        component: () => import('@/views/page/index.vue')
    },
    // 将匹配所有内容并将其放在 `route.params.pathMatch` 下
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/404/index.vue')
    },
];

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;