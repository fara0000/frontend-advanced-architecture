import path from 'path';

/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
    clearMocks: true,

    collectCoverage: true,

    // An array of directory names to be searched recursively up from the requiring module's location
    moduleDirectories: [
        'node_modules',
        'src',
    ],

    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',

    // An array of regexp pattern strings used to skip coverage collection
    coveragePathIgnorePatterns: [
        '/node_modules/',
    ],

    // The root directory that Jest should scan for tests and modules within
    rootDir: '../../',

    // The glob patterns Jest uses to detect test files
    testMatch: [
        // Есть различие зависимости от ОС
        '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
        // для того чтобы можно было использовать __tests__
        // '<rootDir>/__tests__/**/*.[jt]s?(x)',
    ],

    // for absolute imports
    // modulePaths: ['<rootDir>src/config/jest/setupTests.ts'],

    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    setupFilesAfterEnv: [
        '@testing-library/jest-dom/extend-expect',
    ],

    moduleNameMapper: {
        '\\.s?css$': 'identity-obj-proxy',
        // для того чтобы могли использовать  svg файлы в рамках тестирования, а jestEmptyMockComponent грубо говоря для мока
        '\\.svg': path.resolve(__dirname, 'jestEmptyMockComponent.tsx'),
    },

    // чтобы не было проблем с dom при тестах иначе функция render не работала
    testEnvironment: 'jest-environment-jsdom',

    // set of global variables that need to be available in all test environmet
    globals: {
        __IS_DEV__: true,
        __API__: '',
    },
};
