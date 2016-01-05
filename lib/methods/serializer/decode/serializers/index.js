'use strict';

var assign = require('lodash.assign');

var connection = require('./connection/index');
var agent = require('./agent/index');
var device = require('./device/index');
var queues = require('./queues/index');
var call = require('./call/index');

var serializers = assign(
    {},
    connection,
    agent,
    device,
    queues,
    call
);

module.exports = serializers;
