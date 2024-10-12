import {useCookies} from "@vueuse/integrations/useCookies";

const cookies = useCookies();

const TOKEN_KEY: string = "admin_token";

// 保存token
export function setToken(token: string) {
    cookies.set(TOKEN_KEY, token);
}

// 获取token
export function getToken() {
    return cookies.get(TOKEN_KEY);
}

// 删除token
export function removeToken() {
    cookies.remove(TOKEN_KEY);
}