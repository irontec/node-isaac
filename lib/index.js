'use strict';

var logger = require('debug');

var forEach = require('lodash.foreach');
var assign = require('lodash.assign');

var Socket = require('net').Socket;
var EventEmitter = require('events').EventEmitter;

var serializer = require('./serializer')();

var actions = require('./actions');
var socketActions = require('./socket');


function IsaacConnector() {

    var emitter, socket, debug;

    emitter = new EventEmitter();
    socket = createSocket();
    debug = {
        'error': logger('isaac-wrapper:err'),
        'err': logger('isaac-wrapper:err'),
        'info': logger('isaac-wrapper:info'),
        'warn': logger('isaac-wrapper:warn')
    };

    var connector = assign(
        // properties
        {
            'connected': false,
            'caughtError': false,
            'socket': socket
        },
        // methods
        {
            'connect': socketActions.connect(debug),
            'disconnect': socketActions.disconnect(debug),
            'login': actions.agent.login(debug),
            'logout': actions.agent.logout(debug),
            'pause': actions.device.pause(debug),
            'unpause': actions.device.unpause(debug),
            'suscribe': actions.suscribe(debug),
            'createCall': actions.call.makeCall(debug),
            'hangupCall': actions.call.hangup(debug),
            'holdCall': actions.call.hold(debug),
            'unholdCall': actions.call.unhold(debug),
            'answerCall': actions.call.answer(debug),
            'getQueues': actions.queues.get(debug),
            'joinQueue': actions.queues.join(debug),
            'leaveQueue': actions.queues.leave(debug),
            'on': emitter.on.bind(emitter),
            'removeAllListeners': emitter.removeAllListeners.bind(emitter)
        }
    );

    return connector;

    function createSocket() {
        var socket = new Socket();
        socket.on('data', onDataReceive);
        socket.on('error', onErrorReceive);
        socket.on('close', onCloseReceive);
        return socket;
    }

    function onErrorReceive(err) {
        connector.caughtError = true;
        debug.error('IsaacConnector.error: %s', err);
        var data = {
            'event': 'isaac.error',
            'error': 'ECONNREFUSED',
            'message': err.toString()
        };
        emitter.emit(data.event, data);
    }

    // TO-DO!!!!
    function onCloseReceive(hadError) {
        var data;
        if (!connector.caughtError && hadError) {
            data = {
                'event': 'isaac.error',
                'error': 'CLOSEDWITHERROR',
                'message': hadError.toString()
            };
            emitter.emit(data.event, data);
        }

        data = {
            'event': 'isaac.disconnect'
        };
        delete connector.socket;
        connector.socket = createSocket();
        connector.connected = false;
        emitter.emit(data.event, data);
    }

    function onDataReceive(data) {
        var messages = data.toString('utf8').split('\r\n');

        forEach(messages, processMessage);
    }

    function processMessage(msg) {
        var data;

        if (!msg) {
            return;
        }

        debug.info('IsaacConnector.read: %s', msg);
        data = serializer.serialize(msg) || null;

        if (!data || !data.event) {
            return;
        }

        debug.info('IsaacConnector.event: %s', data.event);
        emitter.emit(data.event, data);
    }
}

module.exports = IsaacConnector;
