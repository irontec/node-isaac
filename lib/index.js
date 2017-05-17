'use strict';

var assign = require('lodash.assign');
var create = require('lodash.create');
var flow = require('lodash.flow');
var events = require('events');
var uuid = require('node-uuid');

var methods = require('./methods');

var isaacParser = methods.parser;

function writeInSocket(evt) {
    return flow(isaacParser.encode.bind(null, evt), methods.write);
}

var proto = {
    write: methods.write,
    processMessage: isaacParser.decode,

    createSocket: methods.socket.create,
    connect: methods.socket.connect,
    disconnect: methods.socket.disconnect,

    login: writeInSocket('agent.login'),
    logout: writeInSocket('agent.logout'),

    ping: writeInSocket('ping'),

    pause: writeInSocket('device.pause'),
    unpause: writeInSocket('device.unpause'),

    subscribe: writeInSocket('subscribe'),

    // Legacy support
    suscribe: writeInSocket('subscribe'),

    createCall: writeInSocket('call.create'),
    hangupCall: writeInSocket('call.hangup'),
    holdCall: writeInSocket('call.hold'),
    unholdCall: writeInSocket('call.unhold'),
    answerCall: writeInSocket('call.answer'),
    redirectCall: writeInSocket('call.redirect'),

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
