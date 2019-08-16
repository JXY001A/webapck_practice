/*
 * @description:
 * @author: JXY
 * @Date: 2019-08-07 21:37:04
 * @Email: JXY001a@aliyun.com
 * @LastEditTime: 2019-08-16 23:45:28
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =  require('clean-webpack-plugin');
module.exports = {

    mode: 'development',
    // mode: 'production',
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

    optimization: {
        // 标注那些导入的模块被使用
        usedExports: true,
        // 标注一个模块有哪些被导出的组件
        providedExports:true,
    },
    output: {
        filename: 'bundle_[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                {
                    loader:'css-loader',
                    // 开启css modules
                    options:{
                        modules:{
                            /*
                                path : css 文件路径
                                name : css 文件名
                                local: class 名
                                hash:base64:5: 5为base64字符
                            */
                            // localIdentName: '[path][name]__[local]__[hash:base64:5]',
                            localIdentName: '[name]___[hash:base64:5]',
                        },

                    },
                },
                'postcss-loader',
                // 集成postCss
                // {
                //     loader: 'postcss-loader',
                //     options: {
                //       ident: 'postcss',
                //       plugins: [
                //         require('autoprefixer')({}),
                //       ]
                //     }
                // }
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
    // 为你提供了一个简单的 web server，并且具有 live reloading(实时重新加载) 功能
    devServer:{
        // 将 dist 目录下的文件 serve 到 localhost:8080
        contentBase:'./dist',
        // 开启热启动模式，在重新刷新页面的情况下，更新页面内容
        hot: true,
        port:8000,
        open: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                pathRewrite: {'^/api' : ''}
            }
        },
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'webapck practice'
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
};
