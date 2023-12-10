import webpack from "webpack";
import {BuildOptions} from "./types/config";

export function buildResolvers(options: BuildOptions): webpack.ResolveOptions {
    return {
        // расширение при импорте
        extensions: ['.tsx', '.ts', '.js'],
        // нужно когда используем абсолютные пути чтобы вебпак понимал, не нужно будет создавать доп alias и использовать @
        preferAbsolute: true,
        modules: [
            options.paths.src, 'node_modules'
        ],
        // для публичного доступа только через index файл
        mainFiles: ['index'],
        // не используем alias для абсолютных путей
        alias: {}
    }
}
