const defaultConfig = require('./default.config.js');

module.exports = {
    ...defaultConfig,
    env: {
        ...defaultConfig.env,
        browser: true,
    },
    extends: [
        ...defaultConfig.extends,
        'plugin:react/recommended',
        'plugin:jsx-a11y/recommended',
    ],
    plugins: [...defaultConfig.plugins, 'react', 'jsx-a11y'],
    settings: {
        ...defaultConfig.settings,
        react: {
            version: 'detect',
        },
    },
};
