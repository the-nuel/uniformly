# 🥋 @nuel/uniformly
Uniformly exists to remove all the setup time required when getting new projects up and running. Inspired by Create React App, it provides an opinionated [Babel](https://babeljs.io/), [Jest](https://jestjs.io/), [Prettier](https://prettier.io/) and [ESLint](https://eslint.org) configuration so you can just get started with writing some code.

## How do I use it?
Just update your `package.json` file with some scripts:

```json
{
    "scripts": {
        "build": "uniformly build",
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

## Using custom configs
Create a `.uniformlyrc` file within your project and you'll be able to override the default configuration for as many of the tools as you'd like.

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
