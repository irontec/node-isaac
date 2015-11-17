'use strict';

function Pause(cb) {

    var connector = this;

    connector.on('device.status', function(data) {
        if (data.status === 'IDLE' || data.status === 'UNPAUSED') {
            return;
        }
        connector.removeAllListeners('device.status');
        cb(data);
    });

    connector.suscribe('devicestatus');
    connector.pause();

}

module.exports = Pause;
