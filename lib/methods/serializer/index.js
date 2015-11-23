'use strict';

var includes = require('lodash.includes');

var serializers = require('./serializers/index');

function Serializer() {

    var ignoredEvents = ['DEVICESTATUSOK', 'STATUSOK'];

    return {
        'serialize': serialize
    };

    function serialize(data) {
        var dataArr, evt;

        dataArr = data.replace(/(\r\n|\n|\r)/gm,'').split(' ');
        evt = dataArr[0];

        if(includes(ignoredEvents, evt)) {
            return null;
        }

        if (!serializers.hasOwnProperty(evt)) {
           return null;
        }

        return serializers[evt](dataArr);
    }
}

module.exports = Serializer;
