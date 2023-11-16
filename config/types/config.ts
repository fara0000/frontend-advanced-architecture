// config.ts

export type BuildMode = 'development' | 'production';

export interface BuildPaths {
    entry: string;
    build: string;
    html: string;
}

export type BuildOptions = {
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean
}
