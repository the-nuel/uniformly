# 🥋 uniformly
Uniformly exists to remove all the setup time required when getting new projects up and running. Inspired by Create React App, it provides an opinionated [Babel](https://babeljs.io/), [Jest](https://jestjs.io/), [Prettier](https://prettier.io/) and [ESLint](https://eslint.org) configuration so you can just get started with writing code.

## Installing
```bash
npm install --save-dev @nuel/uniformly
```

## How do I use it?
Just update your `package.json` file with some scripts:

```json
{
    "scripts": {
        "build": "uniformly build",
        "postbuild": "uniformly declare-types",
        "test": "uniformly test",
        "tidyup": "uniformly tidyup",
        "lint": "uniformly lint"
    }
}
```

## Options
We'll add full documentation for options here soon™, for now you can get a list of available options using the CLI.
```bash
npx uniformly --help        # lists commands
npx uniformly build --help  # lists options for the build command
```

### build
Transpiles the project.  

```bash
uniformly build [-i src/] [-o lib/] [-t "current"]
```

| option | aliases | default |description |
| ------ | ------- | ------- | ----------- |
| source | src, in, i | src/ | the directory to transpile |
| output | out, o | lib/ | where to put the transpiled files |
| target | t | current | the node version to target |

### declare-types
Generates TypeScript declaration files.

```bash
uniformly declare-types [-o lib/]
```

| option | aliases | default |description |
| ------ | ------- | ------- | ----------- |
| output | out, o | lib/ | where to put the declaration files |

## But I'm using a library that needs custom Babel configs...
No need to worry, we currently detect and apply sensible default Babel and ESLint configs for these libraries.

 - ✅ React
 - ✅ Vue
 - ✅ TypeScript

## Using custom configs
If you need more control over what's happening, create a `.uniformlyrc` file within your project and you'll be able to override the default configuration for as many of the tools as you'd like.

```json
{
    "babel": {
        "config": "/path/to/babel.config.js"
    },
    "jest": {
        "roots": [ "custom/jest/root" ],
        "config": "/path/to/jest.config.js"
    },
    "prettier": {
        "config": "/path/to/prettier.config.js"
    },
    "eslint": {
        "config": "/path/to/.eslintrc"
    }
}
```
