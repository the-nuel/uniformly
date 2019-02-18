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

// Returns name of framework if one is used, false if not
function isFrameworkProject() {
    const pkg = findClosestPackage();

    const deps = Object.keys({
        ...pkg.dependencies,
        ...pkg.peerDependencies,
    });

    if (deps.includes('react')) return 'react';
    if (deps.includes('vue')) return 'vue';

    return false;
}

module.exports = function() {
    if (!config) {
        const framework = isFrameworkProject();

        config = require('rc')('uniformly', {
            babel: {
                config: resolveConfigFile(
                    framework ? framework + '.config.js' : 'default.config.js',
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
                    framework ? framework + '.config.js' : 'default.config.js',
                    'eslint'
                ),
            },
            node_modules: findup.sync('node_modules', {
                cwd: __dirname,
            }),
        });
    }

    return config;
};
