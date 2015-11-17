
'use strict';

function Connection(isaacConnector) {
    return {
        'connect': require('./connect').bind(isaacConnector),
        'disconnect': require('./disconnect').bind(isaacConnector)
    };
}

module.exports = Connection;
