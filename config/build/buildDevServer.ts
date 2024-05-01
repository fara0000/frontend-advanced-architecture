import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

/**
 * - Нужен для того чтобы каждый раз не перезапускать сборку после новых изменений
 * - Автоматизирует сборку при каждом новом обновлении
 */

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => ({
    port: options.port,
    // автоматически открывает нашу страницу в браузере
    open: true,
    // proxy everything from index.ts
    historyApiFallback: true,
    // Hot Module Replacement
    hot: true,
});
