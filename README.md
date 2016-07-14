# trim-leading-lines [![NPM version](https://img.shields.io/npm/v/trim-leading-lines.svg?style=flat)](https://www.npmjs.com/package/trim-leading-lines) [![NPM downloads](https://img.shields.io/npm/dm/trim-leading-lines.svg?style=flat)](https://npmjs.org/package/trim-leading-lines) [![Build Status](https://img.shields.io/travis/jonschlinkert/trim-leading-lines.svg?style=flat)](https://travis-ci.org/jonschlinkert/trim-leading-lines)

Trim leading lines from a string when they are 100% whitespace or empty.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save trim-leading-lines
```

## Usage

```js
var trimLeadingLines = require('trim-leading-lines');
```

**Example**

Given the following in `foo.txt`:

```
                  
                  
                  
                  
                    GNU AFFERO GENERAL PUBLIC LICENSE
                       Version 3, 19 November 2007
```

This:

```js
var str = fs.readFileSync('foo.txt', 'utf8');
console.log(trimLeadingLines(str));
```

Results in:

```
                    GNU AFFERO GENERAL PUBLIC LICENSE
                       Version 3, 19 November 2007
```

## About

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Building docs

_(This document was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme) (a [verb](https://github.com/verbose/verb) generator), please don't edit the readme directly. Any changes to the readme must be made in [.verb.md](.verb.md).)_

To generate the readme and API documentation with [verb](https://github.com/verbose/verb):

```sh
$ npm install -g verb verb-generate-readme && verb
```

### Running tests

Install dev dependencies:

```sh
$ npm install -d && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

### License

Copyright © 2016, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT license](https://github.com/jonschlinkert/trim-leading-lines/blob/master/LICENSE).

***

_This file was generated by [verb](https://github.com/verbose/verb), v0.9.0, on July 14, 2016._