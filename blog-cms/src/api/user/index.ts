import request from '@/utils/request'
import type {LoginForm} from './types'
import type {AxiosPromise} from 'axios'
import type {Result} from "@/model";

/**
 * 用户登录方法
 * @param data  用户登录表单数据
 * @returns  token
 */
export function login(data: LoginForm): AxiosPromise<Result<string>> {
    return request({
        url: '/login',
        method: 'POST',
        data
    })
}

/**
 * 用户登出方法
 */
export function logout() {
    return request({
        url: '/logout',
        method: 'GET'
    });
}