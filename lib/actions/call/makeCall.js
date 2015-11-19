
'use strict';

var uuid = require('node-uuid');

function MakeCall(logProvider) {

    var log = logProvider;

    if ( typeof log === 'object' && !('info' in log) ) {
        throw new Error('logProvider must implement an info method');
    }

    return makeCall;

    function makeCall(number, refId) {
        var isaacConnector = this;
        var message;

        if (!number) {
            throw new Error('Missing parameters');
        }

        if (!refId) {
            refId = uuid.v4();
        }

        message = ['CALL', refId, number].join(' ');

        if (log) {
            log.info('IsaacConnector.write: %s', message);
        }

        isaacConnector.socket.write(message + '\n');
    }
}

module.exports = MakeCall;
