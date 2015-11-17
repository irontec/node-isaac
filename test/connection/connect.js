'use strict';

function Connect(port, hostname, cb) {

    var connector = this;

    connector.on('isaac.connect', function(data) {
        connector.removeAllListeners('isaac.connect');
        connector.removeAllListeners('isaac.error');
        cb(data);
    });

    connector.on('isaac.error', function(data) {
        connector.removeAllListeners('isaac.connect');
        connector.removeAllListeners('isaac.error');
        data.status = 'error';
        cb(data);
    });

    connector.connect(port, hostname);

}

module.exports = Connect;
