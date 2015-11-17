'use strict';

function Agent(isaacConnector) {
    return {
        'login': require('./login').bind(isaacConnector),
        'logout': require('./logout').bind(isaacConnector)
    };
}

module.exports = Agent;
