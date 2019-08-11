/*
 * @description: webpack nodeAPI 启动方式
 * @author: JXY
 * @Date: 2019-08-11 12:13:23
 * @Email: JXY001a@aliyun.com
 * @LastEditTime: 2019-08-11 12:38:40
 */

const webpack = require('webpack');
const config = require('./webpack.config');

// 启动执行 webpack ,拿到编译器
const compiler = webpack(config);


//  调用编译器watch 方法，启动 watch 模式，并配置参数
const watching = compiler.watch({
    /* watchOptions 配置 */
    // 坚挺到文件变化，等待300ms再重新构建，防止更新太快导致编频率过高，出现卡顿情况
    aggregateTimeout: 300,
    // 指定不用监听的文件
    ignored: /node_modules/,
    // 表示默认每秒钟询问操作系统文件是否改变的频率，默认不要传递参数可能会导致不能正常监听
    poll: undefined,
}, (error, stats) => {
    // 每次文件改变都会重新构建
    console.log('构建成功');
});


/*
    // watching.close 方法关闭监听模式
    watching.close(() => {
        // watch 模式关闭后执行
    })
*/
