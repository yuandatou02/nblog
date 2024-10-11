package com.huang.service;

import cn.dev33.satoken.secure.SaSecureUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.huang.entity.User;
import com.huang.mapper.UserMapper;
import com.huang.model.dto.request.LoginReq;
import org.springframework.stereotype.Service;
import org.springframework.util.Assert;

/**
 * 用户service
 *
 * @author huang
 * @since 2024/10/11 13:37
 */
@Service
public class UserService extends ServiceImpl<UserMapper, User> {

    /**
     * 获取登录用户信息
     *
     * @param loginReq 登录请求参数
     * @return 登录用户信息
     */
    public User login(LoginReq loginReq) {
        // 通过用户名和密码查询用户信息
        User user = getOne(new LambdaQueryWrapper<>(User.class).eq(User::getUsername, loginReq.getUsername()));
        // 判断用户是否存在
        Assert.notNull(user, "用户不存在");
        // 判断密码是否正确
        Assert.isTrue(SaSecureUtil.sha256(loginReq.getPassword()).equals(user.getPassword()), "密码错误");
        // 返回用户信息
        return user;
    }
}
