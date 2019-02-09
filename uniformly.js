#!/usr/bin/env node
"use strict";
const execute = require("./utils/execute");
const yargs = require("yargs");

const config = require("./utils/configure")();

yargs
    .command(
        ["build", "transpile"],
        "builds the project",
        yargs =>
            yargs
                .option("output", {
                    alias: ["out", "o"],
                    type: "string",
                    describe: "the path where transpiled files should go",
                    default: "lib/",
                })
                .option("source", {
                    alias: ["src", "in", "i"],
                    type: "string",
                    describe: "the source directory to transpile",
                    default: "src/",
                }),
        ({ source, out, env }) => {
            process.env.NODE_ENV = env || "development";
            process.env.BABEL_ENV = env || "development";

            execute("babel", [
                source,
                "-d",
                out,
                "--config-file",
                config.babel.config,
            ]);
        }
    )
    .command(
        "test",
        "tests the project",
        yargs => yargs,
        ({ env }) => {
            process.env.NODE_ENV = env || "test";
            process.env.BABEL_ENV = env || "test";
            execute("jest", ["--config", config.jest.config]);
        }
    )
    .option("env", {
        alias: ["environment", "node_env"],
        type: "string",
        describe: "overrides the value of NODE_ENV",
        default: process.env.NODE_ENV,
    })
    .alias("v", "version")
    .describe("version", "show version")
    .strict()
    .help()
    .describe("help", "show this help text").argv;
