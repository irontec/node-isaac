'use strict';

var config = require('./config');

var fakeConsole = {
    log: noop,
    info: noop,
    error: noop
};

var isaacConnector = require('../')(fakeConsole);

var helpers = require('./tests/helpers')(isaacConnector, config);

var tests = require('./tests');

describe('node-isaac tests', function() {

    tests.connection(isaacConnector, config, helpers);
    tests.agent(isaacConnector, config, helpers);
    tests.queues(isaacConnector, config, helpers);
    tests.device(isaacConnector, config, helpers);
    tests.call(isaacConnector, config, helpers);
});




function noop() {
    return;
}
