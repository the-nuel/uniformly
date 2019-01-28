'use strict';
const config = require('./configure')();
const path = require('path');
const spawn = require('cross-spawn').sync;

module.exports = function(binary, args) {
    spawn(path.join(config.node_modules, '.bin', binary), args, {
        stdio: 'inherit'
    });
};
