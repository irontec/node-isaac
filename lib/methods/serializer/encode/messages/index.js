'use strict';

var messages = {
    agent: require('./agent/index'),
    subscribe: require('./subscribe/index'),
    device: require('./device/index'),
    call: require('./call/index'),
    queues: require('./queues/index')
};

module.exports = messages;
