'use strict';

var assign = require('lodash.assign');

var externalCallEvent = 'EXTERNALCALLSTATUS';

var refIdKey = 0;

var externalKeys = {
    source: 1,
    status: 2
};

var defaultKeys = {
    queue: 2,
    number: 3,
    status: 4
};

function getProps(isExternal, data) {
    if (!isExternal) {
        return {
            fromQueue: false,
            source: data[externalKeys.source],
            status: data[externalKeys.status]
        };
    }

    return {
        queue: data[defaultKeys.queue],
        number: data[defaultKeys.number],
        status: data[defaultKeys.status]
    };
}

function status(data) {
    var evt = data.shift();
    var serializedData = {
        event: 'call.status',
        refId: data[refIdKey],
        fromQueue: true
    };
    var isExternal = (evt === externalCallEvent);

    assign(
        serializedData,
        getProps(isExternal, data)
    );

    return serializedData;
}

module.exports = status;
