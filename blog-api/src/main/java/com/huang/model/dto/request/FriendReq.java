package com.huang.model.dto.request;

import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * 友链请求参数
 *
 * @author huang
 * @since 2024/10/16 11:43
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class FriendReq extends PageReq {
    /**
     * 搜索内容
     */
    private String keyword;
}
