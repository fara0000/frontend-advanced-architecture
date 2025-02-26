import webpack from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { BuildOptions } from './types/config';

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

/**
 * Файл содержит все Плагины'ы проекта
 *
 */

export function buildPlugins({
    paths, isDev, apiUrl, project,
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const plugins = [
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
            __API__: JSON.stringify(apiUrl),
            __PROJECT__: JSON.stringify(project),
        }),
        new ReactRefreshWebpackPlugin(),
    ];

    // Будут только при dev сборке
    if (isDev) {
        plugins.push(
            // HotModuleReplacementPlugin - live refresh
            new webpack.HotModuleReplacementPlugin(),
            // Bundle analyzing instrument, if you want to open: http://localhost:8888
            new BundleAnalyzerPlugin({
                openAnalyzer: false,
            }),
        );
    }

    return plugins;
}
