'use strict';

var startsWith = require('lodash.startswith');

function hangup(data, error) {
    var fromQueue = false;
    var evt = data[0];
    var status = 'success';

    if (error) {
        status = 'error';
    }

    if (startsWith(evt, 'HANGUPUID')) {
        fromQueue = true;
    }

    data.shift();
    return {
        event: 'call.hangup',
        status: status,
        fromQueue: fromQueue,
        message: data.join(' ') // Channel not found
    };
}

function hangupOK(data) {
    return hangup(data);
}

function hangupFailed(data) {
    return hangup(data, true);
}

module.exports = {
    OK: hangupOK,
    FAILED: hangupFailed
};
