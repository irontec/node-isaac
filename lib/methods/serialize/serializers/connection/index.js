'use strict';

var connect = require('./connect'),
    error = require('./error');


var serializers = {
    'Isaac': connect,
    'ERROR': error
};

module.exports = serializers;
