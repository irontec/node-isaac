'use strict';

var get = require('lodash.get');
var isUndefined = require('lodash.isundefined');

var messages = require('./messages');

function encode() {
    var action, encoder;

    action = [].shift.apply(arguments);
    encoder = get(messages, action);

    if (isUndefined(encoder)) {
        throw new Error('Missing ' + action + ' encoder');
    }

    return encoder.apply(null, arguments);
}

module.exports = encode;