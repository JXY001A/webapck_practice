/*
 * @description:
 * @author: JXY
 * @Date: 2019-08-07 21:37:04
 * @Email: JXY001a@aliyun.com
 * @LastEditTime: 2019-08-11 12:12:06
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =  require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.jsx',

    /*
        // <webpack 观察者模式配置方式实现>

        // 启动监听模式，一旦有文件被监听到改变，webpack将自动重新构建产物
        watch:true,
        // 监听模式的配置参数，watch:true 是会生效
        watchOptions:{
            // 坚挺到文件变化，等待300ms再重新构建，防止更新太快导致编频率过高，出现卡顿情况
            aggregateTimeout: 300,
            // 指定不用监听的文件
            ignored:/node_modules/,
            // 表示默认每秒钟询问操作系统文件是否改变的频率
            poll:1000,
        },
    */


    output: {
        filename: 'bundle_[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        },{
            test:/\.(png|svg|jpg|gif)$/,
            use:[
                'file-loader'
            ]
        },{
            test:/\.(jsx|js)$/,
            use:[
                'babel-loader'
            ]
        }],
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'webapck practice'
        }),
    ],
};
