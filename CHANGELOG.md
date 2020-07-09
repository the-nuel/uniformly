# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## 3.0.4 (2020-07-09)
### Added
 - You can now specify a value for `setupFiles` in the default Jest config. This means it is no longer necessary to specify a completely custom config if there are setup tasks before your tests.

## 3.0.0 (2019-12-24)
### Fixed
 - Ensures exit code bubbles up, this should resolve a number of issues when running inside of CI environments.

## 2.2.1 (2019-12-04)
### Fixed
 - Fixes a bug with running tests using Jest, where the core-js version was no longer set in the Babel config. The also defaults the core-js version to 3 if it is not set or set to an invalid value.

## 2.2.0 (2019-12-04)
### Added
 - You can now specify `browserslist` as a target of `uniformly build`, allowing uniformly to be used to build packages for use client-side.
 - You can now specify the core-js version used by Babel during `uniformly build`, using `--corejs`.

## 2.1.0 (2019-07-20)
### Added
 - You can now run `uniformly declare-types` to generate TypeScript declaration files for your project. You should create a `tsconfig.json` file in your project directory before using this feature.

## 2.0.0 (2019-07-07)
### Changed
 - The default target node version for Babel is now "current".  
   
   This is a breaking change if you *need* your build to target "8.10". To retain the 1.x behaviour add `--target "8.10"` to your build command.

## 1.3.1 (2019-07-07)
### Added
 - It's now possible to specify the node version that Babel should target. For example, to target Node 6 just run `uniformly build --target "6"`.

### Fixed
 - Fixes `uniformly lint` looking for incorrect TypeScript plugin.
 - Fixes binary path resolution when nested node_modules folders exist.
 - Fixes missing `corejs` version warning displayed during transpilation

## 1.2.0 (2019-07-07)
### Added
 - Added TypeScript build and lint support

## 1.1.0 (2019-02-24)
### Added
 - Added Vue support ([Dan-Shields](https://github.com/Dan-Shields)).

## 1.0.0 (2019-02-10)
### Added
 - Provides Babel, ESLint, Prettier and Jest configurations for vanilla and React projects.
