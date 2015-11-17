'use strict';

function Listen(logProvider) {

    var log = logProvider;

    if ( typeof log === 'object' && !('info' in log) ) {
        throw new Error('logProvider must implement an info method');
    }

    return listen;

    function listen() {
        var message, isaacConnector;

        isaacConnector = this;

        message = ['DEVICESTATUS'].join(' ');

        if (log) {
            log.info('IsaacConnector.write', message);
        }

        isaacConnector.socket.write(message + '\n');
    }
}

module.exports = Listen;
