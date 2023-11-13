const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        // так же filename можно указывать динамически,
        // тогда будет создаться в бандле main.js
        // это помогает кэшировать файлы, браузер их кэширует
        filename: "[name].[contenthash].js",
        // очищает старые билды
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.html')
        }),
    ]
}
