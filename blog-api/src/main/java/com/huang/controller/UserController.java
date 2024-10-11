package com.huang.controller;

import com.huang.service.UserService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.RestController;

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
}
