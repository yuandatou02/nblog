package com.huang.model.dto.request;

import com.huang.constant.PageConstant;
import lombok.Data;

/**
 * 分页查询条件
 *
 * @author huang
 * @since 2024/10/16 11:41
 */
@Data
public class PageReq {

    /**
     * 当前页
     */
    private Integer current;

    /**
     * 条数
     */
    private Integer size;

    public Integer getCurrent() {
        return current == null ? (PageConstant.DEFAULT_CURRENT - 1) * getSize() : (current - 1) * getSize();
    }

    public Integer getSize() {
        return size == null ? PageConstant.MY_SIZE : size;
    }

}
