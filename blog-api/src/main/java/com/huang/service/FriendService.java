package com.huang.service;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.huang.entity.Friend;
import com.huang.mapper.FriendMapper;
import org.springframework.stereotype.Service;

/**
 * 友链服务类
 *
 * @author huang
 * @since 2024/10/13 14:32
 */
@Service
public class FriendService extends ServiceImpl<FriendMapper, Friend> {
}
