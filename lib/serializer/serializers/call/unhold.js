'use strict';

var _ = require('lodash');

function unhold(data, error) {
    var fromQueue = false;
    var evt = data[0];
    var status = 'success';

    if (error) {
        status = 'error';
    }

    if ( _.startsWith(evt, 'UNHOLDUID') ) {
        fromQueue = true;
    }

    data.shift();
    return {
        'event': 'call.unhold',
        'status': status,
        'fromQueue': fromQueue,
        'message': data.join(' ') // Channel not found
    };
}

function unholdOK(data) {
    return unhold(data);
}

function unholdFailed(data) {
    return unhold(data, true);
}

module.exports = {
    'OK': unholdOK,
    'FAILED': unholdFailed
};
