'use strict';

var decode = require('./decode');
var encode = require('./encode');

module.exports = {
    decode: decode,
    parse: decode,
    encode: encode,
    stringify: encode,
    messages: require('./encode/messages')
};
