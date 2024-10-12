// 引入新的样式重置
import '@unocss/reset/eric-meyer.css'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
// 引入全局样式
import '@/assets/styles/index.scss'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入svg组件
import SvgIcon from "@/components/SvgIcon/index.vue";
import "virtual:svg-icons-register";

const app = createApp(App)
// 引入unoCss
import 'virtual:uno.css'
// 引入样式重置,这个样式会导致element-plus的样式失效
// import '@unocss/reset/tailwind.css'
// 引入pinia持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
// 注册pinia
const pinia = createPinia()
// 使用pinia持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
// 注册路由
app.use(router)
// 注册svg组件
app.component("svg-icon", SvgIcon);
app.mount('#app')
