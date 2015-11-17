'use strict';

function Login(ext, pass, cb) {

    var connector = this;

    connector.on('agent.login', function(data) {
        connector.removeAllListeners('agent.login');
        cb(data);
    });

    connector.login(ext, pass);

}

module.exports = Login;
