const config = require('../../utils/configure')();

module.exports = {
    env: {
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:jest/recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    plugins: ['jest', 'typescript'],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'prettier/prettier': ['error', require(config.prettier.config)],
        '@typescript-eslint/explicit-member-accessibility': ['off'],
    },
};
