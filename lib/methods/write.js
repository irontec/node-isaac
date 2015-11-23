'use strict';

var debug = require('debug')('isaac-wrapper:write');

function write(message) {
    debug('[id:"%s" message:"%s"]', this.id, message);
    this.socket.write(message + '\n');
}

module.exports = write;