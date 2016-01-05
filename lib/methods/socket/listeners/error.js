'use strict';

var debug = require('debug')('isaac-wrapper:err');

function onErrorReceive(err) {
    this.caughtError = true;
    debug('[id:"%s" message:"%s" at:"%s"]', this.id, err, 'onError');
    var data = {
        event: 'isaac.error',
        error: 'ECONNREFUSED',
        messages: err.toString()
    };
    this.emit(data.event, data);
}

module.exports = onErrorReceive;