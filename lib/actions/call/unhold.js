
'use strict';

function Unhold(logProvider) {

    var log = logProvider;

    if ( typeof log === 'object' && !('info' in log) ) {
        throw new Error('logProvider must implement an info method');
    }

    return unhold;

    function getCommand(fromQueue) {
        if (fromQueue) {
            return 'UNHOLDUID';
        }
        return 'UNHOLD';
    }

    function unhold(refId, fromQueue) {
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
            log.info('IsaacConnector.write', message);
        }

        isaacConnector.socket.write(message + '\n');
    }
}

module.exports = Unhold;
