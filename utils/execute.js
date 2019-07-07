'use strict';
const findup = require('find-up');
const path = require('path');
const spawn = require('cross-spawn').sync;

module.exports = function(binary, args) {
    const directory = findup.sync(
        path.join('node_modules', '.bin', binary),
        { cwd: __dirname },
    );

    spawn(directory, args, { stdio: 'inherit' });
};
