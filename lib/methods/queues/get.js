'use strict';

function GetQueues() {

    var message;

    message = ['QUEUEINFO'].join(' ');

    this.write(message);
}

module.exports = GetQueues;
