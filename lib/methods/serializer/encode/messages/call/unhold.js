'use strict';


var debug = require('debug')('isaac-wrapper:err');
var isUndefined = require('lodash.isundefined');

function geUnHoldMessage(refId, fromQueue) {

    fromQueue = isUndefined(fromQueue) ? true : fromQueue;

    if (isUndefined(refId)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: refId', 'Unhold');
        return;
    }

    return [
        fromQueue ? 'UNHOLDUID' : 'UNHOLD',
        refId
    ].join(' ');

}

module.exports = geUnHoldMessage;
