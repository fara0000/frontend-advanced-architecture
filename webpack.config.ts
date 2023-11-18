import webpack from "webpack";
import {buildWebpackConfig} from "./config/buildWebpackConfig";
import path from "path";
import {BuildPaths, EnvConfig} from "./config/types/config";

// делается для того чтобы пробросить переменное окружение
export default (env: EnvConfig) => {
    const mode = env.mode || 'development';
    const paths: BuildPaths = {
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        build: path.resolve(__dirname, 'build'),
        html: path.resolve(__dirname, 'public', 'index.html'),
    }
    const isDev = mode === 'development';
    const PORT = env.port || 3000;

    // где-то баг не добавляется новый билд
    const config: webpack.Configuration = buildWebpackConfig({
        mode,
        paths,
        isDev,
        port: PORT
    })

    return config;
};
