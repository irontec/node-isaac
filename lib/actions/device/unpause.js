'use strict';

function Unpause(logProvider) {

    var log = logProvider;

    if ( typeof log === 'object' && !('info' in log) ) {
        throw new Error('logProvider must implement an info method');
    }

    return unpause;

    function unpause() {
        var isaacConnector = this;
        var message;

        message = ['ACDUNPAUSE'].join(' ');

        if (log) {
            log.info('IsaacConnector.write', message);
        }

        isaacConnector.socket.write(message + '\n');
    }
}

module.exports = Unpause;
