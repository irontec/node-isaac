'use strict';

var debug = require('debug')('isaac-wrapper:err');
var isUndefined = require('lodash.isundefined');

function Answer(refId, isExternal) {

    var message;

    isExternal = isUndefined(isExternal) ? true : isExternal;

    if (isUndefined(refId)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: refId', 'Answer');
        return;
    }


    message = [
        isExternal ? 'ANSWERUID' : 'ANSWER',
        refId
    ].join(' ');

    this.write(message);

}

module.exports = Answer;
