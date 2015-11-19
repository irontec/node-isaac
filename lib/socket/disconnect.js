'use strict';

function Disconnect(logProvider) {

    var log = logProvider;

    if ( typeof log === 'object' && !('info' in log) ) {
        throw new Error('logProvider must implement an info method');
    }

    return disconnect;

    function disconnect() {
        var isaacConnector = this;
        var message = 'LOGOUT' + '\n';

        if (!isaacConnector.connected) {
            throw new Error('Isaac is not connected');
        }

        try {
            if (log) {
                log.info('IsaacConnector.write: %s', message);
            }
            isaacConnector.socket.write(message);
            isaacConnector.socket.end();
            isaacConnector.socket.destroy();
        }
        catch(err) {
            if (log) {
                log.error('IsaacConnector.error: %s', 'Error ending session');
            }
            isaacConnector.socket.destroy();
        }
    }
}

module.exports = Disconnect;
