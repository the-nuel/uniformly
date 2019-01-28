'use strict';
let config = null;

function resolveConfigFile(filename) {
    return require.resolve(`../config/${filename}`);
}

module.exports = function() {
    if (!config) {
        config = require('rc')('uniformly', {
            babel: {
                config: resolveConfigFile('babel.config.js')
            },
            node_modules: require('find-up').sync('node_modules', { cwd: __dirname })
        });
    }

    return config;
};
