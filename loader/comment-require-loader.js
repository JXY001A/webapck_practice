/*
 * @description:
 * @author: JXY
 * @Date: 2019-12-28 21:45:38
 * @Email: JXY001a@aliyun.com
 * @LastEditTime : 2019-12-28 22:22:58
 */
function replace(source) {
    // @require '../style/index.css'
    // return source.replace(/(\/\/ *@require) +(('|").+('|").*)/,'require($1);');
    return source.replace(/\$/ig,'hahaha');
}

module.exports = function(content) {
    console.log(content);
    return replace(content);
}
