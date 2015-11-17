'use strict';

var Connection = require('../connection'),
    Agent = require('../agent');

function Helpers(isaacConnector, config) {

    var agent, connection;

    agent = Agent(isaacConnector);
    connection = Connection(isaacConnector);

    return {
        connect: connect,
        login: login,
        logout: logout
    };

    function connect(cb) {
        connection.connect(
            config.connection.valid.port,
            config.connection.valid.hostname,
            cb
        );
    }

    function login(cb) {
        agent.login(
            config.agent.valid.extension,
            config.agent.valid.password,
            cb
        );
    }

    function logout(cb) {
        agent.logout(function() {
            isaacConnector.on('isaac.disconnect', function() {
                isaacConnector.removeAllListeners('isaac.disconnect');
                cb();
            });
        });
    }

}

module.exports = Helpers;
