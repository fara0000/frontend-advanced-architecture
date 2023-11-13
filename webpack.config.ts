import webpack from "webpack";
import * as path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: webpack.Configuration = {
    mode: "development",
    entry: path.resolve(__dirname, 'src', 'index.ts'),
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
        new webpack.ProgressPlugin(), //показывает прогресс
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/, // ts и tsx будет обрабатывать
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'], // расширение при импорте
    }
}

export default config;
