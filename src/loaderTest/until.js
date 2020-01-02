/*
 * @description:
 * @author: JXY
 * @Date: 2019-12-30 22:11:02
 * @Email: JXY001a@aliyun.com
 * @LastEditTime: 2019-12-30 22:12:36
 */
export function isObject(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
