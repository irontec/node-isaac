'use strict';


var debug = require('debug')('isaac-wrapper:err');
var Socket = require('net').Socket;

var forEach = require('lodash.foreach');

function createSocket() {
    var socket = new Socket();
    socket.on('data', onDataReceive.bind(this));
    socket.on('error', onErrorReceive.bind(this));
    socket.on('close', onCloseReceive.bind(this));
    this.socket = socket;
}

function onErrorReceive(err) {
    this.caughtError = true;
    debug('[id:"%s" message:"%s" at:"%s"]', this.id, err, 'onError');
    var data = {
        'event': 'isaac.error',
        'error': 'ECONNREFUSED',
        'message': err.toString()
    };
    this.emit(data.event, data);
}

// TO-DO!!!!
function onCloseReceive(hadError) {
    var data;
    if (!this.caughtError && hadError) {
        data = {
            'event': 'isaac.error',
            'error': 'CLOSEDWITHERROR',
            'message': hadError.toString()
        };
        this.emit(data.event, data);
    }

    data = {
        'event': 'isaac.disconnect'
    };

    this.socket.removeAllListeners('data');
    this.socket.removeAllListeners('error');
    this.socket.removeAllListeners('close');
    delete this.socket;
    this.createSocket();
    this.connected = false;
    this.emit(data.event, data);
}

function onDataReceive(data) {
    var messages = data.toString('utf8').split('\r\n');

    forEach(messages, this.processMessage.bind(this));
}

module.exports = createSocket;