/**
 * 登录表单
 * @since 2024年10月11日00:02:30
 * @property username 用户名
 * @property password 密码
 */
export interface LoginForm {
    username: string;
    password: string;
}

/**
 * 用户登录信息
 * @since 2024年10月11日00:02:30
 * @property user 用户信息
 * @property token 登录token
 */
export interface UserInfo {
    user: object;
}