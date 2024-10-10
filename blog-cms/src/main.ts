import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// 引入路由
import router from '@/router'
const app = createApp(App)
// 引入unoCss
import 'virtual:uno.css'
// 引入样式重置
import '@unocss/reset/tailwind.css'
const pinia = createPinia()
app.use(pinia)
// 注册路由
app.use(router)

app.mount('#app')
