const defaultConfig = require('./default.config.js');

module.exports = {
    ...defaultConfig,
    env: {
        ...defaultConfig.env,
        browser: true,
    },
    extends: [
        ...defaultConfig.extends,
        'plugin:vue/recommended'
    ],
    parserOptions: {
        ...defaultConfig.parserOptions,
        ecmaFeatures: {
            ...defaultConfig.parserOptions.ecmaFeatures,
            jsx: false,
        },
    },
};
