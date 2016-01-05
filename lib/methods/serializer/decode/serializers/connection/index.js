'use strict';

var connect = require('./connect');
var error = require('./error');

var serializers = {
    Isaac: connect,
    ERROR: error
};

module.exports = serializers;
