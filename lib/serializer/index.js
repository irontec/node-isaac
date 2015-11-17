'use strict';

var _ = require('lodash');

var serializers = require('./serializers');

function Serializer() {

    var ignoredEvents = ['DEVICESTATUSOK', 'STATUSOK'];

    return {
        'serialize': serialize
    };

    function serialize(data) {
        var dataArr, evt;

        dataArr = data.replace(/(\r\n|\n|\r)/gm,'').split(' ');
        evt = dataArr[0];

        if(_.includes(ignoredEvents, evt)) {
            return null;
        }

        if (!serializers.hasOwnProperty(evt)) {
           return null;
        }

        return serializers[evt](dataArr);
    }
}

module.exports = Serializer;
