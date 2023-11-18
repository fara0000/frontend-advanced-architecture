import webpack from 'webpack';

export function buildLoaders(): webpack.RuleSetRule[] {

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
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
    }

    return [
        typescriptLoader,
        cssLoader,
    ]
}
