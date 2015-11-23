
'use strict';

var debug = require('debug')('isaac-wrapper:err');
var uuid = require('node-uuid');
var isUndefined = require('lodash.isundefined');

function MakeCall(number, refId) {
    var message;

    if (isUndefined(number)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: number', 'MakeCall');
        return;
    }

    refId = isUndefined(refId) ? uuid.v4() : refId;

    message = ['CALL', refId, number].join(' ');

    this.write(message);
}

module.exports = MakeCall;
