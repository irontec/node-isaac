'use strict';

function Call(isaacConnector) {
    return {
        'makeCall': require('./makeCall').bind(isaacConnector),
        'answer': require('./answer').bind(isaacConnector)
    };
}

module.exports = Call;
