'use strict';

var assign = require('lodash.assign');
var create = require('lodash.create');
var events = require('events');
var uuid = require('node-uuid');

var methods = require('./methods');

function IsaacConnector() {

    var connector = create(
        // Prototype
        events.EventEmitter.prototype,
        assign(
            // Properties
            {
                constructor: events.EventEmitter,
                id: uuid.v4(),
                connected: false,
                caughtError: false,
                socket: null
            },
            // Methods
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
                'leaveQueue': methods.queues.leave
            }
        )
    );

    connector.createSocket();

    return connector;

}

module.exports = IsaacConnector;