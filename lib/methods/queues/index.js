
'use strict';

var queues = {
    'get': require('./get'),
    'join': require('./join'),
    'leave': require('./leave')
};

module.exports = queues;
