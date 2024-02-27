import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

/**
 * Файл содержит все Плагины'ы проекта
 *
 */

export function buildPlugins({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        // js file into html
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        // progress and time of build
        new webpack.ProgressPlugin(),
        // extract css file for each js file (when needed)
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        // DefinePlugin - for global variables
        new webpack.DefinePlugin({
            __IS_DEV__: isDev,
        }),
        // HotModuleReplacementPlugin - live refresh
        new webpack.HotModuleReplacementPlugin(),
    ];
}
