'use strict';


var debug = require('debug')('isaac-wrapper:err');
var isUndefined = require('lodash.isundefined');

function getHangupMessage(refId, fromQueue) {

    fromQueue = isUndefined(fromQueue) ? true : fromQueue;

    if (isUndefined(refId)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: refId', 'Hangup');
        return;
    }

    return [
        fromQueue ? 'HANGUPUID' : 'HANGUP',
        refId
    ].join(' ');

}

module.exports = getHangupMessage;
