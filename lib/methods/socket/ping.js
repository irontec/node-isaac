'use strict';

var debug = require('debug')('isaac-wrapper:err');

function ping() {

    var message = 'PING' + '\n';

    if (!this.connected) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Isaac is not connected', 'Ping');
    }

    try {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'PING!', 'Ping');
        this.write(message);
    }
    catch (err) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Error sending PING', 'Ping');
    }
}

module.exports = ping;
