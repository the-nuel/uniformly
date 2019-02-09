'use strict';
const config = require('../../utils/configure')();
const { transform } = require('@babel/core');

module.exports = {
    process(src, filename) {
        const result = transform(src, {
            filename,
            presets: [
                ...require(config.babel.config).presets,
                require('babel-preset-jest')
            ],
        });

        return result ? result.code : src;
    },
};
