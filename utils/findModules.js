const chalk = require('chalk');
const fs = require('fs');
const path = require('path');

function error(message) {
    console.log(chalk.red(message));
    throw new Error(message);
}

module.exports = function(dirname) {
    const directories = path.normalize(dirname).split(path.sep);
    const matched = directories.indexOf('node_modules');

    if (matched < 0) {
        error(`Failed to find node_modules in path: ${dirname}`);
    }

    const modules = directories.splice(0, matched + 1).join(path.sep);

    if (!fs.existsSync(modules)) {
        error(`Found path to modules but couldn't verify it: ${modules}`);
    }

    return modules;
};
