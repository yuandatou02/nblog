package com.huang.controller;

import com.huang.entity.Friend;
import com.huang.model.PageResult;
import com.huang.model.Result;
import com.huang.model.dto.request.FriendReq;
import com.huang.service.FriendService;
import jakarta.annotation.Resource;
import org.apache.ibatis.annotations.Param;
import org.springframework.web.bind.annotation.*;

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
     * 修改友链列表
     *
     * @param friend 友链信息
     * @return 操作结果
     */
    @PostMapping("/friend/update")
    public Result<String> updateFriend(@RequestBody Friend friend) {
        friendService.updateById(friend);
        return Result.success("友链更新成功");
    }

    /**
     * 删除友链
     *
     * @param id 友链id
     * @return 操作结果
     */
    @DeleteMapping("/friend")
    public Result<String> deleteFriend(@Param("id") Integer id) {
        friendService.removeById(id);
        return Result.success("友链删除成功");
    }

    /**
     * 查看友链后台列表
     *
     * @param friendQuery 查询条件
     * @return {@link PageResult<Friend>} 后台友链列表
     */
    @GetMapping("/friends")
    public Result<PageResult<Friend>> listFriendBackVO(FriendReq friendQuery) {
        return Result.success("友链分页查询成功", friendService.listFriendBackVO(friendQuery));
    }

    /**
     * 添加友链
     *
     * @param friendReq 友链信息
     * @return 操作结果
     */
    @PostMapping("/friend")
    public Result<String> addFriend(@RequestBody Friend friendReq) {
        friendService.save(friendReq);
        return Result.success("友链添加成功");
    }
}
