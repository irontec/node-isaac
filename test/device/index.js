'use strict';

function Device(isaacConnector) {
    return {
        'status': require('./status').bind(isaacConnector),
        'pause': require('./pause').bind(isaacConnector),
        'unpause': require('./unpause').bind(isaacConnector)
    };
}

module.exports = Device;
