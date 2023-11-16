import webpack from "webpack";
import {buildWebpackConfig} from "./config/buildWebpackConfig";
import path from "path";
import {BuildPaths} from "./config/types/config";

const mode = 'development';
const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
}
const isDev = mode === 'development';
const PORT = 3000;

const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
})

export default config;
