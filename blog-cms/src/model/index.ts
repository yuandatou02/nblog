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