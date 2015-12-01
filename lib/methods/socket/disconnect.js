'use strict';

var debug = require('debug')('isaac-wrapper:err');

function disconnect() {

    var message = 'LOGOUT' + '\n';

    if (!this.connected) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Isaac is not connected', 'Disconnect');
    }

    try {
        this.write(message);
        this.socket.end();
        this.socket.destroy();
    }
    catch(err) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Error ending session', 'Disconnect');
        this.socket.destroy();
    }
}

module.exports = disconnect;
