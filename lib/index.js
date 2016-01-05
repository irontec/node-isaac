'use strict';

var assign = require('lodash.assign');
var create = require('lodash.create');
var flow = require('lodash.flow');
var events = require('events');
var uuid = require('node-uuid');

var methods = require('./methods');

var serializer = require('./methods/serializer');

function writeInSocket(evt) {
    return flow(serializer.encode.bind(null, evt), methods.write);
}

var proto = {
    write: methods.write,
    processMessage: serializer.decode,

    createSocket: methods.socket.create,
    connect: methods.socket.connect,
    disconnect: methods.socket.disconnect,

    login: writeInSocket('agent.login'),
    logout: writeInSocket('agent.logout'),

    pause: writeInSocket('device.pause'),
    unpause: writeInSocket('device.unpause'),

    suscribe: writeInSocket('suscribe'),

    createCall: writeInSocket('call.makeCall'),
    hangupCall: writeInSocket('call.hangup'),
    holdCall: writeInSocket('call.hold'),
    unholdCall: writeInSocket('call.unhold'),
    answerCall: writeInSocket('call.answer'),

    getQueues: writeInSocket('queues.get'),
    joinQueue: writeInSocket('queues.join'),
    leaveQueue: writeInSocket('queues.leave')
};

function IsaacConnector() {

    var defaults = {
        constructor: events.EventEmitter,
        id: uuid.v4(),
        connected: false,
        caughtError: false,
        socket: null
    };

    var connector = create(
        events.EventEmitter.prototype,
        assign(
            defaults,
            proto
        )
    );

    connector.createSocket();

    return connector;

}

module.exports = IsaacConnector;
