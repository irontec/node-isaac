
'use strict';

function Hangup(logProvider) {

    var log = logProvider;

    if ( typeof log === 'object' && !('info' in log) ) {
        throw new Error('logProvider must implement an info method');
    }

    return hangup;

    function getCommand(fromQueue) {
        if (fromQueue) {
            return 'HANGUPUID';
        }
        return 'HANGUP';
    }

    function hangup(refId, fromQueue) {
        var isaacConnector = this;
        var message;

        if (typeof fromQueue === 'undefined') {
            fromQueue = true;
        }

        if (!refId) {
            throw new Error('Missing parameters');
        }

        message = [getCommand(fromQueue), refId].join(' ');

        if (log) {
            log.info('IsaacConnector.write: %s', message);
        }

        isaacConnector.socket.write(message + '\n');
    }
}

module.exports = Hangup;
