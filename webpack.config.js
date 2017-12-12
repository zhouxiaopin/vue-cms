'use strict';
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.export = {
    entry: {
        main: "./src/index.js"
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'build.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style-loader!css-loader!autoprefixer-loader' },
            { test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader!less-loader' },
            { test: /\.(jpg|png|svg|gif|ttf|woff|woff2)/, loader: 'url-loader', options: { limit: 4096, name: '[name].[ext]' } },
            { test: /\.js$/, loader: 'babel-loader', options: { presets: ['es2015'], plugins: ['transform-runtime'] } },
            { test: /\.vue$/, loader: 'vue-loader' },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

}
