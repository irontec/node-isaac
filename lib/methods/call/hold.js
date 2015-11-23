'use strict';

var debug = require('debug')('isaac-wrapper:err');
var isUndefined = require('lodash.isundefined');

function Hold(refId, fromQueue) {

    var message;

    fromQueue = isUndefined(fromQueue) ? true : fromQueue;

    if (isUndefined(refId)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: refId', 'Hold');
        return;
    }

    message = [
        fromQueue ? 'HOLDUID' : 'HOLD',
        refId
    ].join(' ');

    this.write(message);
}

module.exports = Hold;
