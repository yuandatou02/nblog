package com.huang.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * 分页结果
 *
 * @author huang
 * @since 2024/10/16 11:30
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class PageResult<T> {

    /**
     * 分页结果
     */
    private List<T> recordList;

    /**
     * 总数
     */
    private Long count;

}
