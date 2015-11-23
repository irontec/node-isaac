'use strict';

var debug = require('debug');

var debugRead = debug('isaac-wrapper:read');
var debugEvent = debug('isaac-wrapper:event');

var serializer = require('./serializer')();

function processMessage(msg) {
    var data;

    if (!msg) {
        return;
    }


    debugRead('[id:"%s" message:"%s"]', this.id, msg);
    data = serializer.serialize(msg) || null;

    if (!data || !data.event) {
        return;
    }

    debugEvent('[id:"%s" message:"%s"]', this.id, data.event);
    this.emit(data.event, data);

}

module.exports = processMessage;