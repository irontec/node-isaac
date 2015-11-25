# Node.js isaac-wrapper

[![NPM version](https://img.shields.io/npm/v/isaac-wrapper.svg)](https://www.npmjs.com/package/isaac-wrapper)
[![NPM dependencies](https://img.shields.io/david/irontec/node-isaac.svg)](https://www.npmjs.com/package/isaac-wrapper)
[![NPM devdependencies](https://img.shields.io/david/dev/irontec/node-isaac.svg)](https://www.npmjs.com/package/isaac-wrapper)
[![node](https://img.shields.io/node/v/isaac-wrapper.svg)](https://nodejs.org/download/release/v0.12.8/)
[![license](https://img.shields.io/npm/l/isaac-wrapper.svg)](https://github.com/irontec/node-isaac/blob/master/LICENSE.txt)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Node.js Isaac connection wrapper

## Installation

Download node at [nodejs.org](http://nodejs.org) and install it, if you haven't already.

```sh
npm i --save isaac-wrapper
```

## Usage

```js
// create an instance from the factory
var isaacConnector = require('isaac-wrapper')();

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

## Debugging

isaac-wrapper uses [debug](https://www.npmjs.com/package/debug) module for logs

In order to get logs from isaac-wrapper you have to add the values to the DEBUG env variable like in the example

| Key                   | Prints            |
| ---                   | ------            |
| 'isaac-wrapper:err'   | Connector errors  |
| 'isaac-wrapper:info'  | Connector info    |
| 'isaac-wrapper:write' | Isaac inputs      |
| 'isaac-wrapper:read'  | Isaac outputs     | 
| 'isaac-wrapper:event' | Connector events  |

```sh
DEBUG="isaac-wrapper:err, isaac-wrapper:warn, isaac-wrapper:info" node myapp.js
```

## Tests

```sh
npm install
npm test
npm run lint
```

## License

[EUPL v1.1](https://raw.githubusercontent.com/irontec/node-isaac/master/LICENSE.txt)

```
Copyright 2015 Irontec SL

Licensed under the EUPL, Version 1.1 or - as soon they will be approved by the European
Commission - subsequent versions of the EUPL (the "Licence"); You may not use this work
except in compliance with the Licence.

You may obtain a copy of the Licence at:
http://ec.europa.eu/idabc/eupl.html

Unless required by applicable law or agreed to in writing, software distributed under 
the Licence is distributed on an "AS IS" basis, WITHOUT WARRANTIES OR CONDITIONS OF 
ANY KIND, either express or implied. See the Licence for the specific language 
governing permissions and limitations under the Licence.
```
