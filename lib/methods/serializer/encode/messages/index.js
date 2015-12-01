'use strict';

var messages = {
    'agent': require('./agent/index'),
    'suscribe': require('./suscribe/index'),
    'device': require('./device/index'),
    'call': require('./call/index'),
    'queues': require('./queues/index')
};

module.exports = messages;