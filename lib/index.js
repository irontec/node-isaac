'use strict';

var assign = require('lodash.assign');

var uuid = require('node-uuid');

var EventEmitter = require('events').EventEmitter;

var methods = require('./methods');


function IsaacConnector() {

    var emitter;

    emitter = new EventEmitter();

    var connector = assign(
        // properties
        {
            'id': uuid.v4(),
            'connected': false,
            'caughtError': false,
            'socket': null
        },
        // methods
        {
            'write': methods.write,
            'processMessage': methods.processMessage,

            'createSocket': methods.socket.create,
            'connect': methods.socket.connect,
            'disconnect': methods.socket.disconnect,

            'login': methods.agent.login,
            'logout': methods.agent.logout,

            'pause': methods.device.pause,
            'unpause': methods.device.unpause,

            'suscribe': methods.suscribe,

            'createCall': methods.call.makeCall,
            'hangupCall': methods.call.hangup,
            'holdCall': methods.call.hold,
            'unholdCall': methods.call.unhold,
            'answerCall': methods.call.answer,

            'getQueues': methods.queues.get,
            'joinQueue': methods.queues.join,
            'leaveQueue': methods.queues.leave,

            'on': emitter.on.bind(emitter),
            'emit': emitter.emit.bind(emitter),
            'removeAllListeners': emitter.removeAllListeners.bind(emitter)
        }
    );

    connector.createSocket();

    return connector;

}

module.exports = IsaacConnector;
