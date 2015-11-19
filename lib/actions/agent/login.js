
'use strict';

function Login(logProvider) {

    var log = logProvider;

    if ( typeof log === 'object' && !('info' in log) ) {
        throw new Error('logProvider must implement an info method');
    }

    return login;

    function login(ext, pass) {
        var isaacConnector = this;
        var message;

        if (!ext || !pass) {
            throw new Error('Missing parameters');
        }

        message = ['LOGIN', ext, pass].join(' ');

        if (log) {
            log.info('IsaacConnector.write: %s', message);
        }

        isaacConnector.socket.write(message + '\n');
    }
}

module.exports = Login;
