/*
 * @description:
 * @author: JXY
 * @Date: 2019-08-07 21:37:04
 * @Email: JXY001a@aliyun.com
 * @LastEditTime: 2019-08-11 11:55:57
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =  require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.jsx',
    watch:true,
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
