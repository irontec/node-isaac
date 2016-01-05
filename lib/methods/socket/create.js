'use strict';

var Socket = require('net').Socket;

function createSocket() {
    var socket = new Socket();
    socket.on('data', require('./listeners/data').bind(this));
    socket.on('error', require('./listeners/error').bind(this));
    socket.on('close', require('./listeners/close').bind(this));
    this.socket = socket;
}

module.exports = createSocket;
