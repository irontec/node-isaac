'use strict';

var debug = require('debug')('isaac-wrapper:err');
var isUndefined = require('lodash.isundefined');

function QueuesJoin(queueName) {

    var message;

    if (isUndefined(queueName)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: queueName', 'QueueJoin');
        return;
    }

    message = ['QUEUEJOIN', queueName].join(' ');

    this.write(message);
}

module.exports = QueuesJoin;
