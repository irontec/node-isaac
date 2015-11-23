
'use strict';

var debug = require('debug')('isaac-wrapper:err');
var isUndefined = require('lodash.isundefined');

function Login(ext, pass) {

    var message;

    if (isUndefined(ext)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: ext', 'Login');
        return;
    }

    if (isUndefined(pass)) {
        debug('[id:"%s" message:"%s" at:"%s"]', this.id, 'Missing parameter: pass', 'Login');
        return;
    }

    message = ['LOGIN', ext, pass].join(' ');


    this.write(message);
}

module.exports = Login;
