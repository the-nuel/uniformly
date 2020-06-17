'use strict';
const config = require('../utils/configure')();

module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '**/*.{js,ts,jsx,tsx}',
        '!**/*.config.js',
        '!**/node_modules/**',
        '!**/vendor/**',
    ],
    transform: {
        '^.+\\.(js|ts)$': require.resolve('./jest/transform'),
    },
    roots: config.jest.roots,
    rootDir: process.cwd(),
};
