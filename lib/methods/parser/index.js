'use strict';

var isaacParser = require('isaac-wrapper.parser').default;
var includes = require('lodash.includes');

var ignoredEvents = [
    'DEVICESTATUSOK', 
    'STATUSOK', 
    'ACDPAUSEOK', 
    'ACDUNPAUSEOK',
    'ALREADY'
];

function encode() {
    var encoded = isaacParser.encode.apply(null, arguments);
    return encoded;
}

function decode(msg) {
    var dataArr = arguments[0].replace(/(\r\n|\n|\r)/gm, '').split(' ');
    var decoderName = dataArr[0];
    
    if (includes(ignoredEvents, decoderName)) {
        return null;
    }
    
    try {
        return isaacParser.decode(msg);
    } catch (err) {
        return null;
    }
}

module.exports = {
    encode: encode,
    decode: decode
}