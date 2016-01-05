'use strict';

function onCloseReceive(hadError) {
    var data;
    if (!this.caughtError && hadError) {
        data = {
            event: 'isaac.error',
            error: 'CLOSEDWITHERROR',
            message: hadError.toString()
        };
        this.emit(data.event, data);
    }

    data = {
        event: 'isaac.disconnect'
    };

    this.socket.removeAllListeners('data');
    this.socket.removeAllListeners('error');
    this.socket.removeAllListeners('close');
    delete this.socket;
    this.createSocket();
    this.connected = false;
    this.emit(data.event, data);
}

module.exports = onCloseReceive;
