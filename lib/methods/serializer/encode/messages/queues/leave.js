'use strict';

var debug = require('debug')('isaac-wrapper:err');
var isUndefined = require('lodash.isundefined');

function getQueuesLeaveMessage(queueName) {
    if (isUndefined(queueName)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: queueName', 'QueueLeave');
        return;
    }

    return ['QUEUELEAVE', queueName].join(' ');
}

module.exports = getQueuesLeaveMessage;
