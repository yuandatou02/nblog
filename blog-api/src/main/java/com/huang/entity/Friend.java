package com.huang.entity;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.time.LocalDateTime;

/**
 * Friend实体类
 *
 * @author huang
 * @since 2024/10/13 14:26
 */
@Data
public class Friend {
    @TableId(type = IdType.AUTO)
    private Integer id;
    //昵称
    private String nickname;
    //描述
    private String description;
    //站点
    private String website;
    //头像
    private String avatar;
    //公开或隐藏
    private Boolean isPublished;
    //浏览次数
    private Integer views;
    //创建时间
    @TableField(fill = FieldFill.INSERT)
    private LocalDateTime createTime;
    //更新时间
    @TableField(fill = FieldFill.INSERT_UPDATE)
    private LocalDateTime updateTime;
}
