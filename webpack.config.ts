import webpack, { DefinePlugin } from 'webpack';
import path from 'path';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths, BuildEnv } from './config/build/types/config';

// делается для того чтобы пробросить переменное окружение
export default (env: BuildEnv) => {
    const mode = env.mode || 'development';
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };
    const isDev = mode === 'development';
    const PORT = env.port || 3000;
    const apiUrl = env.apiUrl || 'http://localhost:8000';
    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT,
        apiUrl,
    });

    // для того чтобы __IS_DEV__ был видео в сторисах и в других местах
    config.plugins.push(new DefinePlugin({
        __IS_DEV__: true,
        __API__: JSON.stringify(apiUrl),
    }));

    return config;
};
