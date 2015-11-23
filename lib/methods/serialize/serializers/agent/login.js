'use strict';

function loginOK() {
    return {
        'event': 'agent.login',
        'status': 'success',
        'message': 'Access Granted'
    };
}

function loginFailed(data) {
    var errorCode, errorMessage;

    errorCode = 'INVALIDTERM';
    errorMessage = 'Terminal not registered';

    if (data.length === 1) {
        errorCode = 'NOTERM';
        errorMessage = 'Agent not logged in terminal';
    }

    return {
        'event': 'agent.login',
        'status': 'error',
        'error': errorCode,
        'message': errorMessage
    };
}

module.exports = {
    'OK': loginOK,
    'FAILED': loginFailed
};
