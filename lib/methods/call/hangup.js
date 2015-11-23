'use strict';


var debug = require('debug')('isaac-wrapper:err');
var isUndefined = require('lodash.isundefined');

function Hangup(refId, fromQueue) {

    var message;

    fromQueue = isUndefined(fromQueue) ? true : fromQueue;

    if (isUndefined(refId)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: refId', 'Hangup');
        return;
    }

    message = [
        fromQueue ? 'HANGUPUID' : 'HANGUP',
        refId
    ].join(' ');

    this.write(message);
}

module.exports = Hangup;
