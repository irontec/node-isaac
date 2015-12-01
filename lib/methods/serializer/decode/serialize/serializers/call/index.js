'use strict';

var status = require('./status'),
    hangUp = require('./hangup'),
    hold = require('./hold'),
    unhold = require('./unhold');

var serializers = {
    'CALLSTATUS': status,
    'EXTERNALCALLSTATUS': status,
    'HANGUPOK': hangUp.OK,
    'HANGUPFAILED': hangUp.FAILED,
    'HANGUPUIDOK': hangUp.OK,
    'HANGUPUIDFAILED': hangUp.FAILED,
    'HOLDOK': hold.OK,
    'HOLDFAILED': hold.FAILED,
    'HOLDUIDOK': hold.OK,
    'HOLDUIDFAILED': hold.FAILED,
    'UNHOLDOK': unhold.OK,
    'UNHOLDFAILED': unhold.FAILED,
    'UNHOLDUIDOK': unhold.OK,
    'UNHOLDUIDFAILED': unhold.FAILED
};

module.exports = serializers;
