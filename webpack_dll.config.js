/*
 * @description:
 * @author: JXY
 * @Date: 2019-08-07 21:37:04
 * @Email: JXY001a@aliyun.com
 * @LastEditTime: 2019-08-24 18:49:49
 */
const path = require('path');
const webpack = require('webpack');
module.exports = {
    // mode: 'development',
    mode: 'production',
    entry:{
        react:['react','react-dom','dva'],
        util:['loadsh','jquery'],
    },
    output:{
        filename:'[name].dll.js',
        path:path.resolve(__dirname,'dist','dll'),
        // 存放动态连接库的全局变量名称，例如 react 就是 _dll_react,
        library:'_dll_[name]',
    },
    plugins:[
        // 接入dall
        new webpack.DllPlugin({
            /* conext: '默认 webpack context' */
            // 动态连接库全局变量名称，需要和output。output 保持一致，同时该字段还是 manifest.json 文件中的 name 字段
            name:'_dll_[name]',
            // manifest.json 文件的绝对路径
            path: path.join(__dirname,'dist/dll' ,'[name]_manifest.json'),
        }),
    ]
};
