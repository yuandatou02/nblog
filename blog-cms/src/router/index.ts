import type {RouteRecordRaw} from "vue-router";
import {createRouter, createWebHistory} from "vue-router";
import Layout from "@/layout/index.vue";
// 路由数组
export const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        name: '登录',
        component: () => import('@/views/login/index.vue'),
        meta: {title: '后台登录管理', hidden: true}
    },
    {
        path: '/',
        name: '首页',
        component: Layout,
    },
    // 将匹配所有内容并将其放在 `route.params.pathMatch` 下
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/404/index.vue')
    },
    {
        path: '/page',
        name: 'Page',
        redirect: '/page/site',
        component: Layout,
        meta: {title: '页面管理', icon: 'el-icon-document-copy'},
        children: [
            {
                path: 'site',
                name: 'SiteSetting',
                component: () => import('@/views/page/SiteSetting.vue'),
                meta: {title: '站点设置', icon: 'bianjizhandian'}
            },
            {
                path: 'friend',
                name: 'FriendList',
                component: () => import('@/views/page/FriendList.vue'),
                meta: {title: '友链管理', icon: 'friend'}
            },
            {
                path: 'about',
                name: 'About',
                component: () => import('@/views/page/About.vue'),
                meta: {title: '关于我', icon: 'el-icon-tickets'}
            },
        ]
    },
];

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;