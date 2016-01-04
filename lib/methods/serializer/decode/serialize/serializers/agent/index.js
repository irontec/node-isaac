'use strict';

var login = require('./login');
var logout = require('./logout');

var serializers = {
    LOGINOK: login.OK,
    LOGINFAIL: login.FAILED,
    BYE: logout
};

module.exports = serializers;
