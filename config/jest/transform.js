'use strict';
const config = require('../../utils/configure')();
const { presets, plugins } = require(config.babel.config);

module.exports = require('babel-jest').createTransformer({
    presets,
    plugins,
    babelrc: false,
    configFile: false,
});
