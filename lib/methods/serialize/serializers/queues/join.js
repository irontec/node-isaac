'use strict';

function joinOK(data) {
    data.shift();
    return {
        'event': 'queues.join',
        'status': 'success',
        'queue': data[3],
        'message': data.join(' ')
    };
}

function joinFailed(data) {
    var queue;

    data.shift();

    queue = data[4];

    if (data[0] === 'Agent') {
        queue = data[7];
    }

    return {
        'event': 'queues.join',
        'status': 'error',
        'queue': queue,
        'message': data.join(' ')
    };
}

module.exports = {
    'OK': joinOK,
    'FAILED': joinFailed
};
