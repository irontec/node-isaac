
'use strict';

var methods = {
    'write': require('./write'),
    'processMessage': require('./process-message'),

    'socket': require('./socket'),

    'agent': require('./agent'),
    'suscribe': require('./suscribe'),
    'device': require('./device'),
    'call': require('./call'),
    'queues': require('./queues')
};

module.exports = methods;
