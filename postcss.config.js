/*
 * @description:
 * @author: JXY
 * @Date: 2019-08-16 23:44:09
 * @Email: JXY001a@aliyun.com
 * @LastEditTime: 2019-08-17 15:46:18
 */
module.exports = {
    plugins: [
        /* https://github.com/browserslist/browserslist#best-practices 配置需指定要兼容的浏览器列表 */
        // 自动添加css 属性前缀，保证兼容性
        require('autoprefixer')("last 100 versions")
    ]
}
