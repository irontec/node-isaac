'use strict';

var assign = require('lodash.assign');

var connection = require('./connection'),
    agent = require('./agent'),
    device = require('./device'),
    queues = require('./queues'),
    call = require('./call');

var serializers = assign(
    {},
    connection,
    agent,
    device,
    queues,
    call
);

module.exports = serializers;
