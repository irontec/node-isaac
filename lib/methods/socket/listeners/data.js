'use strict';

var debugRead = require('debug')('isaac-wrapper:read');
var debugEvent = require('debug')('isaac-wrapper:event');

var forEach = require('lodash.foreach');

var isaacParser = require('../../parser');

function onDataReceive(data) {
    var messages = data.toString('utf8').split('\r\n');

    forEach(messages, processMessage, this);
}

function processMessage(message) {
    var data;

    if (!message) {
        return;
    }

    debugRead('[id:"%s" message:"%s"]', this.id, message);
    data = isaacParser.decode(message) || null;

    if (!data || !data.event) {
        return;
    }

    debugEvent('[id:"%s" message:"%s"]', this.id, data.event);
    this.emit(data.event, data);
}

module.exports = onDataReceive;
