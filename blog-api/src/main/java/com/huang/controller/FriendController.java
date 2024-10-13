package com.huang.controller;

import com.huang.entity.Friend;
import com.huang.model.Result;
import com.huang.service.FriendService;
import jakarta.annotation.Resource;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * 友链控制器
 *
 * @author huang
 * @since 2024/10/13 14:36
 */
@RestController
public class FriendController {

    @Resource
    private FriendService friendService;

    /**
     * 添加友链
     *
     * @param friendReq 友链信息
     * @return 操作结果
     */
    @PostMapping("/friend")
    public Result addFriend(@RequestBody Friend friendReq) {
        friendService.save(friendReq);
        return Result.success("友链添加成功");
    }
}
