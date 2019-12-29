/*
 * @description:
 * @author: JXY
 * @Date: 2019-12-28 21:45:38
 * @Email: JXY001a@aliyun.com
 * @LastEditTime : 2019-12-28 22:22:58
 */
function replace(source) {
    return source.replace(/\$/ig,'hahaha');
}

module.exports = function(content) {
    return replace(content);
}
