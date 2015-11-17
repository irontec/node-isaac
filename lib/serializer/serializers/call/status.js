'use strict';

//var app = require('../../../app');

function status(data) {
    var evt, serializedData;

    evt = data[0];
    data.shift();

    serializedData = {
        'event': 'call.status',
        'refId': data[0]
    };

    if (evt !== 'EXTERNALCALLSTATUS') {
        serializedData.fromQueue = false;
        serializedData.source = data[1];
        serializedData.status = data[2];
        return serializedData;
    }

    serializedData.fromQueue = true;
    serializedData.queue = data[2];
    serializedData.number = data[3];
    serializedData.status = data[4];

    return serializedData;
}

module.exports = status;
