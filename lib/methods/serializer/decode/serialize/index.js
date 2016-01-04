'use strict';

var includes = require('lodash.includes');

var serializers = require('./serializers/index');

var ignoredEvents = ['DEVICESTATUSOK', 'STATUSOK'];

module.exports = serialize;

function serialize(data) {
    var dataArr;
    var evt;

    dataArr = data.replace(/(\r\n|\n|\r)/gm, '').split(' ');
    evt = dataArr[0];

    if (includes(ignoredEvents, evt)) {
        return null;
    }

    if (!serializers.hasOwnProperty(evt)) {
        return null;
    }

    return serializers[evt](dataArr);
}
