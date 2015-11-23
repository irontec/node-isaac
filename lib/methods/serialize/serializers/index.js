'use strict';

var assign = require('lodash.assign');

var connection = require('./connection/index'),
    agent = require('./agent/index'),
    device = require('./device/index'),
    queues = require('./queues/index'),
    call = require('./call/index');

var serializers = assign(
    {},
    connection,
    agent,
    device,
    queues,
    call
);

module.exports = serializers;
