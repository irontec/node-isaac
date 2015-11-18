'use strict';

var forEach = require('lodash.foreach');
var assign = require('lodash.assign');

var Socket = require('net').Socket;
var EventEmitter = require('events').EventEmitter;

var serializer = require('./serializer')();

var actions = require('./actions');
var socketActions = require('./socket');


function IsaacConnector(logProvider) {

    var emitter, socket, logger;

    emitter = new EventEmitter();
    socket = createSocket();
    logger = logProvider || console;

    var connector = assign(
        // properties
        {
            'connected': false,
            'caughtError': false,
            'socket': socket
        },
        // methods
        {
            'connect': socketActions.connect(logger),
            'disconnect': socketActions.disconnect(logger),
            'login': actions.agent.login(logger),
            'logout': actions.agent.logout(logger),
            'pause': actions.device.pause(logger),
            'unpause': actions.device.unpause(logger),
            'suscribe': actions.suscribe(logger),
            'createCall': actions.call.makeCall(logger),
            'hangupCall': actions.call.hangup(logger),
            'holdCall': actions.call.hold(logger),
            'unholdCall': actions.call.unhold(logger),
            'answerCall': actions.call.answer(logger),
            'getQueues': actions.queues.get(logger),
            'joinQueue': actions.queues.join(logger),
            'leaveQueue': actions.queues.leave(logger),
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
        logger.error('IsaacConnector.error', err);
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

        logger.info('IsaacConnector.read', msg);
        data = serializer.serialize(msg) || null;

        if (!data || !data.event) {
            return;
        }

        logger.log('IsaacConnector.event: ' + data.event);
        emitter.emit(data.event, data);
    }
}

module.exports = IsaacConnector;
