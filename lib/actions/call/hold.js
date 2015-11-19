
'use strict';

function Hold(logProvider) {

    var log = logProvider;

    if ( typeof log === 'object' && !('info' in log) ) {
        throw new Error('logProvider must implement an info method');
    }

    return hold;

    function getCommand(fromQueue) {
        if (fromQueue) {
            return 'HOLDUID';
        }
        return 'HOLD';
    }

    function hold(refId, fromQueue) {
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

module.exports = Hold;
