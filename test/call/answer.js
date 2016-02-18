'use strict';

var fakeConsole = {
    log: noop,
    info: noop,
    error: noop
};

var anotherIsaacConnector = require('../../lib/')(fakeConsole);
var config = require('../config');

function Answer(cb) {

    var connector = this;

    anotherIsaacConnector.on('isaac.connect', function() {
        anotherIsaacConnector.removeAllListeners('isaac.connect');
        anotherIsaacConnector.login(config.agent.anotherExtension, config.agent.valid.password);
    });

    anotherIsaacConnector.on('agent.login', function() {
        anotherIsaacConnector.suscribe('status', true, true);
        anotherIsaacConnector.removeAllListeners('agent.login');
        anotherIsaacConnector.createCall(config.call.queueNumber);
    });

    anotherIsaacConnector.on('call.status', function(data) {
        if (data.status === 'RINGING') {
            anotherIsaacConnector.removeAllListeners('call.status');
        }
    });

    connector.on('call.status', function(data) {
        
        if (data.status === 'RINGING') {
            connector.answerCall(data.isaacId);
        }

        if (data.status === 'ANSWERED') {
            connector.holdCall(data.isaacId, true);
        }

        if (data.status === 'HOLD') {
            connector.unholdCall(data.isaacId, true);
        }

        if (data.status === 'UNHOLD') {
            connector.hangupCall(data.isaacId, true);
            connector.removeAllListeners('call.status');
            anotherIsaacConnector.disconnect();
            cb(data);
        }
    });

    connector.suscribe('status', true, true);
    anotherIsaacConnector.connect(config.connection.valid.port, config.connection.valid.hostname);
}

function noop() {
    return;
}

module.exports = Answer;
