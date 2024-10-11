package com.huang.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.huang.entity.User;
import org.apache.ibatis.annotations.Mapper;

/**
 * 用户Mapper
 *
 * @author huang
 * @since 2024/10/11 13:35
 */

@Mapper
public interface UserMapper extends BaseMapper<User> {
}
