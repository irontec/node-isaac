'use strict';

var _ = require('lodash');

var connection = require('./connection'),
    agent = require('./agent'),
    device = require('./device'),
    queues = require('./queues'),
    call = require('./call');

var serializers = _.assign(
    {},
    connection,
    agent,
    device,
    queues,
    call
);

module.exports = serializers;
