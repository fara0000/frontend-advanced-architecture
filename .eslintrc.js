module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
        'plugin:i18next/recommended',
    ],
    // Define overrides if you want to exclude specific files
    overrides: [
        {
            env: {
                node: true,
            },
            files: [
                '.eslintrc.{js,cjs}',
            ],
            excludedFiles: 'webpack.config.ts',
            parserOptions: {
                sourceType: 'script',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
        'i18next',
    ],
    rules: {
        // отступы
        indent: [2, 4],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        // 2 это ошибка
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': 'off',
        'import/prefer-default-export': 'off',
        'no-unused-vars': 'warn',
        'max-len': 'off',
        'no-undef': 'off',
        'react/require-default-props': 'off',
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'react/function-component-definition': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/react-in-jsx-scope': 'warn',
        'react/button-has-type': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true }],
    },
};
