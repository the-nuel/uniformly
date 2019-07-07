'use strict';
const findup = require('find-up');
const path = require('path');
const spawn = require('cross-spawn').sync;

module.exports = function(binary, args) {
    const directory = findup.sync(
        path.join('node_modules', '.bin', binary),
        { cwd: __dirname },
    );
   
    if (!directory) {
        console.log(`Failed to find any binary named "${binary}".`);
        return;
    }

    spawn(directory, args, { stdio: 'inherit' });
};
