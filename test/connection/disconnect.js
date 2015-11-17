'use strict';

function Disconnect(cb) {

    var connector = this;

    if (!connector.connected) {
        return cb(new Error('Not connected'));
    }

    connector.on('isaac.disconnect', function() {
        connector.removeAllListeners('isaac.disconnect');
        cb();
    });

    connector.disconnect();

}

module.exports = Disconnect;
