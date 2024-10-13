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