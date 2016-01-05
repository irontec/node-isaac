'use strict';

var forEach = require('lodash.foreach');
var isArray = require('lodash.isarray');

var status = require('./status');
var hangUp = require('./hangup');
var hold = require('./hold');
var unhold = require('./unhold');

var eventNames = require('./event-names');

var serializers = {};

forEach(eventNames.STATUS, loadSerializers.bind(null, status));
forEach(eventNames.HOLD, loadSerializers.bind(null, hold));
forEach(eventNames.UNHOLD, loadSerializers.bind(null, unhold));
forEach(eventNames.HANGUP, loadSerializers.bind(null, hangUp));

function loadSerializers(type, status, key) {
    var statusArr = isArray(status) ? status : null;

    if (!statusArr) {
        serializers[status] = type;
        return;
    }

    forEach(statusArr, function(statusStr) {
        serializers[statusStr] = type[key];
    });
}

module.exports = serializers;
