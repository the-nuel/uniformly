'use strict';
const findModules = require('./findModules');
const path = require('path');
const spawn = require('cross-spawn').sync;

module.exports = function(binary, args, { modules }) {
    spawn(path.join(findModules(modules), '.bin', binary), args, {
        stdio: 'inherit'
    });
};
