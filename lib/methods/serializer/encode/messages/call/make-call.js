
'use strict';

var debug = require('debug')('isaac-wrapper:err');
var uuid = require('node-uuid');
var isUndefined = require('lodash.isundefined');

function getMakeCallMessage(number, refId) {
    if (isUndefined(number)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: number', 'MakeCall');
        return;
    }

    refId = isUndefined(refId) ? uuid.v4() : refId;

    return ['CALL', refId, number].join(' ');
}

module.exports = getMakeCallMessage;
