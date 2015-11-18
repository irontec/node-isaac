# node-isaac

Node.js Isaac connection wrapper

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm i --save isaac-wrapper
```

## Usage

```js
// create an instance from the factory
var isaacConnector = require('isaac-wrapper')(logger);

// Listen to events
// * agent.login: event fired as response to a login attempt
isaacConnector.on('agent.login', function(data) {
});
// * call.status: prints status of calls
isaacConnector.on('call.status', function(data) {
});
// * isaac.connect: prints status of calls
isaacConnector.on('isaac.connect', function(data) {
});

// connect to ISAAC specifying a port, host and callback
isaacConnector.connect('6238', '10.10.1.2', function() {
    // make a login request
    isaacConnector.login(ext,pass);
});
```

[Here](https://github.com/irontec/node-isaac/blob/master/doc/DOCUMENTATION.md) you can read the full documentation

## Tests

```sh
npm install
npm test
npm run lint
```

## Dependencies

-   [lodash.assign](https://www.npmjs.com/package/lodash.assign) [![NPM version](https://badge.fury.io/js/lodash.assign.svg)](http://badge.fury.io/js/lodash.assign)
-   [lodash.isfunction](https://www.npmjs.com/package/lodash.isfunction) [![NPM version](https://badge.fury.io/js/lodash.isfunction.svg)](http://badge.fury.io/js/lodash.isfunction)
-   [lodash.includes](https://www.npmjs.com/package/lodash.includes) [![NPM version](https://badge.fury.io/js/lodash.includes.svg)](http://badge.fury.io/js/lodash.includes)
-   [lodash.startswith](https://www.npmjs.com/package/lodash.startswith) [![NPM version](https://badge.fury.io/js/lodash.startswith.svg)](http://badge.fury.io/js/lodash.startswith)
-   [lodash.foreach](https://www.npmjs.com/package/lodash.foreach) [![NPM version](https://badge.fury.io/js/lodash.foreach.svg)](http://badge.fury.io/js/lodash.foreach)
-   [node-uuid](https://github.com/broofa/node-uuid): Rigorous implementation of RFC4122 (v1 and v4) UUIDs. [![NPM version](https://badge.fury.io/js/node-uuid.svg)](http://badge.fury.io/js/node-uuids)

## Dev Dependencies

-   [chai](https://github.com/chaijs/chai): BDD/TDD assertion library for node.js and the browser. Test framework agnostic. [![Build Status](https://travis-ci.org/chaijs/chai.svg?branch=master)](https://travis-ci.org/chaijs/chai) [![NPM version](https://badge.fury.io/js/chai.svg)](http://badge.fury.io/js/chai)
-   [eslint](https://github.com/eslint/eslint): An AST-based pattern checker for JavaScript. [![Build Status](https://travis-ci.org/eslint/eslint.svg?branch=master)](https://travis-ci.org/eslint/eslint) [![NPM version](https://badge.fury.io/js/eslint.svg)](http://badge.fury.io/js/eslint)
-   [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework [![Build Status](https://travis-ci.org/mochajs/mocha.svg?branch=master)](https://travis-ci.org/mochajs/mocha) [![NPM version](https://badge.fury.io/js/mocha.svg)](http://badge.fury.io/js/mocha)

## License

EUPL
