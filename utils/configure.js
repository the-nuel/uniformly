'use strict';
const fs = require('fs');
const findup = require('find-up');
let config = null;

function resolveConfigFile(filename, folder) {
    return require.resolve(
        `../config/${folder ? `${folder}/` : ''}${filename}`
    );
}

function findClosestPackage() {
    const file = fs.readFileSync(findup.sync('package.json'), 'utf-8');
    return JSON.parse(file);
}

// Returns name of framework if one is used, 'default' if not
function resolveLibraryPrefix() {
    const pkg = findClosestPackage();

    const deps = Object.keys({
        ...pkg.dependencies,
        ...pkg.peerDependencies,
    });

    if (deps.includes('react')) return 'react';
    if (deps.includes('vue')) return 'vue';

    return 'default';
}

module.exports = function() {
    if (!config) {
        const framework = resolveLibraryPrefix();

        config = require('rc')('uniformly', {
            babel: {
                config: resolveConfigFile(
                    framework + '.config.js',
                    'babel'
                ),
            },
            jest: {
                roots: ['src/'],
                config: resolveConfigFile('jest.config.js'),
            },
            prettier: {
                config: resolveConfigFile('prettier.config.js'),
            },
            eslint: {
                config: resolveConfigFile(
                    framework + '.config.js',
                    'eslint'
                ),
            },
        });
    }

    return config;
};
