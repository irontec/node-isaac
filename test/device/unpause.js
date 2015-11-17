'use strict';

function Unpause(cb) {

    var connector = this;

    connector.on('device.status', function(data) {
        if (data.status === 'PAUSED' || data.status === 'IDLE') {
            return;
        }
        connector.removeAllListeners('device.status');
        cb(data);
    });

    connector.suscribe('devicestatus');
    connector.unpause();

}

module.exports = Unpause;
