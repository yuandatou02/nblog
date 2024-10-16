import type {PageQuery} from "@/model";

/**
 * 友链表单类型
 * @property {string} nickname 昵称
 * @property {string} description 描述
 * @property {string} website 网站
 * @property {string} avatar 头像
 * @property {boolean} isPublished 是否发布
 */
export interface FriendForm {
    nickname: string,
    description: string,
    website: string,
    avatar: string,
    isPublished: boolean
}

/**
 * 友链查询参数
 * @property {number} page 页码
 * @property {number} size 页大小
 * @property {string} keyword 关键词
 */
export interface FriendQuery extends PageQuery {
    /**
     * 关键词
     */
    keyword?: string;
}

/**
 * 友链类型
 * @property {number} id 友链ID
 * @property {string} nickname 昵称
 * @property {string} description 描述
 * @property {string} website 网站
 * @property {string} avatar 头像
 * @property {boolean} isPublished 是否发布
 * @property {number} views 访问量
 * @property {Date} createTime 创建时间
 * @property {Date} updateTime 更新时间
 */
export interface Friend {
    id: number;
    nickname: string;
    description: string;
    website: string;
    avatar: string;
    isPublished: boolean;
    views: number;
    createTime: Date;
    updateTime: Date;
}