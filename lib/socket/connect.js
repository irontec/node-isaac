'use strict';

var isFunction = require('lodash.isfunction');



function Connect(logProvider) {

    var log = logProvider;

    if ( typeof log === 'object' && !('info' in log) ) {
        throw new Error('logProvider must implement an info method');
    }

    return connect;

    function connect(port, host, cb) {
        var isaacConnector = this;

        if (isaacConnector.connected) {
            throw new Error('Isaac is already connected');
        }

        isaacConnector.socket.connect(port, host, onConnect);

        function onConnect() {
            isaacConnector.connected = true;
            var message = 'Client Connected via ' + host + ':' + port;
            if (log) {
                log.info('IsaacConnector.connect: %s', message);
            }
            if ( isFunction(cb) ) {
                cb();
            }
        }
    }
}

module.exports = Connect;
