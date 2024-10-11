package com.huang.service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.huang.entity.User;
import com.huang.mapper.UserMapper;
import org.springframework.stereotype.Service;

/**
 * 用户service
 *
 * @author huang
 * @since 2024/10/11 13:37
 */
@Service
public class UserService extends ServiceImpl<UserMapper, User> {
}
