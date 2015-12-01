'use strict';

var debug = require('debug')('isaac-wrapper:err');
var debugInfo = require('debug')('isaac-wrapper:info');
var isFunction = require('lodash.isfunction');
var noop = require('lodash.noop');


function connect(port, host, cb) {

    cb = isFunction(cb) ? cb : noop;

    if (this.connected) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Isaac is already connected', 'Connect');
        return;
    }

    this.socket.connect(port, host, onConnect.bind(this));

    function onConnect() {
        this.connected = true;
        var message = 'Client Connected via ' + host + ':' + port;

        debugInfo('[id:"%s" message:"%s" at:"%s"]', this.id, message, 'Connect');

        cb();
    }
}

module.exports = connect;
