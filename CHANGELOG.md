# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased
## 1.3.0 (2019-07-07)
### Added
 - It's now possible to specify the node version that babel should target. For example, to target Node 6 just run `uniformly build --target "6"`.

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
