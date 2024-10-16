package com.huang.service;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.huang.entity.Friend;
import com.huang.mapper.FriendMapper;
import com.huang.model.PageResult;
import com.huang.model.dto.request.FriendReq;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

/**
 * 友链服务类
 *
 * @author huang
 * @since 2024/10/13 14:32
 */
@Service
public class FriendService extends ServiceImpl<FriendMapper, Friend> {

    /**
     * 查询分页后台友链列表
     *
     * @param friendReq 查询条件
     * @return 分页结果
     */
    public PageResult<Friend> listFriendBackVO(FriendReq friendReq) {
        // 分页查询
        Page<Friend> page = new Page<>(friendReq.getCurrent(), friendReq.getSize());
        // 查询友链列表
        Page<Friend> friendPage = baseMapper.selectPage(page, new LambdaQueryWrapper<Friend>()
                .like(StringUtils.hasText(friendReq.getKeyword()), Friend::getNickname, friendReq.getKeyword())
        );
        // 返回
        return new PageResult<>(friendPage.getRecords(), friendPage.getTotal());
    }
}
