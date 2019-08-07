const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} =  require('clean-webpack-plugin');
module.exports = {
    entry: './src/index.js',
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
        }],
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title:'webapck practice'
        }),
    ],
};
