'use strict';


var debug = require('debug')('isaac-wrapper:err');
var isUndefined = require('lodash.isundefined');

function Unhold(refId, fromQueue) {

    var message;

    fromQueue = isUndefined(fromQueue) ? true : fromQueue;

    if (isUndefined(refId)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: refId', 'Unhold');
        return;
    }

    message = [
        fromQueue ? 'UNHOLDUID' : 'UNHOLD',
        refId
    ].join(' ');

    this.write(message);
}

module.exports = Unhold;
