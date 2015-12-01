'use strict';

var debug = require('debug')('isaac-wrapper:err');
var isUndefined = require('lodash.isundefined');

function getQueuesJoinMessage(queueName, priority) {
    if (isUndefined(queueName)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: queueName', 'QueueJoin');
        return;
    }

    return [
        'QUEUEJOIN',
        queueName,
        priority ? priority : ''
    ].join(' ');
}

module.exports = getQueuesJoinMessage;
