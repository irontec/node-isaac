'use strict';

function QueuesLeave(logProvider) {

    var log = logProvider;

    if ( typeof log === 'object' && !('info' in log) ) {
        throw new Error('logProvider must implement an info method');
    }

    return leaveQueue;

    function leaveQueue(queueName) {
        var message, isaacConnector;

        isaacConnector = this;

        message = ['QUEUELEAVE', queueName].join(' ');

        if (log) {
            log.info('IsaacConnector.write', message);
        }

        isaacConnector.socket.write(message + '\n');
    }
}

module.exports = QueuesLeave;
