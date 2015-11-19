'use strict';

function QueuesJoin(logProvider) {

    var log = logProvider;

    if ( typeof log === 'object' && !('info' in log) ) {
        throw new Error('logProvider must implement an info method');
    }

    return joinQueue;

    function joinQueue(queueName) {
        var message, isaacConnector;

        isaacConnector = this;

        message = ['QUEUEJOIN', queueName].join(' ');

        if (log) {
            log.info('IsaacConnector.write: %s', message);
        }

        isaacConnector.socket.write(message + '\n');
    }
}

module.exports = QueuesJoin;
