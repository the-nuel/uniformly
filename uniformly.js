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
                    default: 'lib/',
                })
                .option('source', {
                    alias: ['src', 'in', 'i'],
                    type: 'string',
                    describe: 'the source directory to transpile',
                    default: 'src/',
                })
                .option('target', {
                    alias: ['t'],
                    type: 'string',
                    describe: 'the target to transpile for (node version, or "browserslist"',
                    default: 'current',
                })
                .option('corejs', {
                    alias: ['cjs'],
                    type: 'string',
                    describe: 'the core-js version that Babel should use',
                    default: '3',
                }),
        ({ source, out, env, target, corejs, ...others }) => {
            process.env.NODE_ENV = env || 'development';
            process.env.BABEL_ENV = env || 'development';
            process.env.BABEL_TARGET = target;
            process.env.CORE_JS_VERSION = corejs;

            execute('babel', [
                source,
                '-d',
                out,
                '--extensions',
                '.js,.jsx,.ts,.tsx',
                '--config-file',
                config.babel.config,
                ...others._.slice(1),
            ]);
        }
    )
    .command(
        'test',
        'tests the project',
        yargs => yargs,
        ({ env, ...others }) => {
            process.env.NODE_ENV = env || 'test';
            process.env.BABEL_ENV = env || 'test';
            execute('jest', [
                '--config',
                config.jest.config,
                ...others._.slice(1),
            ]);
        }
    )
    .command(
        'declare-types',
        'generates TypeScript declaration files',
        yargs =>
            yargs
                .option('output', {
                    alias: ['out', 'o'],
                    type: 'string',
                    describe: 'the path where declaration files should go',
                    default: 'lib',
                }),
        ({ output }) => {
            execute('tsc', [
                '-d',
                '--declarationDir',
                output.replace(/\//g, ''),
                '--emitDeclarationOnly',
            ]);
        }
    )
    .command(
        'tidyup',
        'tidies source code with Prettier',
        yargs =>
            yargs.option('source', {
                alias: ['src', 'in', 'i'],
                type: 'string',
                describe: 'the source directory to tidy',
                default: 'src/**/*',
            }),
        ({ source, ...others }) => {
            execute('prettier', [
                '--config',
                config.prettier.config,
                '--write',
                ...others._.slice(1),
                source,
            ]);
        }
    )
    .command(
        'lint',
        'lints the project with ESLint',
        yargs =>
            yargs.option('source', {
                alias: ['src', 'in', 'i'],
                type: 'string',
                describe: 'the source directory to lint',
                default: 'src/',
            }),
        ({ source, ...others }) => {
            execute('eslint', [
                '--ext', 
                '.js,.jsx,.ts,.tsx',
                '--config',
                config.eslint.config,
                ...others._.slice(1),
                source,
            ]);
        }
    )
    .option('env', {
        alias: ['environment', 'node_env'],
        type: 'string',
        describe: 'overrides the value of NODE_ENV',
        default: process.env.NODE_ENV,
    })
    .alias('v', 'version')
    .describe('version', 'show version')
    .strict()
    .help()
    .describe('help', 'show this help text').argv;
