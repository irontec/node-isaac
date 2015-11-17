'use strict';

function Logout(cb) {

    var connector = this;

    connector.on('agent.logout', function(data) {
        connector.removeAllListeners('agent.logout');
        cb(data);
    });

    connector.logout();

}

module.exports = Logout;
