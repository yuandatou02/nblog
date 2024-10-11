package com.huang.utils;

import com.huang.entity.User;
import com.huang.model.dto.response.LoginResp;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

/**
 * @author huang
 * @since 2024/10/11 15:27
 */
@Mapper(componentModel = "spring")
public interface UserToUserResponseMapper {
    LoginResp toLoginResp(User user);
}
