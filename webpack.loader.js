/*
 * @description:
 * @author: JXY
 * @Date: 2019-08-07 21:37:04
 * @Email: JXY001a@aliyun.com
 * @LastEditTime : 2019-12-28 22:20:56
 */
const path = require('path');
const webpack = require('webpack');
module.exports = {
    mode:'development',
    entry: {
        index:'./src/loaderTest/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
            test: /\.js$/,
            use:['comment-require-loader'],
            // 缩小文件搜索范围
            include:path.resolve(__dirname,'src'),
        }],
    },
    resolveLoader:{
        modules: [ 'node_modules','./loader/'],
    },
    devtool:'inline-source-map',
};
