'use strict';
const config = require('../utils/configure')();

module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{js,jsx}',
        '!**/*.config.js',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    transform: {
        '^.+\\.js$': require.resolve('./jest/transform'),
    },
    roots: config.jest.roots,
    rootDir: process.cwd(),
};
