package com.huang.entity;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.TableField;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * 用户实体类
 *
 * @author huang
 * @since 2024年10月11日13:32
 */
@Data
public class User {
    private Integer id;
    private String username;
    private String password;
    private String nickname;
    private String avatar;
    private String email;
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;
    @TableField(fill = FieldFill.UPDATE)
    private LocalDateTime updateTime;
    private String role;
}
