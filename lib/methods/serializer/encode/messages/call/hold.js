'use strict';

var debug = require('debug')('isaac-wrapper:err');
var isUndefined = require('lodash.isundefined');

function getHoldMessage(refId, fromQueue) {

    fromQueue = isUndefined(fromQueue) ? true : fromQueue;

    if (isUndefined(refId)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: refId', 'Hold');
        return;
    }

    return [
        fromQueue ? 'HOLDUID' : 'HOLD',
        refId
    ].join(' ');

}

module.exports = getHoldMessage;
