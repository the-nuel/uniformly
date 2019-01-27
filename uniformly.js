#!/usr/bin/env node
'use strict';
const execute = require('./utils/execute');
const yargs = require('yargs');

function resolveConfigFile(filename) {
    return require.resolve(`./config/${filename}`);
}

yargs
    .command(
        ['build', 'transpile'],
        'builds the project',
        yargs =>
            yargs
                .option('output', {
                    alias: ['out', 'o'],
                    type: 'string',
                    describe: 'the path where transpiled files should go',
                    default: 'lib/'
                })
                .option('config-file', {
                    alias: ['config', 'c'],
                    type: 'string',
                    describe: 'path to a custom Babel config file to use',
                    default: resolveConfigFile('babel.config.js')
                })
                .option('source', {
                    alias: ['src', 'in', 'i'],
                    type: 'string',
                    describe: 'the source directory to transpile',
                    default: 'src/'
                }),
        ({ source, config, out, modules }) => {
            execute('babel', [source, '-d', out, '--config-file', config, '--verbose'], {
                modules
            });
        }
    )
    .option('node-modules-path', {
        alias: 'modules',
        describe: 'overrides node_modules search location',
        default: __dirname,
        hidden: true
    })
    .alias('v', 'version')
    .describe('version', 'show version')
    .strict()
    .help()
    .describe('help', 'show this help text').argv;
