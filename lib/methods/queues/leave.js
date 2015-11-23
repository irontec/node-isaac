'use strict';

var debug = require('debug')('isaac-wrapper:err');
var isUndefined = require('lodash.isundefined');

function QueuesLeave(queueName) {

    var message;

    if (isUndefined(queueName)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: queueName', 'QueueLeave');
        return;
    }

    message = ['QUEUELEAVE', queueName].join(' ');

    this.write(message);
}

module.exports = QueuesLeave;
