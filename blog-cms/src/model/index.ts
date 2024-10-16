/**
 * 返回结果
 * @property {boolean} flag 返回状态
 * @property {number} code 状态码
 * @property {string} msg 返回信息
 * @property {<T>} data 返回数据
 */
export interface Result<T> {
    flag: boolean;
    code: number;
    msg: string;
    data: T;
}

/**
 * 分页参数
 * @property {number} current 当前页码
 * @property {number} size 每页记录数
 */
export interface PageQuery {
    current: number;
    size: number;
}

/**
 * 分页返回接口
 * @property {<T>} recordList 记录列表
 * @property {number} count 总记录数
 */
export interface PageResult<T> {
    recordList: T;
    count: number;
}