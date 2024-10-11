package com.huang.model.dto.request;

import lombok.Data;

/**
 * 用户请求登录信息
 *
 * @author huang
 * @since 2024/10/11 13:44
 */
@Data
public class LoginReq {
    private String username;
    private String password;
}
