
'use strict';

var debug = require('debug')('isaac-wrapper:err');
var isUndefined = require('lodash.isundefined');

function getLoginMessage(ext, pass) {

    if (isUndefined(ext)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: ext', 'Login');
        return;
    }

    if (isUndefined(pass)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: pass', 'Login');
        return;
    }

    return ['LOGIN', ext, pass].join(' ');
}

module.exports = getLoginMessage;
