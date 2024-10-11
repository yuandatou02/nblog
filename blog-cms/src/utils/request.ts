// 引入 axios
import axios from "axios";
// 引入进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// 创建axios实例
const request = axios.create({
    baseURL: '/api',
    timeout: 5000
});

// 请求拦截器
request.interceptors.request.use(config => {
    //进度条开始
    NProgress.start();
    return config;
}, error => {
    // 请求错误时做些事
    return Promise.reject(error);
});

// 响应拦截器
request.interceptors.response.use(response => {
    //进度条结束
    NProgress.done();
    const res = response.data;
    if (res.code !== 200) {
        const message = res.msg || 'Error';
        ElMessage.error(msg)
        return Promise.reject(new Error(message));
    }
    return res;
}, error => {
    // 响应错误时做些事
    ElMessage.error(error.message)
    return Promise.reject(error);
});

// 导出request
export default request;