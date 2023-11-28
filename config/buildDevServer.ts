import {BuildOptions} from "./types/config";
import type {Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
    return {
        port: options.port,
        // автоматически открывает нашу страницу в браузере
        open: true,
        // proxy everything from index.tsx
        historyApiFallback: true
    }
}
