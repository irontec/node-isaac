'use strict';

var assign = require('lodash.assign');
var create = require('lodash.create');
var flow = require('lodash.flow');
var events = require('events');
var uuid = require('node-uuid');

var methods = require('./methods');

var serializer = require('./methods/serializer');

function IsaacConnector() {

    var connector = create(
        events.EventEmitter.prototype,
        assign(
            {
                constructor: events.EventEmitter,
                id: uuid.v4(),
                connected: false,
                caughtError: false,
                socket: null
            },
            {
                write: methods.write,
                processMessage: serializer.decode,

                createSocket: methods.socket.create,
                connect: methods.socket.connect,
                disconnect: methods.socket.disconnect,

                login: flow(serializer.encode.bind(null, 'agent.login'), methods.write),
                logout: flow(serializer.encode.bind(null, 'agent.logout'), methods.write),

                pause: flow(serializer.encode.bind(null, 'device.pause'), methods.write),
                unpause: flow(serializer.encode.bind(null, 'device.unpause'), methods.write),

                suscribe: flow(serializer.encode.bind(null, 'suscribe'), methods.write),

                createCall: flow(serializer.encode.bind(null, 'call.makeCall'), methods.write),
                hangupCall: flow(serializer.encode.bind(null, 'call.hangup'), methods.write),
                holdCall: flow(serializer.encode.bind(null, 'call.hold'), methods.write),
                unholdCall: flow(serializer.encode.bind(null, 'call.unhold'), methods.write),
                answerCall: flow(serializer.encode.bind(null, 'call.answer'), methods.write),

                getQueues: flow(serializer.encode.bind(null, 'queues.get'), methods.write),
                joinQueue: flow(serializer.encode.bind(null, 'queues.join'), methods.write),
                leaveQueue: flow(serializer.encode.bind(null, 'queues.leave'), methods.write)
            }
        )
    );

    connector.createSocket();

    return connector;

}

module.exports = IsaacConnector;
