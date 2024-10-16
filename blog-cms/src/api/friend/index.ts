import Request from "@/utils/request";
import type {Friend, FriendForm, FriendQuery} from "@/api/friend/types";
import type {AxiosPromise} from "axios";
import type {PageResult, Result} from "@/model";

/**
 * 删除友链信息
 * @param id 友链id
 * @returns {AxiosPromise<Result<string>>} 返回删除结果
 */
export function delFriendById(id: number): AxiosPromise<Result<string>> {
    return Request({
        url: '/friend',
        method: 'DELETE',
        params: {
            id
        }
    })
}

/**
 * 修改友链信息
 * @param data 更新后的友链信息
 * @returns {AxiosPromise<Result<string>>} 返回修改结果
 */
export function updateFriend(data: FriendForm): AxiosPromise<Result<string>> {
    return Request({
        url: '/friend/update',
        method: 'POST',
        data
    })
}

/**
 * 获取所有友链信息
 * @returns {AxiosPromise<Result<any>>} 返回查询结果
 * @param params 查询参数
 */
export function getFriendsByQuery(params: FriendQuery): AxiosPromise<Result<PageResult<Friend[]>>> {
    return Request({
        url: '/friends',
        method: 'GET',
        params
    })
}

/**
 * 添加友链链接
 * @param data 友链表单数据
 * @returns {AxiosPromise<Result<string>>} 返回添加结果信息
 */
export function addFriend(data: FriendForm): AxiosPromise<Result<string>> {
    return Request({
        url: '/friend',
        method: 'POST',
        data
    })
}

/**
 * 更新好友评论开关
 * @param commentEnabled 是否开启评论
 */
export function updateCommentEnabled(commentEnabled: boolean) {
    return Request({
        url: 'friendInfo/commentEnabled',
        method: 'PUT',
        params: {
            commentEnabled
        }
    })
}