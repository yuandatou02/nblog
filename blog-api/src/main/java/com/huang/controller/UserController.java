package com.huang.controller;

import cn.dev33.satoken.stp.StpUtil;
import com.huang.entity.User;
import com.huang.model.Result;
import com.huang.model.dto.request.LoginReq;
import com.huang.model.dto.response.LoginResp;
import com.huang.service.UserService;
import com.huang.utils.UserToUserResponseMapper;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * 用户控制器
 *
 * @author huang
 * @since 2024/10/11 13:38
 */
@RestController
public class UserController {

    @Resource
    private UserService userService;

    @Resource
    private UserToUserResponseMapper toMapper;

    @GetMapping("/logout")
    public Result<String> logout() {
        StpUtil.logout();
        return Result.success("退出成功");
    }

    /**
     * 登录成功后，签发博主身份Token
     *
     * @param loginReq 登录请求参数
     * @return Token
     */
    @PostMapping("/login")
    public Result<Map<String, Object>> login(@RequestBody LoginReq loginReq) {
        User loginUser = userService.login(loginReq);
        if (!"ROLE_admin".equals(loginUser.getRole())) {
            return Result.create(403, "无权限");
        }
        LoginResp loginResp = toMapper.toLoginResp(loginUser);
        StpUtil.login(loginUser.getId());
        Map<String, Object> map = new HashMap<>(4);
        map.put("user", loginResp);
        map.put("token", StpUtil.getTokenValue());
        return Result.success("登录成功", map);
    }
}
