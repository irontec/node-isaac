'use strict';

var debug = require('debug')('isaac-wrapper:err');
var isUndefined = require('lodash.isundefined');

function getAnswerMessage(refId, isExternal) {

    isExternal = isUndefined(isExternal) ? true : isExternal;

    if (isUndefined(refId)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: refId', 'Answer');
        return;
    }

    return [
        isExternal ? 'ANSWERUID' : 'ANSWER',
        refId
    ].join(' ');

}

module.exports = getAnswerMessage;
