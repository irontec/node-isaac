'use strict';

function Listen(logProvider) {

    var log = logProvider;

    if ( typeof log === 'object' && !('info' in log) ) {
        throw new Error('logProvider must implement an info method');
    }

    return listen;

    function listen(type, withUID, withQueue) {
        var message, options, isaacConnector;

        isaacConnector = this;

        options = ['STATUS'];

        if (withUID) {
            options.push('WUID');
        }

        if (withQueue) {
            options.push('WQUEUE');
        }

        message = options.join(' ');

        if (log) {
            log.info('IsaacConnector.write', message);
        }

        isaacConnector.socket.write(message + '\n');
    }
}

module.exports = Listen;
