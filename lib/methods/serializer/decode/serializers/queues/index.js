'use strict';

var queueInfo = require('./queueinfo');
var queueJoin = require('./join');
var queueLeave = require('./leave');

var serializers = {
    // Queues
    QUEUEINFOOK: queueInfo,
    QUEUEJOINOK: queueJoin.OK,
    QUEUEJOINFAILED: queueJoin.FAILED,
    QUEUELEAVEOK: queueLeave.OK,
    QUEUELEAVEFAILED: queueLeave.FAILED
};

module.exports = serializers;
