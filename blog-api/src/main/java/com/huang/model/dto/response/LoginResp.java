package com.huang.model.dto.response;

import lombok.Data;

/**
 * 用户响应对象
 *
 * @author huang
 * @since 2024/10/11 15:01
 */
@Data
public class LoginResp {
    private String username;
    private String nickname;
    private String avatar;
    private String email;
}
