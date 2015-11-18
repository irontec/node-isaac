'use strict';

var startsWith = require('lodash.startswith');

function hold(data, error) {
    var fromQueue = false;
    var evt = data[0];
    var status = 'success';

    if (error) {
        status = 'error';
    }

    if (startsWith(evt, 'HOLDUID') ) {
        fromQueue = true;
    }

    data.shift();
    return {
        'event': 'call.hold',
        'status': status,
        'fromQueue': fromQueue,
        'message': data.join(' ') // Channel not found
    };
}

function holdOK(data) {
    return hold(data);
}

function holdFailed(data) {
    return hold(data, true);
}

module.exports = {
    'OK': holdOK,
    'FAILED': holdFailed
};
