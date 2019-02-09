#!/usr/bin/env node
'use strict';
const execute = require('./utils/execute');
const yargs = require('yargs');

const config = require('./utils/configure')();

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
                .option('source', {
                    alias: ['src', 'in', 'i'],
                    type: 'string',
                    describe: 'the source directory to transpile',
                    default: 'src/'
                }),
        ({ source, out }) => {
            execute('babel', [
                source,
                '-d',
                out,
                '--config-file',
                config.babel.config
            ]);
        }
    )
    .command('test', 'tests the project', () => {
        execute('jest', ['--config', config.jest.config]);
    })
    .alias('v', 'version')
    .describe('version', 'show version')
    .strict()
    .help()
    .describe('help', 'show this help text').argv;
