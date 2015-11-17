
'use strict';

var actions = {
    'agent': require('./agent'),
    'suscribe': require('./suscribe'),
    'device': require('./device'),
    'call': require('./call'),
    'queues': require('./queues')
};

module.exports = actions;
