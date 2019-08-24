/*
 * @description:
 * @author: JXY
 * @Date: 2019-08-07 21:37:04
 * @Email: JXY001a@aliyun.com
 * @LastEditTime: 2019-08-24 23:24:48
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =  require('clean-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const Happypack  = require('happypack');
module.exports = {

    // mode: 'development',
    mode: 'production',
    entry: {
        index:'./src/index.jsx'
    },
    output: {
        filename: '[name]_[hash].js',
        path: path.resolve(__dirname, 'dist/code'),
    },
    module: {
        rules: [{
            test: /\.css$/,
            use:['happypack/loader?id=css'],
            // 缩小文件搜索范围
            include:path.resolve(__dirname,'src'),
        },{
            test: /\.scss$/,
            use:['happypack/loader?id=scss'],
            // 缩小文件搜索范围
            include:path.resolve(__dirname,'src'),
        },{
            test:/\.(png|svg|jpg|gif)$/,
            use:['happypack/loader?id=file'],
        },{
            test:/\.(jsx|js)$/,
            use:['happypack/loader?id=babel'],
            // 配置babel 只转换 src 目录下的文件 jsx | js 文件，降低转换消耗
            include:path.resolve(__dirname,'src'),
        }],
    },
    resolve:{
        // 当从npm package 中 import 一个模块时，该选项用于判断优先加载源文件提供的那个包，一般位于package.json中的 main(默认) ， browser(浏览器) ，module(node 等) 等指定 ，一般情况向
        // 大多数模块都只是用 main 模块，所以可直接设置为 main 减少依据target判断
        mainFields:['main'],
        // 指明第三方库的存放位置，从而减少搜索步骤
        modules:[path.resolve(__dirname,'node_modules')],
    },
    // 为你提供了一个简单的 web server，并且具有 live reloading(实时重新加载) 功能
    devServer:{
        // 将 dist 目录下的文件 serve 到 localhost:8080
        contentBase:'/dist',
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
        // By default, this plugin will remove all files inside webpack's output.path directory
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'webapck practice && study',
            template:'./src/index.html',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({
            // 全局导入 loadsh ，jquery 库，无需每次import
            _:'loadsh',
            $:'jquery',
            // 使用数组路径的方式指定只是用的某些 loadsh 库方法，可直接使用
            join:['loadsh','join']
        }),
        // 引用打包好的 dll 文件
        new webpack.DllReferencePlugin({
            // 每个dll文件对应的 manifest.json 的路径
            manifest: path.resolve(__dirname,'dist/dll/react_manifest.json'),
        }),
        new webpack.DllReferencePlugin({
            // 每个dll文件对应的 manifest.json 的路径
            manifest: path.resolve(__dirname,'dist/dll/util_manifest.json'),
        }),
        // 注入 提前编译号的 dll 文件
        new AddAssetHtmlPlugin({ filepath: path.resolve(__dirname,'dist/dll/*.dll.js') }),

        new Happypack({
            id:'css',
            loaders: [
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
            ],
        }),

        new Happypack({
            id:'scss',
            loaders: [
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
                'sass-loader'
            ],
        }),

        new Happypack({
            id:'file',
            loaders:['file-loader']
        }),
        new Happypack({
            id:'babel',
            loaders:[
                // babel-loader 开启缓存 ，将编译结果缓存至 node_modules/.cache/babel-loader ，或是本地系统的临时文件夹中
                'babel-loader?cacheDirectory'
            ],
        }),

    ],
};
