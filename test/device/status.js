'use strict';

function Status(cb) {

    var connector = this;

    connector.on('device.status', function(data) {
        connector.removeAllListeners('device.status');
        cb(data);
    });

    connector.suscribe('devicestatus');

}

module.exports = Status;
