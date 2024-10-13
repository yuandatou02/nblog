import Request from "@/utils/request";
import type {FriendForm} from "@/api/friend/types";
import type {AxiosPromise} from "axios";
import type {Result} from "@/model";

/**
 * 添加友链链接
 * @param data 友链表单数据
 * @returns {AxiosPromise<Result<string>>} 返回添加结果信息
 */
export function addFriend(data: FriendForm): AxiosPromise<Result<string>> {
    return Request({
        url: 'friend',
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