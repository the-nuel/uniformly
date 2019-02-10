"use strict";
const fs = require("fs");
const findup = require("find-up");
let config = null;

function resolveConfigFile(filename, folder) {
    return require.resolve(
        `../config/${folder ? `${folder}/` : ""}${filename}`
    );
}

function findClosestPackage() {
    const file = fs.readFileSync(findup.sync("package.json"), "utf-8");
    return JSON.parse(file);
}

function isReactProject() {
    const pkg = findClosestPackage();

    return Object.keys({
        ...pkg.dependencies,
        ...pkg.peerDependencies,
    }).includes("react");
}

module.exports = function() {
    if (!config) {
        config = require("rc")("uniformly", {
            babel: {
                config: resolveConfigFile(
                    isReactProject() ? "react.config.js" : "default.config.js",
                    "babel"
                ),
            },
            jest: {
                roots: ["src/"],
                config: resolveConfigFile("jest.config.js"),
            },
            prettier: {
                config: resolveConfigFile("prettier.config.js"),
            },
            node_modules: findup.sync("node_modules", {
                cwd: __dirname,
            }),
        });
    }

    return config;
};
