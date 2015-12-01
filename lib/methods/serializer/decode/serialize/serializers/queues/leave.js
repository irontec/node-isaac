'use strict';

function leaveOK(data) {
    data.shift();
    return {
        'event': 'queues.leave',
        'status': 'success',
        'queue': data[3],
        'message': data.join(' ')
    };
}

function leaveFailed(data) {
    var queue;

    data.shift();

    queue = data[4];
    
    if (data[0] === 'Agent') {
        queue = data[7];
    }

    return {
        'event': 'queues.leave',
        'status': 'error',
        'queue': queue,
        'message': data.join(' ')
    };
}

module.exports = {
    'OK': leaveOK,
    'FAILED': leaveFailed
};
