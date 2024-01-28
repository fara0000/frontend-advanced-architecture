import webpack from 'webpack';
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";

/**
 * Файл содержит все Loader'ы проекта
 *
 * !!! Важно: сохранять порядок лоудеров
 */

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {

    // Если не испольуем тайпскрипт то нужен babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    // Loader для стилей, !!! Порядок лоадеров в рамках стилей очень важен
    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    // turn on css modules
                    modules: {
                        // нужно для того чтобы CSS Modules не применялись для всех файлов (пример: index.scss)
                        auto: (resPath: string) => Boolean(resPath.includes('.modules.')),
                        // для того чтобы при Dev сборке классы сгенерированные CSS modules были читабельными
                        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
                    },
                }
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        typescriptLoader,
        cssLoader,
    ]
}
