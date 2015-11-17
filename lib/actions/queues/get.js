'use strict';

function GetQueues(logProvider) {

    var log = logProvider;

    if ( typeof log === 'object' && !('info' in log) ) {
        throw new Error('logProvider must implement an info method');
    }

    return getQueues;

    function getQueues() {
        var message, isaacConnector;

        isaacConnector = this;

        message = ['QUEUEINFO'].join(' ');

        if (log) {
            log.info('IsaacConnector.write', message);
        }

        isaacConnector.socket.write(message + '\n');
    }
}

module.exports = GetQueues;
